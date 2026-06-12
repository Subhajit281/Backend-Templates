const transporter = require('../config/email.config');

const sendEmail = async({to,subject,text,html}) => {
    const mailOptions = {
        from : process.env.EMAIL_FROM,
        to,
        subject,
        text,
        html
    };
    const info = await transporter.sendMail(mailOptions);

    return info;
};

module.exports ={
    sendEmail
}