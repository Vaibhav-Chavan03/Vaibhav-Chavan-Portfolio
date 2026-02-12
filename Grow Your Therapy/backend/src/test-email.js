// ===================================
// EMAIL TEST SCRIPT
// ===================================
// Run this to test if your email configuration works
// Command: npm run test

require('dotenv').config();
const { sendContactFormEmails } = require('./utils/emailService');

console.log('');
console.log('🧪 ================================');
console.log('   Email Service Test');
console.log('   ================================');
console.log('');

// Test data
const testData = {
  name: 'Dr. Sarah Chen',
  email: process.env.COMPANY_EMAIL || 'your-email@example.com',
  message: `
This is a test message from the Grow Your Therapy contact form system.

If you're receiving this email, it means:
✅ Nodemailer is configured correctly
✅ SMTP connection is working
✅ Email templates are rendering properly

Test timestamp: ${new Date().toISOString()}
  `.trim()
};

console.log('📋 Test Configuration:');
console.log(`   From: ${testData.name}`);
console.log(`   To: ${testData.email}`);
console.log(`   SMTP Host: ${process.env.EMAIL_HOST}`);
console.log(`   Email User: ${process.env.EMAIL_USER}`);
console.log('');

// Run the test
async function runTest() {
  try {
    console.log('📧 Sending test emails...');
    console.log('');

    const result = await sendContactFormEmails(
      testData.name,
      testData.email,
      testData.message
    );

    console.log('');
    console.log('================================');
    
    if (result.success) {
      console.log('✅ TEST PASSED!');
      console.log('');
      console.log('Both emails sent successfully:');
      console.log(`   1. Notification to: ${process.env.COMPANY_EMAIL}`);
      console.log(`   2. Auto-reply to: ${testData.email}`);
      console.log('');
      console.log('📬 Check your inbox!');
    } else {
      console.log('❌ TEST FAILED!');
      console.log('');
      console.log('Error:', result.message);
      console.log('');
      console.log('Troubleshooting tips:');
      console.log('   1. Check your .env file');
      console.log('   2. Verify EMAIL_USER and EMAIL_PASSWORD');
      console.log('   3. For Gmail, use App Password (not regular password)');
      console.log('   4. Check SMTP settings');
    }
    
    console.log('================================');
    console.log('');
    
    process.exit(result.success ? 0 : 1);

  } catch (error) {
    console.log('');
    console.log('================================');
    console.log('❌ TEST ERROR!');
    console.log('');
    console.error('Error:', error.message);
    console.log('');
    console.log('Check the error above and fix configuration.');
    console.log('================================');
    console.log('');
    
    process.exit(1);
  }
}

// Start test
runTest();
