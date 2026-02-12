# 🌿 Grow Your Therapy - Complete Website + Backend

A calm, trustworthy website for mental health professionals with **fully functional contact form and email notifications**.

## 🎯 What's Included

### ✅ Frontend (Next.js)
- Beautiful, calming website design
- 9 animated components
- Premium sage green + lavender theme
- Fully responsive
- TypeScript + Tailwind CSS

### ✅ Backend (Node.js + Express)
- Contact form API
- **Nodemailer email integration**
- Sends emails to YOU when form is filled
- Sends auto-reply to therapist
- Rate limiting & validation
- Production-ready code

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Gmail account (or other email service)

### Frontend Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your email credentials
# (See backend/SETUP_GUIDE.md for detailed instructions)

# Start backend server
npm run dev

# Backend runs on http://localhost:5000
```

---

## 📧 Email Setup (5 Minutes)

### 1. Get Gmail App Password

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Search "App passwords"
4. Generate password for "Mail"
5. Copy the 16-character password

### 2. Configure .env

Edit `backend/.env`:

```env
COMPANY_EMAIL=your-email@gmail.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password-here
```

### 3. Test It

```bash
cd backend
npm run test
```

Check your inbox - you should receive 2 test emails! ✅

**For detailed setup:** See `backend/SETUP_GUIDE.md`

---

## 📁 Project Structure

```
Grow Your Therapy/
├── app/                          # Next.js frontend
├── components/
│   ├── ContactFormWithAPI.tsx   # Form with email integration
│   ├── Hero.tsx
│   ├── WhoItsFor.tsx
│   └── ...
├── backend/
│   ├── src/
│   │   ├── config/              # Email configuration
│   │   ├── utils/               # Email service (Nodemailer)
│   │   ├── controllers/         # API logic
│   │   ├── routes/              # API endpoints
│   │   └── server.js            # Main server
│   ├── .env.example
│   ├── SETUP_GUIDE.md           # Detailed backend setup
│   └── NODEMAILER_GUIDE.md      # Nodemailer explanation
├── README.md
└── DESIGN_GUIDE.md
```

---

## 🎨 Features

### Frontend Features
- 🌿 Calm, therapist-friendly design
- 💚 Premium animations (Framer Motion)
- 📱 Fully responsive
- ♿ Accessibility compliant
- 🎯 SEO optimized

### Backend Features
- 📧 Dual email system (notification + auto-reply)
- 🛡️ Rate limiting (prevent spam)
- ✅ Form validation
- 🔒 Security headers (Helmet)
- 🚦 CORS configured
- 📊 Error handling
- 🧪 Test suite included

---

## 🔄 How It Works

```
1. Therapist fills contact form
         ↓
2. Frontend sends data to backend API
         ↓
3. Backend validates data
         ↓
4. Nodemailer sends 2 emails:
   → Notification to YOU
   → Auto-reply to THERAPIST
         ↓
5. Success response to frontend
         ↓
6. User sees confirmation
```

---

## 📧 Email Templates

### Email to You (Company Notification)

```
Subject: New therapy website inquiry

From: Dr. Sarah Chen
Email: sarah@example.com

Message:
[Their message here]

→ Reply to Dr. Sarah Chen
```

### Email to Therapist (Auto-Reply)

```
Subject: We received your message

Hi Dr. Sarah Chen,

Thank you for reaching out to Grow Your Therapy...

What happens next?
We'll review your message and respond within 24 hours.

Warm regards,
The Grow Your Therapy Team
Designed with care, not noise 💚
```

---

## 🚀 Deployment

### Frontend (Vercel)

```bash
vercel deploy
```

### Backend (Railway/Render)

**Railway.app (Recommended):**
1. Push code to GitHub
2. Import repo on Railway
3. Add environment variables
4. Deploy!

**Detailed deployment guide:** See `DEPLOYMENT.md`

---

## 🧪 Testing

### Test Backend Email

```bash
cd backend
npm run test
```

### Test API Endpoint

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

### Test Frontend Form

1. Start both frontend and backend
2. Fill out contact form
3. Check your email inbox

---

## 📚 Documentation

- **NODEMAILER_GUIDE.md** - Learn how Nodemailer works
- **SETUP_GUIDE.md** - Step-by-step backend setup
- **DESIGN_GUIDE.md** - Design decisions explained
- **DEPLOYMENT.md** - Deploy to production

---

## 🔧 Configuration

### Environment Variables

**Frontend (.env.local):**
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**Backend (.env):**
```env
PORT=5000
COMPANY_EMAIL=your-email@gmail.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
```

---

## 🐛 Troubleshooting

### Emails Not Sending?

1. Check `.env` file exists and is configured
2. Verify App Password (not regular password)
3. Run `npm run test` to diagnose
4. Check spam folder

### CORS Errors?

1. Verify FRONTEND_URL in backend .env
2. Match exactly: `http://localhost:3000`
3. Restart backend server

### Form Not Working?

1. Check backend is running (port 5000)
2. Check frontend API_URL in ContactFormWithAPI.tsx
3. Open browser console for errors

**Full troubleshooting:** See `backend/SETUP_GUIDE.md`

---

## 🎯 Next Steps

### Ready to Launch?

1. ✅ Complete email setup
2. ✅ Test both emails arrive
3. ✅ Customize email templates (optional)
4. ✅ Deploy backend to Railway
5. ✅ Deploy frontend to Vercel
6. ✅ Update API_URL in production
7. ✅ Test live form
8. ✅ Launch! 🚀

### Optional Enhancements

- Add database (MongoDB) to store submissions
- Add Slack notifications
- Implement file uploads
- Add email templates editor
- Add analytics dashboard

---

## 💚 Design Philosophy

Every design decision stems from one question:

**"Will this make a potential client feel safer?"**

- Colors reduce anxiety (sage green, soft lavender)
- Animations feel like exhaling (0.7s, gentle)
- Copy is warm and human (not salesy)
- Forms are reassuring (clear labels, helpful errors)

**Read more:** `DESIGN_GUIDE.md`

---

## 🔐 Security

- ✅ Environment variables (never hardcoded)
- ✅ .env in .gitignore
- ✅ Rate limiting (3 per hour)
- ✅ Input validation
- ✅ CORS protection
- ✅ Helmet security headers
- ✅ Gmail App Password

---

## 📞 Support

Having issues? Check:

1. `backend/NODEMAILER_GUIDE.md` - Understanding Nodemailer
2. `backend/SETUP_GUIDE.md` - Step-by-step setup
3. Troubleshooting section above
4. Run `npm run test` for diagnostics

---

## 📄 License

Created as a template for mental health professionals.

---

**Built with 💚 for therapists who care deeply about their clients.**

Every color, animation, and word is chosen to say:
*"You're in the right place. You're safe here."*
