# 🚀 Deployment Guide - Therapist Website

## Quick Deploy to Vercel (Recommended)

Vercel is the fastest way to deploy Next.js applications. It's built by the creators of Next.js.

### Step 1: Push to GitHub

```bash
# Initialize git repository
cd therapist-website
git init
git add .
git commit -m "Initial commit: Therapist website"

# Create GitHub repository and push
git remote add origin https://github.com/your-username/therapist-website.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Connect your GitHub account
4. Select the `therapist-website` repository
5. Click "Deploy"

**That's it!** Vercel will automatically:
- Install dependencies
- Build the project
- Deploy to a production URL
- Set up automatic deployments for future commits

### Your live URL
After deployment, you'll get a URL like:
```
https://therapist-website-abc123.vercel.app
```

---

## Alternative: Deploy to Netlify

### Step 1: Build the project
```bash
npm run build
```

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `.next` folder
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

---

## Alternative: Deploy to Your Own Server

### Requirements
- Node.js 18+
- PM2 (process manager)
- Nginx (reverse proxy)

### Step 1: Build
```bash
npm run build
```

### Step 2: Start production server
```bash
# Install PM2
npm install -g pm2

# Start with PM2
pm2 start npm --name "therapist-website" -- start
pm2 save
pm2 startup
```

### Step 3: Configure Nginx
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Environment Variables (if needed)

Create a `.env.local` file:

```env
# Contact form (if you add one)
NEXT_PUBLIC_CONTACT_EMAIL=hello@yourdomain.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API keys (if needed)
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

---

## Custom Domain Setup

### Vercel
1. Go to project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as shown

### DNS Records (example)
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## Performance Optimization Checklist

Before going live, ensure:

- [ ] All images are optimized (use next/image)
- [ ] Google Fonts are loading properly
- [ ] No console errors in browser
- [ ] Mobile responsiveness tested
- [ ] Lighthouse score >90
- [ ] Accessibility tested
- [ ] Forms are working (if added)
- [ ] Links are correct
- [ ] Contact information is updated
- [ ] SSL certificate is active

---

## Post-Deployment Testing

### Test on Multiple Devices
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad
- [ ] Desktop (Chrome, Firefox, Safari)

### Test User Flows
- [ ] Can users find services?
- [ ] Can users book consultation?
- [ ] Do animations work smoothly?
- [ ] Is content readable?
- [ ] Are CTAs clear?

### Check Performance
```bash
# Run Lighthouse
npx lighthouse https://yourdomain.com --view
```

Target scores:
- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >90

---

## Maintenance

### Regular Updates
```bash
# Update dependencies monthly
npm update

# Check for security issues
npm audit

# Fix security issues
npm audit fix
```

### Monitor
- Set up Google Analytics
- Monitor uptime with UptimeRobot
- Check error logs weekly
- Review user feedback

---

## Support & Resources

**Vercel Docs**: https://vercel.com/docs
**Next.js Docs**: https://nextjs.org/docs
**Tailwind Docs**: https://tailwindcss.com/docs

---

## Troubleshooting

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### Fonts not loading
- Check `app/layout.tsx`
- Verify Google Fonts preconnect

### Animations not working
- Check Framer Motion version
- Clear browser cache
- Test in incognito mode

---

## Quick Commands Reference

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Lint
npm run lint

# Type check
npx tsc --noEmit
```

---

**Ready to launch? 🚀**

Remember: This website should make people feel safe. Test it with real therapists before launching publicly.

Good luck! 💚
