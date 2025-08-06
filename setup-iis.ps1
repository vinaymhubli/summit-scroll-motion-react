# IIS Setup Script
# This script helps enable IIS and install required components
# Run as Administrator

Write-Host "=== IIS Setup Script ===" -ForegroundColor Cyan
Write-Host "This script will help you enable IIS and required components" -ForegroundColor White
Write-Host ""

# Check if running as Administrator
if (-NOT ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Write-Host "❌ This script must be run as Administrator!" -ForegroundColor Red
    Write-Host "Please right-click PowerShell and select 'Run as Administrator'" -ForegroundColor Yellow
    exit 1
}

Write-Host "Step 1: Checking current IIS installation..." -ForegroundColor Green
try {
    $iisService = Get-Service -Name W3SVC -ErrorAction Stop
    Write-Host "✅ IIS is already installed" -ForegroundColor Green
} catch {
    Write-Host "IIS is not installed. Enabling IIS features..." -ForegroundColor Yellow
    
    # Enable IIS features
    $features = @(
        "IIS-WebServerRole",
        "IIS-WebServer",
        "IIS-CommonHttpFeatures",
        "IIS-StaticContent",
        "IIS-DefaultDocument",
        "IIS-DirectoryBrowsing",
        "IIS-HttpErrors",
        "IIS-HttpLogging",
        "IIS-RequestFiltering",
        "IIS-ApplicationDevelopment",
        "IIS-ASPNET45",
        "IIS-NetFxExtensibility45",
        "IIS-HealthAndDiagnostics",
        "IIS-HttpCompressionStatic",
        "IIS-WebServerManagementTools",
        "IIS-ManagementConsole"
    )
    
    foreach ($feature in $features) {
        Write-Host "Enabling $feature..." -ForegroundColor Yellow
        try {
            Enable-WindowsOptionalFeature -Online -FeatureName $feature -All -NoRestart
            Write-Host "✅ $feature enabled" -ForegroundColor Green
        } catch {
            Write-Host "⚠️  $feature may already be enabled or failed: $($_.Exception.Message)" -ForegroundColor Yellow
        }
    }
    
    Write-Host "`nIIS installation completed. A restart may be required." -ForegroundColor Green
}

Write-Host "`nStep 2: Checking URL Rewrite Module..." -ForegroundColor Green
try {
    Import-Module WebAdministration
    $rewriteModule = Get-WebGlobalModule -Name "RewriteModule" -ErrorAction Stop
    Write-Host "✅ URL Rewrite Module is already installed" -ForegroundColor Green
} catch {
    Write-Host "❌ URL Rewrite Module is not installed!" -ForegroundColor Red
    Write-Host "`nPlease download and install the URL Rewrite Module:" -ForegroundColor Yellow
    Write-Host "1. Go to: https://www.iis.net/downloads/microsoft/url-rewrite" -ForegroundColor White
    Write-Host "2. Download the latest version" -ForegroundColor White
    Write-Host "3. Run the installer as Administrator" -ForegroundColor White
    Write-Host "4. Restart this script after installation" -ForegroundColor White
    
    $installUrl = "https://www.iis.net/downloads/microsoft/url-rewrite"
    $openBrowser = Read-Host "`nOpen browser to download URL Rewrite Module? (y/N)"
    if ($openBrowser -eq 'y' -or $openBrowser -eq 'Y') {
        Start-Process $installUrl
    }
    exit 1
}

Write-Host "`nStep 3: Starting IIS service..." -ForegroundColor Green
try {
    Start-Service W3SVC
    Write-Host "✅ IIS service started successfully" -ForegroundColor Green
} catch {
    Write-Host "⚠️  IIS service may already be running or failed to start" -ForegroundColor Yellow
}

Write-Host "`nStep 4: Testing IIS..." -ForegroundColor Green
try {
    $response = Invoke-WebRequest -Uri "http://localhost" -UseBasicParsing -TimeoutSec 5
    Write-Host "✅ IIS is responding correctly" -ForegroundColor Green
} catch {
    Write-Host "⚠️  IIS may not be responding yet. This is normal if just installed." -ForegroundColor Yellow
}

Write-Host "`n=== Setup Complete ===" -ForegroundColor Cyan
Write-Host "✅ IIS is now ready for your React application!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Yellow
Write-Host "1. Run: npm run build:iis" -ForegroundColor White
Write-Host "2. Run: .\test-local-iis.ps1" -ForegroundColor White
Write-Host "3. Test your application at: http://localhost/summit-scroll-motion" -ForegroundColor White

Write-Host "`nUseful commands:" -ForegroundColor Cyan
Write-Host "Check IIS status: Get-Service -Name W3SVC" -ForegroundColor White
Write-Host "Restart IIS: iisreset" -ForegroundColor White
Write-Host "Open IIS Manager: inetmgr" -ForegroundColor White

Write-Host "`nSetup completed successfully!" -ForegroundColor Green 