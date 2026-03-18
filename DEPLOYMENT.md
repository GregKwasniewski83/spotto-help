# Spotto Help Portal - Deployment Guide

This guide explains how to deploy the help portal to both development and production environments.

## Environments

| Environment | Domain | Server | Deploy Path | Branch |
|-------------|--------|--------|-------------|--------|
| **Development** | help.dev.spotto.pl | 51.38.98.84 | /spotto-help-dev/ | `dev` |
| **Production** | help.spotto.pl | 217.182.77.52 | /spotto-help/ | `main` |

## GitHub Secrets (Already Configured)

The following secrets are configured in GitHub Actions:

**Development:**
- `FTP_SERVER` = 51.38.98.84
- `FTP_USERNAME` = debian
- `FTP_PASSWORD` = (encrypted)

**Production:**
- `FTP_SERVER_PROD` = 217.182.77.52
- `FTP_USERNAME_PROD` = debian
- `FTP_PASSWORD_PROD` = (encrypted)

## Server Setup

### Development Server (51.38.98.84)

```bash
# 1. SSH into development server
ssh debian@51.38.98.84

# 2. Create deployment directory
sudo mkdir -p /spotto-help-dev
sudo chown -R debian:debian /spotto-help-dev
sudo chmod 755 /spotto-help-dev

# 3. Install nginx (if not already installed)
sudo apt update
sudo apt install nginx -y

# 4. Copy nginx configuration
sudo nano /etc/nginx/sites-available/spotto-help-dev
# Paste content from help-web/nginx-dev.conf.example

# 5. Enable site
sudo ln -s /etc/nginx/sites-available/spotto-help-dev /etc/nginx/sites-enabled/

# 6. Test nginx configuration
sudo nginx -t

# 7. Reload nginx
sudo systemctl reload nginx

# 8. Check status
sudo systemctl status nginx
```

### Production Server (217.182.77.52)

```bash
# 1. SSH into production server
ssh debian@217.182.77.52

# 2. Create deployment directory
sudo mkdir -p /spotto-help
sudo chown -R debian:debian /spotto-help
sudo chmod 755 /spotto-help

# 3. Install nginx (if not already installed)
sudo apt update
sudo apt install nginx -y

# 4. Copy nginx configuration
sudo nano /etc/nginx/sites-available/spotto-help
# Paste content from help-web/nginx.conf.example

# 5. Enable site
sudo ln -s /etc/nginx/sites-available/spotto-help /etc/nginx/sites-enabled/

# 6. Test nginx configuration
sudo nginx -t

# 7. Reload nginx
sudo systemctl reload nginx

# 8. Check status
sudo systemctl status nginx
```

## SSL Certificates (Recommended)

### Install Certbot

```bash
# On both servers
sudo apt install certbot python3-certbot-nginx -y
```

### Development Server

```bash
sudo certbot --nginx -d help.dev.spotto.pl
```

### Production Server

```bash
sudo certbot --nginx -d help.spotto.pl
```

Certbot will automatically:
- Obtain SSL certificate
- Configure nginx for HTTPS
- Set up auto-renewal

## Deployment Workflow

### Automatic Deployment

**Development (dev branch):**
```bash
# Make changes
git checkout dev
git add .
git commit -m "feat: your changes"
git push origin dev

# GitHub Actions will automatically:
# 1. Build the app
# 2. Deploy to 51.38.98.84:/spotto-help-dev/
# 3. Accessible at: http://help.dev.spotto.pl
```

**Production (main branch):**
```bash
# Merge dev to main
git checkout main
git merge dev
git push origin main

# GitHub Actions will automatically:
# 1. Build the app
# 2. Deploy to 217.182.77.52:/spotto-help/
# 3. Accessible at: http://help.spotto.pl
```

### Manual Deployment

If you need to deploy manually:

```bash
# Build locally
cd help-web
npm run build

# Deploy to development
scp -r dist/* debian@51.38.98.84:/spotto-help-dev/

# Deploy to production
scp -r dist/* debian@217.182.77.52:/spotto-help/
```

## Testing Deployment

### Development
```bash
# Check if site is accessible
curl -I http://help.dev.spotto.pl

# Or visit in browser:
# http://help.dev.spotto.pl
```

### Production
```bash
# Check if site is accessible
curl -I http://help.spotto.pl

# Or visit in browser:
# http://help.spotto.pl
```

## Troubleshooting

### Site not accessible

```bash
# Check nginx status
sudo systemctl status nginx

# Check nginx error logs
sudo tail -f /var/log/nginx/spotto-help-dev.error.log  # Dev
sudo tail -f /var/log/nginx/spotto-help.error.log      # Prod

# Check if directory exists and has files
ls -la /spotto-help-dev/  # Dev
ls -la /spotto-help/      # Prod
```

### FTP deployment fails

```bash
# Check GitHub Actions logs
# https://github.com/GregKwasniewski83/spotto-help/actions

# Common issues:
# 1. FTP directory doesn't exist - create it manually
# 2. Permission denied - check chown/chmod
# 3. FTP timeout - check server firewall
```

### Nginx 404 errors

```bash
# Check nginx config
sudo nginx -t

# Check root directory path in config
sudo cat /etc/nginx/sites-available/spotto-help-dev
sudo cat /etc/nginx/sites-available/spotto-help

# Ensure index.html exists
ls -la /spotto-help-dev/index.html
ls -la /spotto-help/index.html
```

## Branch Strategy

**Development Workflow:**
1. Create feature branch from `dev`
2. Make changes and test locally
3. Push to feature branch
4. Create PR to `dev`
5. Merge to `dev` - auto-deploys to help.dev.spotto.pl
6. Test on development server
7. When stable, merge `dev` to `main`
8. Auto-deploys to help.spotto.pl

**Hotfix Workflow:**
1. Create hotfix branch from `main`
2. Fix issue
3. PR to `main`
4. Merge to `main` - auto-deploys to production
5. Backport to `dev` if needed

## Monitoring

### Check deployment status

```bash
# GitHub Actions
https://github.com/GregKwasniewski83/spotto-help/actions

# Nginx access logs
sudo tail -f /var/log/nginx/spotto-help-dev.access.log  # Dev
sudo tail -f /var/log/nginx/spotto-help.access.log      # Prod
```

### Performance monitoring

```bash
# Check nginx status
curl -I http://help.dev.spotto.pl
curl -I http://help.spotto.pl

# Check response time
time curl -s http://help.dev.spotto.pl > /dev/null
time curl -s http://help.spotto.pl > /dev/null
```

## Rollback

If a deployment breaks production:

```bash
# Option 1: Revert commit
git revert <commit-hash>
git push origin main

# Option 2: Deploy previous version manually
# Find last working build in GitHub Actions artifacts
# Download and deploy manually via FTP
```

## Support

- **GitHub Issues**: https://github.com/GregKwasniewski83/spotto-help/issues
- **Workflow Logs**: https://github.com/GregKwasniewski83/spotto-help/actions
