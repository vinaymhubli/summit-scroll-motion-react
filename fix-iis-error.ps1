# IIS Error 500.19 Diagnostic and Fix Script
# Run this script as Administrator

Write-Host "=== IIS Error 500.19 Diagnostic Script ===" -ForegroundColor Cyan
Write-Host "This script will help identify and fix the web.config error" -ForegroundColor White
Write-Host ""

# Check if running as Administrator
if (-NOT ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
    Write-Host "❌ This script must be run as Administrator!" -ForegroundColor Red
    Write-Host "Please right-click PowerShell and select 'Run as Administrator'" -ForegroundColor Yellow
    exit 1
}

Write-Host "Step 1: Checking URL Rewrite Module..." -ForegroundColor Green
try {
    Import-Module WebAdministration
    $rewriteModule = Get-WebGlobalModule -Name "RewriteModule" -ErrorAction Stop
    Write-Host "✅ URL Rewrite Module is installed" -ForegroundColor Green
} catch {
    Write-Host "❌ URL Rewrite Module is NOT installed!" -ForegroundColor Red
    Write-Host "This is the most common cause of Error 500.19" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "To fix this:" -ForegroundColor Cyan
    Write-Host "1. Download URL Rewrite Module from:" -ForegroundColor White
    Write-Host "   https://www.iis.net/downloads/microsoft/url-rewrite" -ForegroundColor White
    Write-Host "2. Run the installer as Administrator" -ForegroundColor White
    Write-Host "3. Restart IIS after installation" -ForegroundColor White
    
    $installUrl = "https://www.iis.net/downloads/microsoft/url-rewrite"
    $openBrowser = Read-Host "`nOpen browser to download URL Rewrite Module? (y/N)"
    if ($openBrowser -eq 'y' -or $openBrowser -eq 'Y') {
        Start-Process $installUrl
    }
    exit 1
}

Write-Host "`nStep 2: Checking web.config file..." -ForegroundColor Green
$webConfigPath = "C:\inetpub\wwwroot\summit-scroll-motion\web.config"

if (-not (Test-Path $webConfigPath)) {
    Write-Host "❌ web.config not found at: $webConfigPath" -ForegroundColor Red
    Write-Host "Please ensure you copied all files from the dist folder" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ web.config found" -ForegroundColor Green

# Check file encoding
Write-Host "`nStep 3: Checking web.config encoding..." -ForegroundColor Green
try {
    $content = Get-Content $webConfigPath -Raw -Encoding UTF8
    if ($content -match '^\s*<\?xml') {
        Write-Host "✅ web.config has proper XML declaration" -ForegroundColor Green
    } else {
        Write-Host "⚠️  web.config may have encoding issues" -ForegroundColor Yellow
    }
} catch {
    Write-Host "❌ Error reading web.config: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "`nStep 4: Checking IIS application pool..." -ForegroundColor Green
try {
    $appPool = Get-IISAppPool -Name "DefaultAppPool" -ErrorAction Stop
    Write-Host "✅ DefaultAppPool is running" -ForegroundColor Green
} catch {
    Write-Host "❌ DefaultAppPool not found or not running" -ForegroundColor Red
}

Write-Host "`nStep 5: Checking file permissions..." -ForegroundColor Green
$folderPath = "C:\inetpub\wwwroot\summit-scroll-motion"
try {
    $acl = Get-Acl $folderPath
    $iisUsers = $acl.Access | Where-Object { $_.IdentityReference -like "*IIS_IUSRS*" -or $_.IdentityReference -like "*IUSR*" }
    
    if ($iisUsers) {
        Write-Host "✅ IIS users have access to the folder" -ForegroundColor Green
    } else {
        Write-Host "⚠️  IIS users may not have proper access" -ForegroundColor Yellow
        Write-Host "Consider running: icacls `"$folderPath`" /grant IIS_IUSRS:(OI)(CI)(RX)" -ForegroundColor White
    }
} catch {
    Write-Host "❌ Error checking permissions: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "`nStep 6: Creating a simplified web.config for testing..." -ForegroundColor Green
$simpleWebConfig = @"
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="React Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
"@

$backupPath = "C:\inetpub\wwwroot\summit-scroll-motion\web.config.backup"
$simplePath = "C:\inetpub\wwwroot\summit-scroll-motion\web.config.simple"

# Backup current web.config
if (Test-Path $webConfigPath) {
    Copy-Item $webConfigPath $backupPath -Force
    Write-Host "✅ Current web.config backed up to: web.config.backup" -ForegroundColor Green
}

# Create simplified version
$simpleWebConfig | Out-File -FilePath $simplePath -Encoding UTF8
Write-Host "✅ Simplified web.config created for testing" -ForegroundColor Green

Write-Host "`n=== Diagnostic Complete ===" -ForegroundColor Cyan
Write-Host "If URL Rewrite Module is installed, try these steps:" -ForegroundColor White
Write-Host ""
Write-Host "1. Test with simplified web.config:" -ForegroundColor Yellow
Write-Host "   Rename web.config to web.config.original" -ForegroundColor White
Write-Host "   Rename web.config.simple to web.config" -ForegroundColor White
Write-Host "   Test: http://localhost/summit-scroll-motion" -ForegroundColor White
Write-Host ""
Write-Host "2. If that works, the issue was with the original web.config" -ForegroundColor White
Write-Host "   If not, the issue is with URL Rewrite Module" -ForegroundColor White
Write-Host ""
Write-Host "3. Restart IIS if needed:" -ForegroundColor Yellow
Write-Host "   iisreset" -ForegroundColor White

Write-Host "`nScript completed!" -ForegroundColor Green 