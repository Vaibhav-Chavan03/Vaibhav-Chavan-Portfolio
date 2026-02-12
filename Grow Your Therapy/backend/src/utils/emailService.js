// ===================================
// EMAIL SERVICE - REUSABLE MAIL FUNCTIONS
// ===================================
// This file contains the core email sending logic
// Think of this as your "mail carrier service"

const nodemailer = require('nodemailer');
const emailConfig = require('../config/email.config');

// ===================================
// CREATE TRANSPORTER
// ===================================
// This is like "hiring your mail carrier"
// The transporter is what actually sends emails

const transporter = nodemailer.createTransport(emailConfig.transport);

// Test the connection when the server starts
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email service connection failed:', error.message);
    console.log('📧 Please check your EMAIL_USER and EMAIL_PASSWORD in .env');
  } else {
    console.log('✅ Email service is ready to send messages');
  }
});

// ===================================
// MAIN SEND MAIL FUNCTION
// ===================================
/**
 * Send an email using Nodemailer
 * 
 * @param {string} to - Recipient email address
 * @param {string} subject - Email subject line
 * @param {string} htmlContent - Email body (HTML format)
 * @returns {Promise<Object>} Success or error response
 */
const sendMail = async (to, subject, htmlContent) => {
  try {
    // Email options (like filling out an envelope)
    const mailOptions = {
      from: {
        name: emailConfig.companyName,           // Name that appears in inbox
        address: emailConfig.fromEmail           // Email address that sends
      },
      to: to,                                    // Recipient
      subject: subject,                          // Subject line
      html: htmlContent,                         // Email body (HTML)
    };

    // Send the email (hand it to the mail carrier)
    const info = await transporter.sendMail(mailOptions);

    // Success!
    console.log('✅ Email sent successfully:', info.messageId);
    
    return {
      success: true,
      messageId: info.messageId,
      message: 'Email sent successfully'
    };

  } catch (error) {
    // Something went wrong
    console.error('❌ Error sending email:', error.message);
    
    return {
      success: false,
      error: error.message,
      message: 'Failed to send email'
    };
  }
};

// ===================================
// EMAIL TEMPLATES
// ===================================
// These are pre-designed email layouts
// Calm, professional, therapist-friendly

/**
 * Create HTML template for COMPANY NOTIFICATION
 * This email goes to YOU when someone fills the form
 */
const createNotificationEmail = (name, email, message) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          line-height: 1.6;
          color: #5C5C5C;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .container {
          background: #FAF9F7;
          border-radius: 16px;
          padding: 40px;
          border: 1px solid #E5E5E5;
        }
        .header {
          color: #2F2F2F;
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 24px;
          font-family: 'Playfair Display', serif;
        }
        .info-row {
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid #E5E5E5;
        }
        .label {
          font-weight: 600;
          color: #7FA69B;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        .value {
          color: #2F2F2F;
          font-size: 16px;
        }
        .message-box {
          background: white;
          padding: 20px;
          border-radius: 12px;
          border-left: 4px solid #7FA69B;
          margin-top: 20px;
        }
        .footer {
          margin-top: 32px;
          padding-top: 20px;
          border-top: 1px solid #E5E5E5;
          font-size: 14px;
          color: #8A8A8A;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">💚 New Website Inquiry</div>
        
        <div class="info-row">
          <div class="label">From</div>
          <div class="value">${name}</div>
        </div>
        
        <div class="info-row">
          <div class="label">Email</div>
          <div class="value">
            <a href="mailto:${email}" style="color: #7FA69B; text-decoration: none;">
              ${email}
            </a>
          </div>
        </div>
        
        <div class="label">Message</div>
        <div class="message-box">
          ${message.replace(/\n/g, '<br>')}
        </div>
        
        <div class="footer">
          <p>Received via Grow Your Therapy contact form</p>
          <p style="margin-top: 8px;">
            <a href="mailto:${email}?subject=Re: Your inquiry" 
               style="color: #7FA69B; text-decoration: none;">
              → Reply to ${name}
            </a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

/**
 * Create HTML template for AUTO-REPLY to therapist
 * This email goes to the PERSON who filled the form
 */const createAutoReplyEmail = (name) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.7;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .container {
          background: #f9fafb;
          border-radius: 12px;
          padding: 30px;
          border: 1px solid #e5e7eb;
        }
        .header {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .highlight {
          background: white;
          padding: 16px;
          border-radius: 8px;
          margin: 20px 0;
          border-left: 4px solid #000;
        }
        .footer {
          margin-top: 30px;
          font-size: 13px;
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">Thank you for reaching out 🚀</div>

        <p>Hi ${name},</p>

        <p>
          I’ve received your message through my portfolio website.
          Thank you for taking the time to connect.
        </p>

        <div class="highlight">
          <strong>What happens next?</strong><br>
          I will personally review your message and respond within 24 hours.
        </div>

        <p>
          If your inquiry is urgent, you can reply directly to this email.
        </p>

        <p style="margin-top:20px;">
          Best regards,<br>
          <strong>Vaibhav Chavan</strong><br>
          Full Stack Developer
        </p>

        <div class="footer">
          This is an automated confirmation email.
        </div>
      </div>
    </body>
    </html>
  `;
};


// ===================================
// HIGH-LEVEL FUNCTIONS
// ===================================
// These combine the sendMail function with templates
// Makes it easy to send specific types of emails

/**
 * Send notification email to company
 * @param {string} name - Person's name
 * @param {string} email - Person's email
 * @param {string} message - Their message
 */
const sendNotificationToCompany = async (name, email, message) => {
  const htmlContent = createNotificationEmail(name, email, message);
  
  return await sendMail(
    emailConfig.companyEmail,
    emailConfig.subjects.notification,
    htmlContent
  );
};

/**
 * Send auto-reply confirmation to therapist
 * @param {string} name - Person's name
 * @param {string} email - Person's email
 */
const sendAutoReplyToTherapist = async (name, email) => {
  const htmlContent = createAutoReplyEmail(name);
  
  return await sendMail(
    email,
    emailConfig.subjects.autoReply,
    htmlContent
  );
};

/**
 * Send BOTH emails (notification + auto-reply)
 * This is the main function you'll use
 */
const sendContactFormEmails = async (name, email, message) => {
  try {
    console.log(`📧 Sending emails for: ${name} (${email})`);
    
    // Send both emails in parallel (faster)
    const [notificationResult, autoReplyResult] = await Promise.all([
      sendNotificationToCompany(name, email, message),
      sendAutoReplyToTherapist(name, email)
    ]);

    // Check if both succeeded
    if (notificationResult.success && autoReplyResult.success) {
      console.log('✅ Both emails sent successfully');
      return {
        success: true,
        message: 'Contact form emails sent successfully'
      };
    } else {
      // One or both failed
      console.error('⚠️ One or both emails failed');
      return {
        success: false,
        message: 'Some emails failed to send',
        details: { notificationResult, autoReplyResult }
      };
    }
  } catch (error) {
    console.error('❌ Error in sendContactFormEmails:', error);
    return {
      success: false,
      message: 'Failed to send emails',
      error: error.message
    };
  }
};

// ===================================
// EXPORTS
// ===================================
// Export functions so other files can use them

module.exports = {
  sendMail,                    // Generic send function
  sendNotificationToCompany,   // Send to company
  sendAutoReplyToTherapist,    // Send to therapist
  sendContactFormEmails,       // Send both (recommended)
  transporter                  // Export transporter for testing
};
