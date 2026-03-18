#!/bin/bash
# Setup script for Spotto Help Portal - Production Server
# Run this on: 217.182.77.52 (help.spotto.pl)

set -e

echo "========================================="
echo "Spotto Help Portal - Production Server Setup"
echo "Server: 217.182.77.52"
echo "Domain: help.spotto.pl"
echo "========================================="
echo ""

# 1. Create deployment directory
echo "1. Creating deployment directory..."
sudo mkdir -p /spotto-help
sudo chown -R debian:debian /spotto-help
sudo chmod 755 /spotto-help
echo "✓ Directory created: /spotto-help"
ls -ld /spotto-help
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
sudo tee /etc/nginx/sites-available/spotto-help > /dev/null <<'EOF'
server {
    listen 80;
    listen [::]:80;

    server_name help.spotto.pl;

    root /spotto-help;
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

    # Cache static assets
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Assets optimization
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        access_log off;
        add_header Cache-Control "public, immutable";
    }

    # Logs
    access_log /var/log/nginx/spotto-help.access.log;
    error_log /var/log/nginx/spotto-help.error.log;
}
EOF
echo "✓ Nginx config created"
echo ""

# 4. Enable site
echo "4. Enabling site..."
sudo ln -sf /etc/nginx/sites-available/spotto-help /etc/nginx/sites-enabled/
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
echo "✓ Production server setup complete!"
echo "========================================="
echo ""
echo "Site will be accessible at: http://help.spotto.pl"
echo "Deploy path: /spotto-help/"
echo ""
echo "Next steps:"
echo "1. Push to 'main' branch to trigger deployment"
echo "2. RECOMMENDED: Run 'sudo certbot --nginx -d help.spotto.pl' for HTTPS"
echo ""
