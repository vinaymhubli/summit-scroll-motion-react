# IIS Deployment Guide

This document provides step-by-step instructions for deploying your React application to IIS (Internet Information Services).

## Prerequisites

1. **IIS with URL Rewrite Module**: Make sure IIS is installed on your server and the URL Rewrite Module is installed.
   - Download from: https://www.iis.net/downloads/microsoft/url-rewrite
   
2. **Node.js**: Required for building the application (if building on the server).

## Build Process

### Option 1: Build on Development Machine

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Build for IIS**:
   ```bash
   npm run build:iis
   ```
   
   This command will:
   - Create an optimized production build in the `dist` folder
   - Copy the `web.config` file to the dist folder
   - Apply all IIS-specific optimizations

3. **Copy the dist folder contents** to your IIS web directory (e.g., `C:\inetpub\wwwroot\yourapp\`)

### Option 2: Build on Server

1. Upload your source code to the server
2. Run the build commands on the server
3. Point IIS to the `dist` directory

## IIS Configuration

### 1. Create a New Website or Application

1. Open **IIS Manager**
2. Right-click on **Sites** → **Add Website** (or add as an application under an existing site)
3. Set the **Physical path** to your `dist` folder
4. Configure **Port** and **Host name** as needed

### 2. Verify URL Rewrite Module

1. Select your website in IIS Manager
2. Look for the **URL Rewrite** icon in the Features View
3. If not present, install the URL Rewrite Module from Microsoft

### 3. Application Pool Configuration (Recommended)

1. Create a new Application Pool or use the DefaultAppPool
2. Set **.NET CLR Version** to **No Managed Code** (since this is a static site)
3. Set **Managed Pipeline Mode** to **Integrated**

## File Structure After Deployment

Your IIS directory should look like this:
```
C:\inetpub\wwwroot\yourapp\
├── index.html
├── web.config          # ← Critical for routing
├── assets/
│   ├── [hashed-files].js
│   ├── [hashed-files].css
│   └── ...
└── [other static files]
```

## Troubleshooting

### 1. Routes Return 404 Errors

**Problem**: Direct navigation to `/about`, `/services`, etc. returns 404.

**Solution**: 
- Ensure `web.config` exists in the root directory
- Verify URL Rewrite Module is installed
- Check that the rewrite rules are working

### 2. Static Assets Not Loading

**Problem**: CSS, JS, or images fail to load.

**Solution**:
- Check file paths in browser developer tools
- Verify the `base: "./"` setting in `vite.config.ts`
- Ensure proper MIME types are configured

### 3. Performance Issues

**Solutions**:
- Enable IIS compression (already configured in web.config)
- Configure proper caching headers
- Consider using a CDN for static assets

## Custom Base Path (Subdirectory Deployment)

If deploying to a subdirectory (e.g., `https://yoursite.com/myapp/`):

1. **Update vite.config.ts**:
   ```typescript
   export default defineConfig(({ mode }) => ({
     base: "/myapp/", // Change this to your subdirectory
     // ... rest of config
   }));
   ```

2. **Rebuild the application**:
   ```bash
   npm run build:iis
   ```

## Security Considerations

1. **Remove source maps** in production (already configured)
2. **Configure proper headers** in web.config
3. **Use HTTPS** in production
4. **Regularly update dependencies**

## Environment Variables

If you need environment variables:

1. Create a `.env.production` file:
   ```
   VITE_API_URL=https://your-api-server.com
   VITE_APP_TITLE=Your App Name
   ```

2. Rebuild with:
   ```bash
   npm run build:iis
   ```

## Monitoring and Logs

- **IIS Logs**: Check `C:\inetpub\logs\LogFiles\` for access logs
- **Event Viewer**: Check Windows Event Viewer for application errors
- **Browser Console**: Check for JavaScript errors

## Additional Resources

- [IIS URL Rewrite Module Documentation](https://docs.microsoft.com/en-us/iis/extensions/url-rewrite-module/)
- [Vite Build Documentation](https://vitejs.dev/guide/build.html)
- [React Router BrowserRouter Documentation](https://reactrouter.com/web/api/BrowserRouter)

## Quick Deployment Checklist

- [ ] URL Rewrite Module installed
- [ ] Built with `npm run build:iis`
- [ ] web.config copied to root
- [ ] IIS site points to dist folder
- [ ] Test all routes work
- [ ] Test page refresh on sub-routes
- [ ] Verify static assets load correctly