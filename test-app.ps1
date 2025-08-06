# Simple Application Test Script
Write-Host "=== React Application Test Script ===" -ForegroundColor Cyan
Write-Host "Testing your built application..." -ForegroundColor White
Write-Host ""

# Check if dist folder exists
if (-not (Test-Path ".\dist")) {
    Write-Host "ERROR: Dist folder not found! Please run 'npm run build:iis' first" -ForegroundColor Red
    exit 1
}

Write-Host "SUCCESS: Dist folder found" -ForegroundColor Green

# Check if web.config exists
if (-not (Test-Path ".\dist\web.config")) {
    Write-Host "ERROR: web.config not found in dist folder!" -ForegroundColor Red
    Write-Host "This is required for IIS routing to work properly" -ForegroundColor Yellow
    exit 1
}

Write-Host "SUCCESS: web.config found" -ForegroundColor Green

# Check if index.html exists
if (-not (Test-Path ".\dist\index.html")) {
    Write-Host "ERROR: index.html not found in dist folder!" -ForegroundColor Red
    exit 1
}

Write-Host "SUCCESS: index.html found" -ForegroundColor Green

# Check if assets folder exists
if (-not (Test-Path ".\dist\assets")) {
    Write-Host "ERROR: assets folder not found in dist folder!" -ForegroundColor Red
    exit 1
}

Write-Host "SUCCESS: assets folder found" -ForegroundColor Green

# List key files in dist
Write-Host "`nContents of dist folder:" -ForegroundColor Cyan
Get-ChildItem ".\dist" | ForEach-Object {
    if ($_.PSIsContainer) {
        Write-Host "DIR: $($_.Name)/" -ForegroundColor Blue
    } else {
        Write-Host "FILE: $($_.Name)" -ForegroundColor White
    }
}

# Check assets folder contents
Write-Host "`nAssets folder contents:" -ForegroundColor Cyan
Get-ChildItem ".\dist\assets" | ForEach-Object {
    Write-Host "  $($_.Name)" -ForegroundColor Gray
}

Write-Host "`n=== Build Verification Complete ===" -ForegroundColor Green
Write-Host "SUCCESS: Your application is ready for deployment!" -ForegroundColor Green

Write-Host "`n=== Manual Testing Instructions ===" -ForegroundColor Cyan
Write-Host "Since you don't have admin privileges, here are your options:" -ForegroundColor White
Write-Host ""

Write-Host "Option 1: Ask your system administrator to:" -ForegroundColor Yellow
Write-Host "1. Create folder: C:\inetpub\wwwroot\summit-scroll-motion" -ForegroundColor White
Write-Host "2. Copy all files from .\dist\ to that folder" -ForegroundColor White
Write-Host "3. Test at: http://localhost/summit-scroll-motion" -ForegroundColor White

Write-Host "`nOption 2: Use a local web server (for testing only):" -ForegroundColor Yellow
Write-Host "1. Run: npx serve dist --port 3000" -ForegroundColor White
Write-Host "2. Test at: http://localhost:3000" -ForegroundColor White
Write-Host "3. Note: This won't test IIS-specific features like URL rewriting" -ForegroundColor Gray

Write-Host "`nOption 3: Manual file copy:" -ForegroundColor Yellow
Write-Host "1. Open File Explorer as Administrator" -ForegroundColor White
Write-Host "2. Navigate to C:\inetpub\wwwroot\" -ForegroundColor White
Write-Host "3. Create folder 'summit-scroll-motion'" -ForegroundColor White
Write-Host "4. Copy all files from .\dist\ to that folder" -ForegroundColor White

Write-Host "`n=== Testing Checklist ===" -ForegroundColor Cyan
Write-Host "Once deployed, test these URLs:" -ForegroundColor White
Write-Host "• Home: http://localhost/summit-scroll-motion/" -ForegroundColor Gray
Write-Host "• About: http://localhost/summit-scroll-motion/about" -ForegroundColor Gray
Write-Host "• Services: http://localhost/summit-scroll-motion/services" -ForegroundColor Gray
Write-Host "• Contact: http://localhost/summit-scroll-motion/contact" -ForegroundColor Gray

Write-Host "`n=== Critical Tests ===" -ForegroundColor Cyan
Write-Host "1. Direct navigation to /about should work (not 404)" -ForegroundColor White
Write-Host "2. Page refresh on /about should work" -ForegroundColor White
Write-Host "3. All images and styles should load" -ForegroundColor White
Write-Host "4. Navigation between pages should be smooth" -ForegroundColor White

Write-Host "`n=== Troubleshooting ===" -ForegroundColor Cyan
Write-Host "If you get 404 errors on direct navigation:" -ForegroundColor Yellow
Write-Host "• URL Rewrite Module may not be installed" -ForegroundColor White
Write-Host "• Ask your system administrator to install it" -ForegroundColor White
Write-Host "• Download from: https://www.iis.net/downloads/microsoft/url-rewrite" -ForegroundColor White

Write-Host "`nScript completed successfully!" -ForegroundColor Green 