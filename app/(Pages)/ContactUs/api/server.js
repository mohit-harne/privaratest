const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lalittekade@gmail.com',
    pass: 'xzttglgopineioij'
   
  }
});

app.post('/send', (req, res) => {
  const { name, email, number, city, object, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'lalittekade@gmail.com',
    subject: `Enquiry from ${name} for ${object}`,
    text: `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nCity: ${city}\nType: ${object}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
