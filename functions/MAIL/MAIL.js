const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  console.log('Function called');

  const data = JSON.parse(event.body);
  console.log('Data:', data);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mrurena82@gmail.com',
      pass: 'xpwkchicmczpahzx'
    }
  });

  const mailOptions = {
    from: data.from,
    to: 'mrurena82@gmail.com',
    subject: data.subject,
    text: data.body
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent');
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent" })
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ message: error.message })
    }
  }
};
