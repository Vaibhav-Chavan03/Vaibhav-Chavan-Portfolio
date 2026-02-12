// ===================================
// MAIN SERVER FILE
// ===================================
// This is the heart of your backend
// It sets up Express server and connects everything together

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Import routes
const contactRoutes = require('./routes/contact.routes');

// ===================================
// CREATE EXPRESS APP
// ===================================
const app = express();
const PORT = process.env.PORT || 5000;

// ===================================
// MIDDLEWARE
// ===================================
// Middleware = functions that run before your routes
// Think of them as "security checkpoints" and "helpers"

// 1. HELMET - Security headers
// Protects your app from common vulnerabilities
app.use(helmet());

// 2. CORS - Cross-Origin Resource Sharing
// Allows your frontend (localhost:3000) to talk to backend (localhost:5000)
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// 3. JSON Parser
// Converts incoming JSON data into JavaScript objects
app.use(express.json());

// 4. URL Encoded Parser
// Handles form data
app.use(express.urlencoded({ extended: true }));

// 5. Request Logger (Development only)
// Logs every request for debugging
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}

// ===================================
// ROUTES
// ===================================

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Grow Your Therapy API',
    version: '1.0.0',
    endpoints: {
      contact: '/api/contact',
      health: '/api/health',
      test: '/api/test-email (dev only)'
    }
  });
});

// Contact form routes
// All routes in contactRoutes will be prefixed with /api
app.use('/api', contactRoutes);

// ===================================
// ERROR HANDLING
// ===================================

// 404 - Route not found
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.path
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err);
  
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err : undefined
  });
});

// ===================================
// START SERVER
// ===================================

app.listen(PORT, () => {
  console.log('');
  console.log('🌿 ================================');
  console.log('   Grow Your Therapy Backend API');
  console.log('   ================================');
  console.log('');
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log('');
  console.log('📧 Email service ready');
  console.log(`📬 Company email: ${process.env.COMPANY_EMAIL || 'Not set'}`);
  console.log('');
  console.log('🔗 Available endpoints:');
  console.log(`   POST http://localhost:${PORT}/api/contact`);
  console.log(`   GET  http://localhost:${PORT}/api/health`);
  if (process.env.NODE_ENV === 'development') {
    console.log(`   POST http://localhost:${PORT}/api/test-email`);
  }
  console.log('');
  console.log('💚 Ready to receive contact form submissions!');
  console.log('================================');
  console.log('');
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM received, shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('👋 SIGINT received, shutting down gracefully...');
  process.exit(0);
});

// ===================================
// EXPORTS
// ===================================
module.exports = app;
