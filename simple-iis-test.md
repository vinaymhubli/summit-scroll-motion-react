# Simple IIS Testing Guide (No Admin Required)

Since IIS is already running on your system, here's how to test your React application without requiring administrator privileges.

## Current Status ✅

- ✅ IIS is installed and running
- ✅ Your application has been built successfully
- ✅ `web.config` is properly configured
- ✅ All assets are ready for deployment

## Manual Testing Steps

### Step 1: Copy Files to IIS Directory

You can manually copy your built files to IIS. Here are the options:

#### Option A: Copy to Default Website (Easiest)
1. Open File Explorer
2. Navigate to: `C:\inetpub\wwwroot\`
3. Create a new folder called `summit-scroll-motion`
4. Copy all contents from your `dist` folder to this new folder

#### Option B: Use PowerShell (if you have access)
```powershell
# Create directory and copy files
New-Item -ItemType Directory -Path "C:\inetpub\wwwroot\summit-scroll-motion" -Force
Copy-Item -Path ".\dist\*" -Destination "C:\inetpub\wwwroot\summit-scroll-motion\" -Recurse -Force
```

### Step 2: Test Your Application

Once files are copied, test these URLs in your browser:

1. **Home Page**: `http://localhost/summit-scroll-motion/`
2. **About Page**: `http://localhost/summit-scroll-motion/about`
3. **Services Page**: `http://localhost/summit-scroll-motion/services`
4. **Contact Page**: `http://localhost/summit-scroll-motion/contact`

### Step 3: Test Direct Navigation

This is the most important test for React Router:
- Navigate to `http://localhost/summit-scroll-motion/about` directly in the address bar
- If it loads correctly (not a 404 error), your routing is working
- Try refreshing the page while on `/about` - it should still work

## What to Look For

### ✅ Success Indicators
- All pages load without errors
- Navigation between pages works smoothly
- Direct URL access works (no 404 errors)
- Page refresh on sub-routes works
- All images and styles load properly

### ❌ Common Issues
- **404 errors on direct navigation**: URL Rewrite Module may not be installed
- **Blank pages**: Check browser console for JavaScript errors
- **Missing styles/images**: Check file paths in browser developer tools

## Troubleshooting Without Admin Rights

### If you get 404 errors:
1. Check that `web.config` exists in your IIS folder
2. Verify URL Rewrite Module is installed (ask your system admin)
3. Check IIS logs at: `C:\inetpub\logs\LogFiles\W3SVC1\`

### If static assets don't load:
1. Open browser developer tools (F12)
2. Check the Network tab for failed requests
3. Verify file paths are correct

### If pages are blank:
1. Check browser console for JavaScript errors
2. Verify all JS files are loading in the Network tab

## Alternative Testing Methods

### Method 1: Use a Different Port
If you can't access the default website, you can:
1. Ask your system administrator to create a new site on a different port
2. Test using `http://localhost:8080/summit-scroll-motion/` (or whatever port)

### Method 2: Use IIS Express
If available, you can use IIS Express for testing:
1. Install IIS Express if not already installed
2. Create a simple configuration file
3. Test locally without affecting the main IIS installation

### Method 3: Use a Local Web Server
For quick testing, you can also use:
```bash
# Serve the dist folder locally
npx serve dist
# Then test at http://localhost:3000
```

## Quick Commands

```bash
# Rebuild your application
npm run build:iis

# Check if IIS is running
Get-Service -Name W3SVC

# Check your dist folder contents
dir dist
```

## Next Steps

Once testing is successful:
1. Document any issues found
2. Prepare deployment package for production
3. Share the `IIS-DEPLOYMENT.md` guide with your deployment team
4. Consider setting up automated testing for future deployments

## Support

If you encounter issues:
1. Check the browser console for errors
2. Review the `IIS-DEPLOYMENT.md` guide for detailed troubleshooting
3. Contact your system administrator for IIS configuration issues
4. Check the `LOCAL-IIS-TESTING.md` guide for more detailed setup instructions 