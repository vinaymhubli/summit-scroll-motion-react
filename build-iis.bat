@echo off
echo ========================================
echo IIS Build Script for React Application
echo ========================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm is not installed or not in PATH
    pause
    exit /b 1
)

echo Building application for IIS deployment...
echo.

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo ERROR: Failed to install dependencies
        pause
        exit /b 1
    )
)

REM Clean previous build
echo Cleaning previous build...
if exist "dist" (
    rmdir /s /q "dist"
)

REM Build for IIS
echo Building for IIS...
npm run build:iis
if %errorlevel% neq 0 (
    echo ERROR: Build failed
    pause
    exit /b 1
)

echo.
echo ========================================
echo Build completed successfully!
echo ========================================
echo.
echo Your IIS-ready files are in the 'dist' folder.
echo Copy the contents of 'dist' to your IIS web root.
echo.
echo For automated deployment, use: deploy-iis.ps1
echo.
pause 