
/* Configurar portas para heroku
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
app.listen(port, (err) =>{
  if (err) return console.log(err);
  console.log('Server running on port: ', port)
}) 
if (process.env.NODE_ENV === "production") {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
 }
*/

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send send emails
const app = express();
const path = require('path');
const port = process.env.PORT || 5000 || 3000;
if (process.env.NODE_ENV === "production") {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
 }// end get

app.listen(port, (err) =>{
  if (err) return console.log(err);
  console.log('Server running on port: ', port)
});
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

/* se estiveres a usar o email vais ter de ir nas configurações e ativar application password */
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "fidalgomanagement@gmail.com",
    pass: "uporlxvguheabiqx"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "fidalgomanagement@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
