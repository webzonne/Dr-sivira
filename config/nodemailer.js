import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'hectorsf21@gmail.com',
        pass: 'xmnynmzwrkvorskb'
    },
});

export const mailOptions = {
    from: 'hectorsf21@gmail.com',
    to: 'webzonne29@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
}