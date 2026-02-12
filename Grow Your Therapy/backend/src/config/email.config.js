// ===================================
// EMAIL CONFIGURATION
// ===================================
// This file sets up the email transporter for Nodemailer
// Think of this as "setting up your mail carrier"

require('dotenv').config();

// Configuration object for Nodemailer
const emailConfig = {
  // ===================================
  // SMTP TRANSPORT SETTINGS
  // ===================================
  // This tells Nodemailer HOW to send emails
  // Like giving your mail carrier instructions
  
  transport: {
    // Email service (Gmail, Outlook, etc.)
    service: process.env.EMAIL_SERVICE || 'gmail',
    
    // SMTP server details
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT) || 587,
    
    // Security settings
    secure: false, // true for port 465, false for other ports
    
    // Your email credentials (from .env file)
    auth: {
      user: process.env.EMAIL_USER,      // Your email
      pass: process.env.EMAIL_PASSWORD,  // Your app password
    },
    
    // Extra options for better reliability
    tls: {
      rejectUnauthorized: false // Avoid some TLS issues
    }
  },

  // ===================================
  // EMAIL ADDRESSES
  // ===================================
  
  // Where inquiries will be sent TO (your company email)
  companyEmail: process.env.COMPANY_EMAIL || process.env.EMAIL_USER,
  
  // What appears in "FROM" field (your company email)
  fromEmail: process.env.EMAIL_USER,
  
  // Company name (appears in email signature)
  companyName: process.env.COMPANY_NAME || 'Grow Your Therapy',

  // ===================================
  // EMAIL TEMPLATES
  // ===================================
  
  // Subject lines for different email types
  subjects: {
    // Email sent to YOU when someone fills the form
    notification: 'New therapy website inquiry',
    
    // Email sent to THERAPIST as confirmation
    autoReply: 'We received your message'
  },

  // ===================================
  // VALIDATION
  // ===================================
  
  // Check if all required environment variables are set
  validate: function() {
    const required = [
      'EMAIL_USER',
      'EMAIL_PASSWORD',
      'COMPANY_EMAIL'
    ];
    
    const missing = required.filter(key => !process.env[key]);
    
    if (missing.length > 0) {
      throw new Error(
        `Missing required environment variables: ${missing.join(', ')}\n` +
        'Please check your .env file.'
      );
    }
    
    return true;
  }
};

// Validate configuration on import
emailConfig.validate();

module.exports = emailConfig;
