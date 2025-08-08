# IIS Deployment Script for React Application
# This script builds the application and prepares it for IIS deployment

param(
    [string]$Environment = "production",
    [string]$SiteName = "SummitScrollMotion",
    [string]$AppPoolName = "SummitScrollMotionPool",
    [string]$PhysicalPath = "C:\inetpub\wwwroot\SummitScrollMotion",
    [switch]$SkipBuild,
    [switch]$SkipDeploy,
    [switch]$Help
)

# Show help if requested
if ($Help) {
    Write-Host @"
IIS Deployment Script for React Application

Usage: .\deploy-iis.ps1 [options]

Options:
    -Environment <string>     Build environment (production|development) [default: production]
    -SiteName <string>        IIS site name [default: SummitScrollMotion]
    -AppPoolName <string>     IIS application pool name [default: SummitScrollMotionPool]
    -PhysicalPath <string>    Physical path for IIS site [default: C:\inetpub\wwwroot\SummitScrollMotion]
    -SkipBuild                Skip the build process
    -SkipDeploy               Skip the deployment process
    -Help                     Show this help message

Examples:
    .\deploy-iis.ps1
    .\deploy-iis.ps1 -Environment development
    .\deploy-iis.ps1 -SkipBuild -SkipDeploy
"@
    exit 0
}

# Function to write colored output
function Write-ColorOutput {
    param(
        [string]$Message,
        [string]$Color = "White"
    )
    Write-Host $Message -ForegroundColor $Color
}

# Function to check if command exists
function Test-Command {
    param([string]$Command)
    try {
        Get-Command $Command -ErrorAction Stop | Out-Null
        return $true
    }
    catch {
        return $false
    }
}

# Function to check if running as administrator
function Test-Administrator {
    $currentUser = [Security.Principal.WindowsIdentity]::GetCurrent()
    $principal = New-Object Security.Principal.WindowsPrincipal($currentUser)
    return $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
}

Write-ColorOutput "🚀 Starting IIS Deployment Process..." "Cyan"
Write-ColorOutput "Environment: $Environment" "Yellow"
Write-ColorOutput "Site Name: $SiteName" "Yellow"
Write-ColorOutput "App Pool: $AppPoolName" "Yellow"
Write-ColorOutput "Physical Path: $PhysicalPath" "Yellow"

# Check if running as administrator (required for IIS operations)
if (-not $SkipDeploy -and -not (Test-Administrator)) {
    Write-ColorOutput "❌ This script requires administrator privileges for IIS deployment." "Red"
    Write-ColorOutput "Please run PowerShell as Administrator." "Red"
    exit 1
}

# Check prerequisites
Write-ColorOutput "📋 Checking prerequisites..." "Cyan"

if (-not (Test-Command "node")) {
    Write-ColorOutput "❌ Node.js is not installed or not in PATH." "Red"
    exit 1
}

if (-not (Test-Command "npm")) {
    Write-ColorOutput "❌ npm is not installed or not in PATH." "Red"
    exit 1
}

Write-ColorOutput "✅ Prerequisites check passed" "Green"

# Build the application
if (-not $SkipBuild) {
    Write-ColorOutput "🔨 Building application..." "Cyan"
    
    try {
        # Clean previous build
        Write-ColorOutput "🧹 Cleaning previous build..." "Yellow"
        npm run clean
        
        # Install dependencies if needed
        if (-not (Test-Path "node_modules")) {
            Write-ColorOutput "📦 Installing dependencies..." "Yellow"
            npm install
        }
        
        # Build for IIS
        if ($Environment -eq "development") {
            Write-ColorOutput "🔨 Building for development..." "Yellow"
            npm run build:iis:dev
        } else {
            Write-ColorOutput "🔨 Building for production..." "Yellow"
            npm run build:iis
        }
        
        Write-ColorOutput "✅ Build completed successfully" "Green"
    }
    catch {
        Write-ColorOutput "❌ Build failed: $($_.Exception.Message)" "Red"
        exit 1
    }
}

# Deploy to IIS
if (-not $SkipDeploy) {
    Write-ColorOutput "🚀 Deploying to IIS..." "Cyan"
    
    try {
        # Import IIS module
        Import-Module WebAdministration -ErrorAction Stop
        
        # Create application pool if it doesn't exist
        if (-not (Test-Path "IIS:\AppPools\$AppPoolName")) {
            Write-ColorOutput "🏗️  Creating application pool: $AppPoolName" "Yellow"
            New-WebAppPool -Name $AppPoolName
            Set-ItemProperty "IIS:\AppPools\$AppPoolName" -Name "managedRuntimeVersion" -Value "v4.0"
            Set-ItemProperty "IIS:\AppPools\$AppPoolName" -Name "processModel.identityType" -Value "ApplicationPoolIdentity"
        }
        
        # Create physical directory if it doesn't exist
        if (-not (Test-Path $PhysicalPath)) {
            Write-ColorOutput "📁 Creating physical directory: $PhysicalPath" "Yellow"
            New-Item -ItemType Directory -Path $PhysicalPath -Force | Out-Null
        }
        
        # Copy build files to IIS directory
        Write-ColorOutput "📋 Copying files to IIS directory..." "Yellow"
        $distPath = Join-Path $PSScriptRoot "dist"
        if (Test-Path $distPath) {
            Copy-Item -Path "$distPath\*" -Destination $PhysicalPath -Recurse -Force
            Write-ColorOutput "✅ Files copied successfully" "Green"
        } else {
            Write-ColorOutput "❌ Build directory not found: $distPath" "Red"
            exit 1
        }
        
        # Create or update IIS site
        if (Test-Path "IIS:\Sites\$SiteName") {
            Write-ColorOutput "🔄 Updating existing site: $SiteName" "Yellow"
            Set-ItemProperty "IIS:\Sites\$SiteName" -Name "physicalPath" -Value $PhysicalPath
            Set-ItemProperty "IIS:\Sites\$SiteName" -Name "applicationPool" -Value $AppPoolName
        } else {
            Write-ColorOutput "🏗️  Creating new site: $SiteName" "Yellow"
            New-Website -Name $SiteName -PhysicalPath $PhysicalPath -ApplicationPool $AppPoolName -Port 80
        }
        
        # Set proper permissions
        Write-ColorOutput "🔐 Setting file permissions..." "Yellow"
        $acl = Get-Acl $PhysicalPath
        $accessRule = New-Object System.Security.AccessControl.FileSystemAccessRule("IIS_IUSRS", "FullControl", "ContainerInherit,ObjectInherit", "None", "Allow")
        $acl.SetAccessRule($accessRule)
        Set-Acl -Path $PhysicalPath -AclObject $acl
        
        Write-ColorOutput "✅ IIS deployment completed successfully!" "Green"
        Write-ColorOutput "🌐 Your application should be available at: http://localhost" "Cyan"
        
    }
    catch {
        Write-ColorOutput "❌ IIS deployment failed: $($_.Exception.Message)" "Red"
        exit 1
    }
}

Write-ColorOutput "🎉 Deployment process completed!" "Green" 