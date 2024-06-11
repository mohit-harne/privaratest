const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'kira.ryan@ethereal.email',
        pass: 'kfcYQDS7ZgYAYctuec'
    }
});