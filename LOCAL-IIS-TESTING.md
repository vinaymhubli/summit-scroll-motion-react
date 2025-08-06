# Local IIS Testing Guide

This guide will help you enable IIS on Windows and test your React website locally.

## Step 1: Enable IIS on Windows

### Using Windows Features (GUI Method)
1. Press `Windows + R`, type `optionalfeatures.exe`, and press Enter
2. Check the box for **Internet Information Services**
3. Expand it and ensure these are checked:
   - Web Management Tools
     - IIS Management Console
   - World Wide Web Services
     - Application Development Features
       - .NET Extensibility 4.8
       - ASP.NET 4.8
     - Common HTTP Features
       - Default Document
       - Directory Browsing
       - HTTP Errors
       - HTTP Redirection
       - Static Content
     - Health and Diagnostics
       - HTTP Logging
       - Request Monitor
     - Performance Features
       - Static Content Compression
     - Security
       - Request Filtering
4. Click **OK** and wait for installation to complete

### Using PowerShell (Command Line Method)
Run PowerShell as Administrator and execute:
```powershell
# Enable IIS with required features
Enable-WindowsOptionalFeature -Online -FeatureName IIS-WebServerRole
Enable-WindowsOptionalFeature -Online -FeatureName IIS-WebServer
Enable-WindowsOptionalFeature -Online -FeatureName IIS-CommonHttpFeatures
Enable-WindowsOptionalFeature -Online -FeatureName IIS-StaticContent
Enable-WindowsOptionalFeature -Online -FeatureName IIS-DefaultDocument
Enable-WindowsOptionalFeature -Online -FeatureName IIS-DirectoryBrowsing
Enable-WindowsOptionalFeature -Online -FeatureName IIS-HttpErrors
Enable-WindowsOptionalFeature -Online -FeatureName IIS-HttpLogging
Enable-WindowsOptionalFeature -Online -FeatureName IIS-RequestFiltering
Enable-WindowsOptionalFeature -Online -FeatureName IIS-ApplicationDevelopment
Enable-WindowsOptionalFeature -Online -FeatureName IIS-ASPNET45
Enable-WindowsOptionalFeature -Online -FeatureName IIS-NetFxExtensibility45
Enable-WindowsOptionalFeature -Online -FeatureName IIS-HealthAndDiagnostics
Enable-WindowsOptionalFeature -Online -FeatureName IIS-HttpCompressionStatic
Enable-WindowsOptionalFeature -Online -FeatureName IIS-WebServerManagementTools
Enable-WindowsOptionalFeature -Online -FeatureName IIS-ManagementConsole
```

## Step 2: Install URL Rewrite Module

The URL Rewrite Module is essential for React Router to work properly.

1. Download from: https://www.iis.net/downloads/microsoft/url-rewrite
2. Run the installer as Administrator
3. Follow the installation wizard

## Step 3: Build Your Application

1. Open your project directory in a terminal
2. Install dependencies (if not already done):
   ```bash
   npm install
   ```

3. Build for IIS:
   ```bash
   npm run build:iis
   ```

This will create a `dist` folder with your built application and copy the `web.config` file.

## Step 4: Configure IIS Site

### Method 1: Using IIS Manager (GUI)
1. Open **IIS Manager** (search in Start menu)
2. In the left panel, expand your computer name → **Sites**
3. Right-click on **Default Web Site** → **Add Application**
4. Set:
   - **Alias**: `summit-scroll-motion` (or your preferred name)
   - **Physical path**: `C:\Users\Pranav\Downloads\summit-scroll-motion-react\summit-scroll-motion-react\dist`
   - **Application pool**: DefaultAppPool
5. Click **OK**

### Method 2: Using PowerShell
Run PowerShell as Administrator and execute:
```powershell
# Create the application
Import-Module WebAdministration
New-WebApplication -Name "summit-scroll-motion" -Site "Default Web Site" -PhysicalPath "C:\Users\Pranav\Downloads\summit-scroll-motion-react\summit-scroll-motion-react\dist" -ApplicationPool "DefaultAppPool"
```

## Step 5: Test Your Website

1. Open your web browser
2. Navigate to: `http://localhost/summit-scroll-motion`
3. Test the following:
   - Home page loads correctly
   - Navigation between pages works
   - Direct URL access (e.g., `http://localhost/summit-scroll-motion/about`)
   - Page refresh on sub-routes works
   - All images and assets load properly

## Step 6: Troubleshooting

### If you get 404 errors:
1. Check that the physical path in IIS points to the `dist` folder
2. Verify `web.config` exists in the `dist` folder
3. Ensure URL Rewrite Module is installed

### If static assets don't load:
1. Check browser developer tools (F12) for errors
2. Verify file paths in the Network tab
3. Check that the `base` setting in `vite.config.ts` is correct

### If you get permission errors:
1. Ensure IIS_IUSRS has read access to your dist folder
2. Run IIS Manager as Administrator

### To check IIS logs:
- Navigate to: `C:\inetpub\logs\LogFiles\W3SVC1\`
- Look for recent log files with today's date

## Step 7: Quick Test Script

You can use the provided PowerShell script to automate the testing:
```powershell
# Run this in your project directory
.\test-local-iis.ps1
```

## Common Issues and Solutions

### Issue: "HTTP Error 500.19 - Internal Server Error"
**Solution**: URL Rewrite Module is not installed or web.config is malformed

### Issue: "HTTP Error 404.0 - Not Found"
**Solution**: Check physical path and ensure dist folder exists

### Issue: Routes work but direct access fails
**Solution**: URL Rewrite Module is not working properly

### Issue: Assets load but pages are blank
**Solution**: Check browser console for JavaScript errors

## Performance Tips

1. **Enable compression** (already configured in web.config)
2. **Set proper cache headers** (already configured)
3. **Use HTTPS** for production
4. **Monitor performance** using browser developer tools

## Next Steps

Once local testing is successful:
1. Deploy to your production IIS server
2. Configure SSL certificates
3. Set up proper domain names
4. Configure monitoring and logging
5. Set up automated deployments

## Useful Commands

```bash
# Rebuild and test
npm run build:iis
# Then refresh your browser at http://localhost/summit-scroll-motion

# Check IIS status
Get-Service -Name W3SVC

# Restart IIS
iisreset

# Check application pool status
Get-IISAppPool
```