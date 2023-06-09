const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/handle-form', async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.text;

  // Here you can add code to handle the form data, such as sending an email or storing the data in a database

  // Create a trasporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mrurena82@gmail.com',
      pass: 'pcaiwafgerzcgtby'
    }
  });

  // Set the email options
  let mailOptions = {
    from: email,
    to: 'urena_miguel82@outlook.com',
    subject: subject,
    text: `Name: ${name}\nMessage: ${message}`
  };

  // Send the email
  let info = await transporter.sendMail(mailOptions);
  console.log('Message sent:', info.messageId);

  res.send('Form data email sent');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
