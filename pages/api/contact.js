// export default async (req, res) => {
//     const { name, lastname, mobile, email, message } = req.body;
//     console.log(name, lastname, mobile, email, message);
//       return res.status(200).json({ error: "" });
//   }

// // GMAIL

import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, lastname, mobile, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD
  }
  });

// HOST

// import nodemailer from "nodemailer";

// export default async (req, res) => {
//   const { name, lastname, mobile, email, message } = req.body;
//   const transporter = nodemailer.createTransport({
//     host: "mail.drsivira.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "",
//       pass: ""
//     },
//     tls:{
//       rejectunauthorized:false
//     }
//   });

  try {
    await transporter.sendMail({
      from:"webzonne29@gmail.com",
      to: "webzonne29@gmail.com",
      subject: `PACIENTE  ${name} ${lastname}`,
      html: `<p>Tiene un mensaje para ti</p><br>
        <p><strong>Email del paciente: </strong> ${email}</p><br>
        <p><strong>Telefono del paciente: </strong> ${mobile}</p><br>
        <p><strong>Message del paciente: </strong> ${message}</p><br>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};

