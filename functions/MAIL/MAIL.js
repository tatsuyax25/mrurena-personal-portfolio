const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mrurena82@gmail.com',
      pass: 'pcaiwafgerzcgtby'
    }
  });

  const mailOptions = {
    from: 'email',
    to: 'mrurena82@gmail.com',
    subject: subject,
    text: `Name: ${name}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: "Email sent"
    }
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ message: error.message })
    }
  }
};
