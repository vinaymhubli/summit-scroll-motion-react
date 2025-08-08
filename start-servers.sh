#!/bin/bash

echo "🚀 Starting Summit USA Application..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the frontend
echo "🔨 Building frontend..."
npm run build

# Start both servers
echo "🌟 Starting servers..."
echo "   Frontend: http://localhost:8080"
echo "   Backend:  http://localhost:3001"
echo "   Email API: http://localhost:3001/api/send-email"
echo ""
echo "Press Ctrl+C to stop both servers"

# Start both servers concurrently
npm run dev:full 