# Quick Redeployment Script
# Run this script as Administrator

Write-Host "=== React Application Redeployment ===" -ForegroundColor Cyan
Write-Host ""

# Step 1: Build the application
Write-Host "Step 1: Building application..." -ForegroundColor Green
npm run build:iis

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completed successfully" -ForegroundColor Green

# Step 2: Copy files to IIS
Write-Host "`nStep 2: Copying files to IIS..." -ForegroundColor Green
$sourcePath = ".\dist\*"
$destinationPath = "C:\inetpub\wwwroot\summit-scroll-motion\"

try {
    Copy-Item -Path $sourcePath -Destination $destinationPath -Recurse -Force
    Write-Host "✅ Files copied successfully" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to copy files: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Please run this script as Administrator" -ForegroundColor Yellow
    exit 1
}

# Step 3: Test the application
Write-Host "`nStep 3: Testing application..." -ForegroundColor Green
Write-Host "Your updated application is now available at:" -ForegroundColor White
Write-Host "http://localhost:81/summit-scroll-motion/" -ForegroundColor Cyan

Write-Host "`n=== Redeployment Complete ===" -ForegroundColor Green
Write-Host "Please test your application to ensure everything works correctly!" -ForegroundColor White
