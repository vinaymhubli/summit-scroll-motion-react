# IIS Deployment Guide for React Application

This guide provides comprehensive instructions for deploying your React application to Microsoft Internet Information Services (IIS).

## Prerequisites

### System Requirements
- Windows Server 2016+ or Windows 10/11
- IIS 10+ with URL Rewrite Module
- Node.js 18+ and npm
- PowerShell 5.1+ (for automated deployment)

### IIS Features Required
- Web Server (IIS)
- URL Rewrite Module
- HTTP Compression
- Static Content Compression

## Quick Start

### 1. Automated Deployment (Recommended)

Use the provided PowerShell script for automated deployment:

```powershell
# Run as Administrator
.\deploy-iis.ps1
```

For development deployment:
```powershell
.\deploy-iis.ps1 -Environment development
```

### 2. Manual Deployment

#### Step 1: Build the Application

```bash
# Install dependencies
npm install

# Build for production
npm run build:iis

# Or build for development
npm run build:iis:dev
```

#### Step 2: Deploy to IIS

1. Copy the contents of the `dist` folder to your IIS web root
2. Configure IIS site settings
3. Set proper file permissions

## Build Scripts

The following npm scripts are available for IIS deployment:

| Script | Description |
|--------|-------------|
| `npm run build:iis` | Production build optimized for IIS |
| `npm run build:iis:dev` | Development build for IIS |
| `npm run build:clean` | Clean build (removes dist folder first) |
| `npm run clean` | Remove dist folder |

## Configuration Files

### Web.config
The application includes an optimized `web.config` file with:

- **URL Rewriting**: Handles client-side routing
- **MIME Types**: Proper configuration for modern web assets
- **Compression**: Gzip compression for better performance
- **Caching**: Optimized cache headers for different file types
- **Security Headers**: XSS protection, content type options, etc.

### Enhanced Configuration
For additional security and performance, use `public/web.config.enhanced`:

```bash
# Copy enhanced web.config
cp public/web.config.enhanced public/web.config
npm run build:iis
```

## IIS Site Configuration

### Application Pool Settings
- **.NET CLR Version**: v4.0
- **Managed Pipeline Mode**: Integrated
- **Identity**: ApplicationPoolIdentity

### Site Bindings
- **Protocol**: http
- **Port**: 80 (or your preferred port)
- **Host Name**: (leave blank for default)

### File Permissions
Ensure the following permissions are set on the site directory:
- **IIS_IUSRS**: Read & Execute
- **IUSR**: Read & Execute
- **SYSTEM**: Full Control

## Performance Optimizations

### 1. Static File Caching
The web.config includes optimized caching rules:
- **Assets with hashes**: 1 year cache
- **HTML files**: No cache (for updates)
- **Favicon**: 24 hours cache

### 2. Compression
Gzip compression is enabled for:
- JavaScript files
- CSS files
- JSON files
- HTML files
- SVG files

### 3. Security Headers
The following security headers are automatically added:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`

## Troubleshooting

### Common Issues

#### 1. 404 Errors on Route Refresh
**Solution**: Ensure URL Rewrite Module is installed and web.config is properly configured.

#### 2. Static Assets Not Loading
**Solution**: Check MIME type configurations in web.config and file permissions.

#### 3. Performance Issues
**Solution**: 
- Enable HTTP compression in IIS
- Verify caching headers are working
- Check if static content compression is enabled

#### 4. Permission Denied Errors
**Solution**: Ensure proper file permissions are set for IIS_IUSRS and IUSR.

### Debug Mode

To enable debug mode for troubleshooting:

```powershell
.\deploy-iis.ps1 -Environment development
```

This will:
- Include source maps
- Disable minification
- Enable detailed error messages

## Environment Variables

The build process supports environment-specific configurations:

### Production
- Optimized for performance
- Minified assets
- No source maps
- Aggressive caching

### Development
- Source maps enabled
- Less aggressive minification
- Debug information included

## Monitoring and Maintenance

### Log Files
IIS logs are typically located at:
```
C:\inetpub\logs\LogFiles\W3SVC1\
```

### Performance Monitoring
Monitor the following metrics:
- Response times
- Memory usage
- CPU utilization
- Disk I/O

### Regular Maintenance
1. **Update Dependencies**: Regularly update npm packages
2. **Clean Builds**: Use `npm run build:clean` for fresh builds
3. **Log Rotation**: Configure IIS log rotation
4. **Backup**: Regular backups of the deployment directory

## Advanced Configuration

### Custom Base Path
For subdirectory deployments, modify `vite.config.iis.ts`:

```typescript
base: "/your-app-name/",
```

### Custom Port
Modify the deployment script or IIS site bindings:

```powershell
.\deploy-iis.ps1 -PhysicalPath "C:\inetpub\wwwroot\YourApp"
```

### Load Balancing
For load-balanced environments:
1. Configure sticky sessions
2. Use shared file storage
3. Implement proper cache invalidation

## Support

For issues related to:
- **Build Process**: Check npm scripts and Vite configuration
- **IIS Configuration**: Verify web.config and IIS settings
- **Deployment**: Use the PowerShell script with debug output

## Additional Resources

- [IIS Documentation](https://docs.microsoft.com/en-us/iis/)
- [URL Rewrite Module](https://docs.microsoft.com/en-us/iis/extensions/url-rewrite-module/)
- [Vite Build Configuration](https://vitejs.dev/config/)
- [React Router Deployment](https://reactrouter.com/docs/en/v6/start/overview#deployment) 