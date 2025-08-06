# PowerShell script to create the correct client package
Write-Host "Creating Client Package for IIS Deployment..." -ForegroundColor Cyan

# Check if dist folder exists
if (!(Test-Path "dist")) {
    Write-Host "Error: dist folder not found!" -ForegroundColor Red
    Write-Host "Please run 'npm run build:iis' first" -ForegroundColor Yellow
    exit 1
}

# Create package directory
$packageDir = "CLIENT-PACKAGE-$(Get-Date -Format 'yyyy-MM-dd-HHmm')"
Write-Host "Creating package directory: $packageDir" -ForegroundColor Green
New-Item -ItemType Directory -Path $packageDir -Force | Out-Null

# Copy all dist contents to package directory
Write-Host "Copying website files..." -ForegroundColor Green
Copy-Item -Path "dist\*" -Destination $packageDir -Recurse -Force

# Copy instructions
Write-Host "Adding deployment instructions..." -ForegroundColor Green
Copy-Item -Path "CLIENT-PACKAGE-INSTRUCTIONS.txt" -Destination $packageDir
Copy-Item -Path "IIS-DEPLOYMENT.md" -Destination $packageDir

# Create ZIP file
$zipPath = "$packageDir.zip"
Write-Host "Creating ZIP file: $zipPath" -ForegroundColor Green

# Remove existing zip if it exists
if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}

# Create ZIP using .NET
Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory($packageDir, $zipPath)

# Clean up temporary directory
Remove-Item -Path $packageDir -Recurse -Force

Write-Host ""
Write-Host "CLIENT PACKAGE CREATED SUCCESSFULLY!" -ForegroundColor Green
Write-Host "Package file: $zipPath" -ForegroundColor White
Write-Host "Send this ZIP file to your client!" -ForegroundColor Cyan