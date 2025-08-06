# Local IIS Testing Script
# Run this script as Administrator in your project directory

param(
    [string]$SiteName = "summit-scroll-motion",
    [string]$Port = "80"
)

Write-Host "=== Local IIS Testing Script ===" -ForegroundColor Cyan
Write-Host "This script will help you test your React app on local IIS" -ForegroundColor White
Write-Host ""

# Check if running as Administrator
if (-NOT ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Write-Host "❌ This script must be run as Administrator!" -ForegroundColor Red
    Write-Host "Please right-click PowerShell and select 'Run as Administrator'" -ForegroundColor Yellow
    exit 1
}

# Step 1: Check if IIS is installed
Write-Host "Step 1: Checking IIS installation..." -ForegroundColor Green
try {
    $iisService = Get-Service -Name W3SVC -ErrorAction Stop
    if ($iisService.Status -eq "Running") {
        Write-Host "✅ IIS is installed and running" -ForegroundColor Green
    } else {
        Write-Host "⚠️  IIS is installed but not running. Starting..." -ForegroundColor Yellow
        Start-Service W3SVC
        Write-Host "✅ IIS started successfully" -ForegroundColor Green
    }
} catch {
    Write-Host "❌ IIS is not installed!" -ForegroundColor Red
    Write-Host "Please enable IIS first using the LOCAL-IIS-TESTING.md guide" -ForegroundColor Yellow
    exit 1
}

# Step 2: Check if URL Rewrite Module is installed
Write-Host "`nStep 2: Checking URL Rewrite Module..." -ForegroundColor Green
try {
    Import-Module WebAdministration
    $rewriteModule = Get-WebGlobalModule -Name "RewriteModule" -ErrorAction Stop
    Write-Host "✅ URL Rewrite Module is installed" -ForegroundColor Green
} catch {
    Write-Host "❌ URL Rewrite Module is not installed!" -ForegroundColor Red
    Write-Host "Please download and install from: https://www.iis.net/downloads/microsoft/url-rewrite" -ForegroundColor Yellow
    exit 1
}

# Step 3: Build the application
Write-Host "`nStep 3: Building application..." -ForegroundColor Green
try {
    Write-Host "Running: npm run build:iis" -ForegroundColor Yellow
    npm run build:iis
    if ($LASTEXITCODE -ne 0) {
        throw "Build failed"
    }
    Write-Host "✅ Application built successfully" -ForegroundColor Green
} catch {
    Write-Host "❌ Build failed! Please check your npm dependencies and try again" -ForegroundColor Red
    exit 1
}

# Step 4: Check if dist folder exists
$distPath = ".\dist"
if (-not (Test-Path $distPath)) {
    Write-Host "❌ Dist folder not found! Build may have failed" -ForegroundColor Red
    exit 1
}

# Step 5: Check if web.config exists in dist
$webConfigPath = ".\dist\web.config"
if (-not (Test-Path $webConfigPath)) {
    Write-Host "❌ web.config not found in dist folder!" -ForegroundColor Red
    Write-Host "This is required for IIS routing to work properly" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ web.config found in dist folder" -ForegroundColor Green

# Step 6: Create IIS application
Write-Host "`nStep 4: Creating IIS application..." -ForegroundColor Green
$fullDistPath = (Resolve-Path $distPath).Path
$siteUrl = "http://localhost/$SiteName"

try {
    # Check if application already exists
    $existingApp = Get-WebApplication -Site "Default Web Site" -Name $SiteName -ErrorAction SilentlyContinue
    
    if ($existingApp) {
        Write-Host "⚠️  Application '$SiteName' already exists. Removing..." -ForegroundColor Yellow
        Remove-WebApplication -Site "Default Web Site" -Name $SiteName
    }
    
    # Create new application
    New-WebApplication -Name $SiteName -Site "Default Web Site" -PhysicalPath $fullDistPath -ApplicationPool "DefaultAppPool"
    Write-Host "✅ IIS application created successfully" -ForegroundColor Green
    Write-Host "   URL: $siteUrl" -ForegroundColor Cyan
    
} catch {
    Write-Host "❌ Failed to create IIS application: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

# Step 7: Test the application
Write-Host "`nStep 5: Testing application..." -ForegroundColor Green
Write-Host "Waiting 3 seconds for IIS to process the new application..." -ForegroundColor Yellow
Start-Sleep -Seconds 3

$testUrls = @(
    @{Url = "$siteUrl/"; Description = "Home page"},
    @{Url = "$siteUrl/about"; Description = "About page"},
    @{Url = "$siteUrl/services"; Description = "Services page"},
    @{Url = "$siteUrl/contact"; Description = "Contact page"}
)

$allTestsPassed = $true

foreach ($test in $testUrls) {
    try {
        Write-Host "Testing $($test.Description)..." -ForegroundColor Yellow -NoNewline
        $response = Invoke-WebRequest -Uri $test.Url -UseBasicParsing -TimeoutSec 10
        if ($response.StatusCode -eq 200) {
            Write-Host " ✅" -ForegroundColor Green
        } else {
            Write-Host " ❌ (Status: $($response.StatusCode))" -ForegroundColor Red
            $allTestsPassed = $false
        }
    } catch {
        Write-Host " ❌ (Error: $($_.Exception.Message))" -ForegroundColor Red
        $allTestsPassed = $false
    }
}

# Step 8: Summary
Write-Host "`n=== Test Summary ===" -ForegroundColor Cyan
if ($allTestsPassed) {
    Write-Host "🎉 All tests passed! Your application is working correctly on IIS" -ForegroundColor Green
    Write-Host "`nYou can now access your application at:" -ForegroundColor White
    Write-Host "   $siteUrl" -ForegroundColor Cyan
    Write-Host "`nAdditional testing you should do manually:" -ForegroundColor Yellow
    Write-Host "1. Test page refresh on sub-routes (e.g., refresh on /about)" -ForegroundColor White
    Write-Host "2. Check that all images and assets load properly" -ForegroundColor White
    Write-Host "3. Test navigation between pages" -ForegroundColor White
    Write-Host "4. Check browser console for any JavaScript errors" -ForegroundColor White
} else {
    Write-Host "❌ Some tests failed. Please check the issues above" -ForegroundColor Red
    Write-Host "`nTroubleshooting tips:" -ForegroundColor Yellow
    Write-Host "1. Check IIS logs at: C:\inetpub\logs\LogFiles\W3SVC1\" -ForegroundColor White
    Write-Host "2. Verify web.config is in the dist folder" -ForegroundColor White
    Write-Host "3. Ensure URL Rewrite Module is installed" -ForegroundColor White
    Write-Host "4. Check browser developer tools for errors" -ForegroundColor White
}

Write-Host "`n=== Useful Commands ===" -ForegroundColor Cyan
Write-Host "Restart IIS: iisreset" -ForegroundColor White
Write-Host "Check IIS status: Get-Service -Name W3SVC" -ForegroundColor White
Write-Host "Rebuild and test: npm run build:iis && .\test-local-iis.ps1" -ForegroundColor White

Write-Host "`nScript completed!" -ForegroundColor Green