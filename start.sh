#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to print error and exit
error_exit() {
    echo -e "${RED}❌ $1${NC}"
    exit 1
}

echo "🚀 Starting VibeVerse.tech..."

# Check if Node.js is installed
if ! command_exists node; then
    error_exit "Node.js is not installed. Please install Node.js first."
fi

# Check if npm is installed
if ! command_exists npm; then
    error_exit "npm is not installed. Please install npm first."
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2)
if [[ "${NODE_VERSION%%.*}" -lt 18 ]]; then
    echo -e "${YELLOW}⚠️ Warning: Node.js version should be 18 or higher for optimal performance${NC}"
fi

# Kill any process using port 4000
echo "Checking for processes using port 4000..."
sudo lsof -i :4000 | grep LISTEN | awk '{print $2}' | xargs -r kill -9

# Clean up old files
echo "Cleaning up old files..."
sudo rm -rf node_modules .next package-lock.json

# Install dependencies
echo "Installing dependencies..."
npm install

# Check if .env exists
if [ ! -f ".env" ]; then
    echo -e "${BLUE}🔧 Creating .env file...${NC}"
    echo "PORT=4000" > .env
fi

# Build the application
echo "Building the application..."
npm run build

# Start the development server with hot reloading
echo "Starting the development server with hot reloading..."
NODE_ENV=development WATCHPACK_POLLING=true npm run dev 