#!/bin/bash
# Setup script for Spotto Help Portal - Development Server
# Run this on: 51.38.98.84 (help.dev.spotto.pl)

set -e

echo "========================================="
echo "Spotto Help Portal - Dev Server Setup"
echo "Server: 51.38.98.84"
echo "Domain: help.dev.spotto.pl"
echo "========================================="
echo ""

# 1. Create deployment directory
echo "1. Creating deployment directory..."
sudo mkdir -p /spotto-help-dev
sudo chown -R debian:debian /spotto-help-dev
sudo chmod 755 /spotto-help-dev
echo "✓ Directory created: /spotto-help-dev"
ls -ld /spotto-help-dev
echo ""

# 2. Check/Install nginx
echo "2. Checking nginx installation..."
if ! command -v nginx &> /dev/null; then
    echo "Nginx not found. Installing..."
    sudo apt update
    sudo apt install nginx -y
    echo "✓ Nginx installed"
else
    echo "✓ Nginx already installed ($(nginx -v 2>&1))"
fi
echo ""

# 3. Create nginx configuration
echo "3. Creating nginx configuration..."
sudo tee /etc/nginx/sites-available/spotto-help-dev > /dev/null <<'EOF'
server {
    listen 80;
    listen [::]:80;

    server_name help.dev.spotto.pl;

    root /spotto-help-dev;
    index index.html;

    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/css text/javascript application/javascript application/json image/svg+xml;

    # Security headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Environment "development" always;

    # Cache static assets
    location /assets/ {
        expires 1d;
        add_header Cache-Control "public";
    }

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Assets optimization
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1d;
        add_header Cache-Control "public";
    }

    # Logs
    access_log /var/log/nginx/spotto-help-dev.access.log;
    error_log /var/log/nginx/spotto-help-dev.error.log;
}
EOF
echo "✓ Nginx config created"
echo ""

# 4. Enable site
echo "4. Enabling site..."
sudo ln -sf /etc/nginx/sites-available/spotto-help-dev /etc/nginx/sites-enabled/
echo "✓ Site enabled"
echo ""

# 5. Test configuration
echo "5. Testing nginx configuration..."
sudo nginx -t
echo ""

# 6. Reload nginx
echo "6. Reloading nginx..."
sudo systemctl reload nginx
echo "✓ Nginx reloaded"
echo ""

# 7. Check status
echo "7. Checking nginx status..."
sudo systemctl status nginx --no-pager | head -10
echo ""

echo "========================================="
echo "✓ Development server setup complete!"
echo "========================================="
echo ""
echo "Site will be accessible at: http://help.dev.spotto.pl"
echo "Deploy path: /spotto-help-dev/"
echo ""
echo "Next steps:"
echo "1. Push to 'dev' branch to trigger deployment"
echo "2. Optional: Run 'sudo certbot --nginx -d help.dev.spotto.pl' for HTTPS"
echo ""
