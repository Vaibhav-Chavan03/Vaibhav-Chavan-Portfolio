// ===================================
// CONTACT ROUTES
// ===================================
// This file defines the API endpoints (URLs)
// Think of routes as "addresses" where your frontend can send requests

const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const rateLimit = require('express-rate-limit');

// Import controller functions
const {
  submitContactForm,
  testEmail,
  healthCheck
} = require('../controllers/contact.controller');

// ===================================
// RATE LIMITING
// ===================================
// Prevent spam by limiting how many times someone can submit the form
// This protects your email service from abuse

const contactFormLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 3,                   // Max 3 requests per hour per IP
  message: {
    success: false,
    message: 'Too many submissions. Please try again later.',
    retryAfter: '1 hour'
  },
  standardHeaders: true,    // Return rate limit info in headers
  legacyHeaders: false,     // Disable X-RateLimit-* headers
});

// ===================================
// VALIDATION RULES
// ===================================
// These check if the form data is valid before processing
// Prevents bad data from being sent

const contactFormValidation = [
  // Name validation
  body('name')
    .trim()                              // Remove extra spaces
    .notEmpty()                          // Must not be empty
    .withMessage('Name is required')
    .isLength({ min: 2, max: 100 })      // 2-100 characters
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s'-]+$/)          // Only letters, spaces, hyphens, apostrophes
    .withMessage('Name contains invalid characters'),

  // Email validation
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()                           // Must be valid email format
    .withMessage('Please enter a valid email address')
    .normalizeEmail(),                   // Normalize email format

  // Message validation
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10, max: 2000 })    // 10-2000 characters
    .withMessage('Message must be between 10 and 2000 characters')
];

// ===================================
// ROUTES
// ===================================

/**
 * POST /api/contact
 * Main endpoint for contact form submission
 * 
 * Request body:
 * {
 *   "name": "Dr. Sarah Chen",
 *   "email": "sarah@example.com",
 *   "message": "I'm interested in a new website..."
 * }
 * 
 * Response:
 * {
 *   "success": true,
 *   "message": "Thank you for your message..."
 * }
 */
router.post(
  '/contact',
  contactFormLimiter,           // Apply rate limiting
  contactFormValidation,        // Apply validation
  submitContactForm             // Handle the request
);

/**
 * GET /api/health
 * Health check endpoint
 * Use this to verify server is running
 */
router.get('/health', healthCheck);

/**
 * POST /api/test-email
 * Test endpoint to verify email functionality
 * Remove this in production or protect with authentication
 */
if (process.env.NODE_ENV === 'development') {
  router.post('/test-email', testEmail);
}

// ===================================
// EXPORTS
// ===================================
module.exports = router;
