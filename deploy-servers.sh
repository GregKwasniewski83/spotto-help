#!/bin/bash
# Master deployment script - Configures both dev and prod servers
# Run this from your local machine

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PASSWORD='SOlid123$%'

echo "========================================="
echo "Spotto Help Portal - Server Configuration"
echo "========================================="
echo ""

# Function to copy and execute script on remote server
setup_server() {
    local server=$1
    local script=$2
    local name=$3

    echo "Setting up $name ($server)..."
    echo "1. Copying setup script..."

    # Copy script to server
    sshpass -p "$PASSWORD" scp -o StrictHostKeyChecking=no \
        "$SCRIPT_DIR/$script" debian@$server:/tmp/

    echo "2. Executing setup script..."

    # Execute script on server
    sshpass -p "$PASSWORD" ssh -o StrictHostKeyChecking=no \
        debian@$server "chmod +x /tmp/$script && /tmp/$script && rm /tmp/$script"

    echo "✓ $name setup complete!"
    echo ""
}

# Setup Development Server
echo "========================================="
echo "DEVELOPMENT SERVER"
echo "========================================="
setup_server "51.38.98.84" "setup-dev-server.sh" "Development Server"

# Setup Production Server
echo "========================================="
echo "PRODUCTION SERVER"
echo "========================================="
setup_server "217.182.77.52" "setup-prod-server.sh" "Production Server"

echo "========================================="
echo "✓ All servers configured successfully!"
echo "========================================="
echo ""
echo "Deployments:"
echo "  • Development: http://help.dev.spotto.pl"
echo "  • Production:  http://help.spotto.pl"
echo ""
echo "Next steps:"
echo "1. Push to 'dev' branch to deploy to development"
echo "2. Push to 'main' branch to deploy to production"
echo "3. Optionally enable HTTPS with certbot on both servers"
echo ""
