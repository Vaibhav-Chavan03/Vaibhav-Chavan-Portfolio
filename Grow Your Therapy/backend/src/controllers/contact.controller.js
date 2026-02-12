// ===================================
// CONTACT CONTROLLER
// ===================================
// This file handles the contact form submission
// It's like the "manager" who receives form data and coordinates sending emails

const { sendContactFormEmails } = require('../utils/emailService');
const { validationResult } = require('express-validator');

// ===================================
// SUBMIT CONTACT FORM
// ===================================
/**
 * Handle contact form submission
 * 
 * Flow:
 * 1. Receive form data from frontend
 * 2. Validate the data
 * 3. Send emails (notification + auto-reply)
 * 4. Send response back to frontend
 * 
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const submitContactForm = async (req, res) => {
  try {
    console.log('📝 New contact form submission received');

    // ===================================
    // STEP 1: VALIDATE INPUT
    // ===================================
    // Check if the form data is valid
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      console.log('❌ Validation failed:', errors.array());
      return res.status(400).json({
        success: false,
        message: 'Invalid form data',
        errors: errors.array()
      });
    }

    // ===================================
    // STEP 2: EXTRACT FORM DATA
    // ===================================
    // Get name, email, message from request body
    const { name, email, message } = req.body;

    // Log the data (helpful for debugging)
    console.log('📋 Form data:', {
      name,
      email,
      messageLength: message.length
    });

    // ===================================
    // STEP 3: SEND EMAILS
    // ===================================
    // This sends BOTH emails:
    // 1. Notification to company (you)
    // 2. Auto-reply to therapist
    const emailResult = await sendContactFormEmails(name, email, message);

    // ===================================
    // STEP 4: SEND RESPONSE
    // ===================================
    
    if (emailResult.success) {
      // Success! Both emails sent
      console.log('✅ Contact form processed successfully');
      
      return res.status(200).json({
        success: true,
        message: 'Thank you for your message. We\'ll be in touch soon!',
        data: {
          name,
          email
        }
      });
    } else {
      // Email sending failed
      console.error('❌ Failed to send emails');
      
      return res.status(500).json({
        success: false,
        message: 'Failed to send emails. Please try again.',
        error: emailResult.message
      });
    }

  } catch (error) {
    // Unexpected error
    console.error('❌ Error in submitContactForm:', error);
    
    return res.status(500).json({
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// ===================================
// TEST ENDPOINT (OPTIONAL)
// ===================================
/**
 * Test endpoint to check if email service is working
 * You can call this to test before deploying
 */
const testEmail = async (req, res) => {
  try {
    console.log('🧪 Testing email service...');

    // Send test emails
    const emailResult = await sendContactFormEmails(
      'Test User',
      'test@example.com',
      'This is a test message to verify email functionality.'
    );

    if (emailResult.success) {
      return res.status(200).json({
        success: true,
        message: 'Test email sent successfully! Check your inbox.',
        result: emailResult
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'Test email failed',
        result: emailResult
      });
    }
  } catch (error) {
    console.error('❌ Test email error:', error);
    return res.status(500).json({
      success: false,
      message: 'Test failed',
      error: error.message
    });
  }
};

// ===================================
// HEALTH CHECK
// ===================================
/**
 * Simple endpoint to check if server is running
 */
const healthCheck = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Grow Your Therapy API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
};

// ===================================
// EXPORTS
// ===================================
module.exports = {
  submitContactForm,  // Main function
  testEmail,          // For testing
  healthCheck         // Health check
};
