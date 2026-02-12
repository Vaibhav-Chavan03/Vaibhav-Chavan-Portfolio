# 🚀 Complete Setup Guide - Grow Your Therapy Contact Form

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Backend Setup](#backend-setup)
3. [Frontend Integration](#frontend-integration)
4. [Gmail Setup (App Password)](#gmail-setup)
5. [Testing](#testing)
6. [Deployment](#deployment)
7. [Troubleshooting](#troubleshooting)

---

## ⚡ Quick Start

### What You'll Need:
- ✅ Node.js 18+ installed
- ✅ A Gmail account (or other email service)
- ✅ 15 minutes

### High-Level Overview:

```
Backend (Node.js + Express) ←→ Frontend (Next.js)
              ↓
         Nodemailer
              ↓
         Gmail SMTP
              ↓
    Emails Delivered! 📧
```

---

## 🔧 Backend Setup

### Step 1: Navigate to Backend Folder

```bash
cd "Grow Your Therapy/backend"
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs:
- `express` - Web server
- `nodemailer` - Email sending
- `dotenv` - Environment variables
- `cors` - Allow frontend to connect
- `express-rate-limit` - Prevent spam
- `express-validator` - Validate form data
- `helmet` - Security

### Step 3: Create .env File

```bash
# Copy the example file
cp .env.example .env

# Open .env in your text editor
# Or use: nano .env
```

### Step 4: Configure .env File

Open `.env` and fill in your details:

```env
# Server config
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Your company email
COMPANY_EMAIL=your-email@gmail.com

# SMTP settings
EMAIL_SERVICE=gmail
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587

# Your credentials
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password-here  # See Gmail Setup below

# Company name
COMPANY_NAME=Grow Your Therapy
```

### Step 5: Start Backend Server

```bash
npm run dev
```

You should see:

```
🌿 ================================
   Grow Your Therapy Backend API
   ================================

✅ Server running on port 5000
📍 URL: http://localhost:5000
🌍 Environment: development

📧 Email service ready
📬 Company email: your-email@gmail.com

💚 Ready to receive contact form submissions!
================================
```

**Backend is now running!** ✅

---

## 🔐 Gmail Setup (App Password)

### Why App Password?

Google doesn't allow regular passwords for app access anymore. You need a special "App Password".

### Step-by-Step:

#### 1. Enable 2-Step Verification

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Find "2-Step Verification"
3. Click "Get Started" and follow instructions

#### 2. Create App Password

1. Go back to [Security Settings](https://myaccount.google.com/security)
2. Search for "App passwords" (or click [here](https://myaccount.google.com/apppasswords))
3. Click "Select app" → Choose "Mail"
4. Click "Select device" → Choose "Other (Custom name)"
5. Type: "Grow Your Therapy"
6. Click "Generate"

#### 3. Copy Password

You'll see a **16-character password** like:
```
abcd efgh ijkl mnop
```

**Copy this ENTIRE password** (including spaces, or remove spaces - both work)

#### 4. Add to .env

```env
EMAIL_PASSWORD=abcdefghijklmnop
```

**⚠️ IMPORTANT:**
- This is NOT your regular Gmail password
- Keep this password secure
- Never commit .env to GitHub

---

## 🧪 Testing

### Test 1: Email Configuration

```bash
npm run test
```

This sends test emails to verify everything works.

**Expected output:**
```
🧪 Email Service Test
📧 Sending test emails...
✅ TEST PASSED!

Both emails sent successfully:
   1. Notification to: your-email@gmail.com
   2. Auto-reply to: your-email@gmail.com

📬 Check your inbox!
```

**Check your email!** You should receive 2 emails.

### Test 2: API Health Check

Open browser: http://localhost:5000/api/health

**Expected response:**
```json
{
  "success": true,
  "message": "Grow Your Therapy API is running",
  "timestamp": "2024-02-05T10:30:00.000Z",
  "environment": "development"
}
```

### Test 3: Manual API Test

Use this curl command:

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

**Expected response:**
```json
{
  "success": true,
  "message": "Thank you for your message. We'll be in touch soon!",
  "data": {
    "name": "Test User",
    "email": "test@example.com"
  }
}
```

---

## 🎨 Frontend Integration

### Option 1: Create Contact Form Component

Create a new file: `components/ContactFormWithAPI.tsx`

```tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactFormWithAPI() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-charcoal-900 mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-soft border border-warmGray-500/20 focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 outline-none transition-all"
          placeholder="Dr. Sarah Chen"
        />
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-charcoal-900 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-soft border border-warmGray-500/20 focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 outline-none transition-all"
          placeholder="sarah@example.com"
        />
      </div>

      {/* Message Textarea */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-charcoal-900 mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-soft border border-warmGray-500/20 focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 outline-none transition-all resize-none"
          placeholder="Tell us about your practice and what you're looking for..."
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-8 py-4 bg-sage-500 text-white rounded-soft font-medium hover:bg-sage-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-soft hover:shadow-calm"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </motion.button>

      {/* Success Message */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-sage-500/10 border border-sage-500/20 rounded-soft text-sage-700"
        >
          ✅ Thank you! We'll be in touch within 24 hours.
        </motion.div>
      )}

      {/* Error Message */}
      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-red-50 border border-red-200 rounded-soft text-red-700"
        >
          ❌ {errorMessage}
        </motion.div>
      )}
    </form>
  );
}
```

### Option 2: Update Existing CTA Component

Replace the buttons in `components/CTA.tsx`:

```tsx
import ContactFormWithAPI from './ContactFormWithAPI';

// Inside the CTA component, replace the buttons with:
<ContactFormWithAPI />
```

---

## 🚀 Deployment

### Backend Deployment Options

#### Option 1: Railway.app (Recommended - Free)

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Set environment variables:
   - Add all variables from `.env`
6. Deploy!

Your backend will be at: `https://your-app.up.railway.app`

#### Option 2: Render.com (Free)

1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect GitHub repository
4. Set:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Add environment variables
6. Deploy!

#### Option 3: Vercel Serverless Function

Create `api/contact.js` in your Next.js project:

```javascript
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Same email logic as backend
  // ... (copy from emailService.js)
}
```

### Frontend Deployment

Deploy Next.js to Vercel as usual:

```bash
vercel deploy
```

**Update FRONTEND_URL** in backend .env to your production URL:
```env
FRONTEND_URL=https://your-website.vercel.app
```

---

## 🐛 Troubleshooting

### Problem: "Email service connection failed"

**Solution:**
1. Check EMAIL_USER and EMAIL_PASSWORD in .env
2. For Gmail, use App Password (not regular password)
3. Verify 2-Step Verification is enabled

### Problem: "Authentication failed"

**Solution:**
1. Regenerate App Password
2. Copy password without spaces: `abcdefghijklmnop`
3. Restart server after changing .env

### Problem: "CORS error in browser"

**Solution:**
1. Check FRONTEND_URL in backend .env
2. Make sure it matches your frontend URL exactly
3. Include `http://` or `https://`

### Problem: "Connection timeout"

**Solution:**
1. Check EMAIL_HOST and EMAIL_PORT
2. Gmail: `smtp.gmail.com` port `587`
3. Try port `465` with `secure: true`

### Problem: "Too many requests"

**Solution:**
- Rate limit reached (3 per hour)
- Wait 1 hour
- Or adjust rate limit in `contact.routes.js`

### Problem: "Emails not arriving"

**Solution:**
1. Check spam folder
2. Verify COMPANY_EMAIL in .env
3. Run `npm run test` to diagnose
4. Check Gmail sent folder

---

## 📊 API Documentation

### POST /api/contact

**Endpoint:** `http://localhost:5000/api/contact`

**Request Body:**
```json
{
  "name": "Dr. Sarah Chen",
  "email": "sarah@example.com",
  "message": "I'm interested in a new website for my therapy practice."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Thank you for your message. We'll be in touch soon!",
  "data": {
    "name": "Dr. Sarah Chen",
    "email": "sarah@example.com"
  }
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Invalid form data",
  "errors": [...]
}
```

---

## 🔒 Security Checklist

- ✅ Environment variables in .env (never in code)
- ✅ .env in .gitignore
- ✅ Rate limiting enabled
- ✅ Input validation active
- ✅ CORS configured
- ✅ Helmet security headers
- ✅ App Password (not regular password)

---

## 📈 Next Steps

### Optional Enhancements:

1. **Database Integration** - Save form submissions to MongoDB
2. **Email Templates** - Add more template options
3. **File Attachments** - Allow CV/portfolio uploads
4. **Slack Notifications** - Get notified on Slack too
5. **Analytics** - Track form submission rates
6. **A/B Testing** - Test different email templates

---

## 💬 Support

If you run into issues:

1. Check this guide's [Troubleshooting](#troubleshooting) section
2. Run `npm run test` to diagnose email issues
3. Check server logs for errors
4. Verify all .env variables are set correctly

---

**Your contact form with email notifications is now complete!** 🎉

Both you and your clients will receive professional, calming emails. 💚
