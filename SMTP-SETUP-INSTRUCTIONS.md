# SMTP Email Integration Setup

## Overview
Your Summit USA website now has a fully functional contact form that sends emails through your SMTP server at `mxout.summitusa.com`.

## SMTP Configuration
- **Server:** mxout.summitusa.com
- **Port:** 8115
- **Authentication:** Plain text
- **Username:** mailsender
- **Password:** muji2315

## How It Works

### Frontend (React)
- Contact form at `/contact` page
- Sends form data to backend API
- Shows loading states and error handling
- Displays success message after email is sent

### Backend (Node.js/Express)
- API endpoint: `POST /api/send-email`
- Handles SMTP email sending
- Validates form data
- Returns success/error responses

## Running the Application

### Option 1: Quick Start (Recommended)
```bash
./start-servers.sh
```

### Option 2: Manual Start
```bash
# Install dependencies
npm install

# Build frontend
npm run build

# Start both servers
npm run dev:full
```

### Option 3: Separate Servers
```bash
# Terminal 1 - Frontend (Vite dev server)
npm run dev

# Terminal 2 - Backend (Express server)
npm run dev:server
```

## URLs
- **Frontend:** http://localhost:8080
- **Backend API:** http://localhost:3001
- **Email API:** http://localhost:3001/api/send-email
- **Health Check:** http://localhost:3001/api/health

## Email Configuration

### Recipient Email
By default, emails are sent to `info@summitusa.com`. To change this:

1. Edit `server.mjs`
2. Find line with `to: 'info@summitusa.com'`
3. Change to your desired email address

### Email Content
The email includes:
- Sender's name, email, and company
- Message content
- Timestamp
- Summit USA branding

## Testing the Email Function

### Via Website
1. Go to http://localhost:8080/contact
2. Fill out the contact form
3. Submit the form
4. Check your email inbox

### Via API
```bash
curl -X POST http://localhost:3001/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "company": "Test Company",
    "message": "This is a test message"
  }'
```

## Troubleshooting

### Server Won't Start
- Check if port 3001 is available: `lsof -i :3001`
- Kill existing process: `kill -9 <PID>`
- Check Node.js version: `node --version`

### Email Not Sending
- Verify SMTP credentials
- Check network connectivity to mxout.summitusa.com
- Review server logs for error messages
- Test SMTP connection manually

### Frontend Not Loading
- Check if port 8080 is available
- Verify Vite is running: `npm run dev`
- Check browser console for errors

## Security Notes
- SMTP credentials are hardcoded in `server.mjs`
- For production, use environment variables
- Consider rate limiting for the email API
- Implement CAPTCHA for spam protection

## Production Deployment
For production deployment:
1. Set up environment variables for SMTP credentials
2. Use HTTPS for all communications
3. Implement proper error logging
4. Set up monitoring for email delivery
5. Consider using a service like SendGrid for better deliverability

## Files Modified/Created
- `server.mjs` - Backend server with SMTP integration
- `src/pages/Contact.tsx` - Updated contact form with API integration
- `package.json` - Added backend dependencies
- `start-servers.sh` - Convenience script to start both servers
- `SMTP-SETUP-INSTRUCTIONS.md` - This file 