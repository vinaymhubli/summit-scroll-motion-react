# IIS Configuration Check Script
# Run this script as Administrator

Write-Host "=== IIS Configuration Check ===" -ForegroundColor Cyan
Write-Host "Checking IIS setup for your React application..." -ForegroundColor White
Write-Host ""

# Check if running as Administrator
if (-NOT ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Write-Host "❌ This script must be run as Administrator!" -ForegroundColor Red
    Write-Host "Please right-click PowerShell and select 'Run as Administrator'" -ForegroundColor Yellow
    exit 1
}

Write-Host "Step 1: Checking IIS service status..." -ForegroundColor Green
try {
    $iisService = Get-Service -Name W3SVC -ErrorAction Stop
    Write-Host "✅ IIS Service Status: $($iisService.Status)" -ForegroundColor Green
} catch {
    Write-Host "❌ IIS Service not found!" -ForegroundColor Red
    exit 1
}

Write-Host "`nStep 2: Checking Default Web Site..." -ForegroundColor Green
try {
    Import-Module WebAdministration
    $defaultSite = Get-Website -Name "Default Web Site" -ErrorAction Stop
    Write-Host "✅ Default Web Site Status: $($defaultSite.State)" -ForegroundColor Green
} catch {
    Write-Host "❌ Default Web Site not found!" -ForegroundColor Red
    exit 1
}

Write-Host "`nStep 3: Checking application configuration..." -ForegroundColor Green
$appPath = "C:\inetpub\wwwroot\summit-scroll-motion"
try {
    $app = Get-WebApplication -Site "Default Web Site" -Name "summit-scroll-motion" -ErrorAction Stop
    Write-Host "✅ Application found: $($app.Path)" -ForegroundColor Green
    Write-Host "   Physical Path: $($app.PhysicalPath)" -ForegroundColor Gray
} catch {
    Write-Host "⚠️  Application not configured in IIS" -ForegroundColor Yellow
    Write-Host "   This might be the issue - IIS needs to know about your application" -ForegroundColor White
}

Write-Host "`nStep 4: Checking file structure..." -ForegroundColor Green
$requiredFiles = @("index.html", "web.config", "assets")
foreach ($file in $requiredFiles) {
    $filePath = Join-Path $appPath $file
    if (Test-Path $filePath) {
        Write-Host "✅ $file found" -ForegroundColor Green
    } else {
        Write-Host "❌ $file missing" -ForegroundColor Red
    }
}

Write-Host "`nStep 5: Testing direct file access..." -ForegroundColor Green
$testFiles = @(
    @{Path = "index.html"; Description = "Main HTML file"},
    @{Path = "assets/index-DdbcTJmB.js"; Description = "Main JavaScript file"},
    @{Path = "assets/index-Dd9LlfWO.css"; Description = "Main CSS file"}
)

foreach ($test in $testFiles) {
    $fullPath = Join-Path $appPath $test.Path
    if (Test-Path $fullPath) {
        Write-Host "✅ $($test.Description) exists" -ForegroundColor Green
    } else {
        Write-Host "❌ $($test.Description) missing" -ForegroundColor Red
    }
}

Write-Host "`nStep 6: Checking IIS logs..." -ForegroundColor Green
$logPath = "C:\inetpub\logs\LogFiles\W3SVC1"
if (Test-Path $logPath) {
    $latestLog = Get-ChildItem $logPath | Sort-Object LastWriteTime | Select-Object -Last 1
    if ($latestLog) {
        Write-Host "✅ Latest log file: $($latestLog.Name)" -ForegroundColor Green
        Write-Host "   Check this file for detailed error information" -ForegroundColor Gray
    }
} else {
    Write-Host "⚠️  Log directory not found" -ForegroundColor Yellow
}

Write-Host "`n=== Possible Solutions ===" -ForegroundColor Cyan

Write-Host "If the application is not configured in IIS, try these steps:" -ForegroundColor White
Write-Host ""
Write-Host "Option 1: Create IIS Application (Recommended)" -ForegroundColor Yellow
Write-Host "New-WebApplication -Name 'summit-scroll-motion' -Site 'Default Web Site' -PhysicalPath '$appPath' -ApplicationPool 'DefaultAppPool'" -ForegroundColor White
Write-Host ""
Write-Host "Option 2: Test without application configuration" -ForegroundColor Yellow
Write-Host "Try accessing: http://localhost/summit-scroll-motion/index.html" -ForegroundColor White
Write-Host ""
Write-Host "Option 3: Check IIS Manager" -ForegroundColor Yellow
Write-Host "1. Open IIS Manager (inetmgr)" -ForegroundColor White
Write-Host "2. Expand Default Web Site" -ForegroundColor White
Write-Host "3. Look for 'summit-scroll-motion' application" -ForegroundColor White
Write-Host "4. If not there, right-click Default Web Site → Add Application" -ForegroundColor White

Write-Host "`nScript completed!" -ForegroundColor Green 