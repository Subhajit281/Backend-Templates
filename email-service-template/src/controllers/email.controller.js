const emailService = require('../services/email.service');
const {
    welcomeTemplate,
    otpTemplate
} = require('../utils/emailTemplates');
const sendEmail = async(req,res,next) => {
    console.log(req.body);
    try{
        const{to, subject,  text, html} = req.body;

        const info = await emailService.sendEmail({
            to,subject,text,html
        });
        res.status(200).json({
            success:true,
            message:'Email Sent Successfully',
            data : info
        })
    }
    catch(error){
        next(error);
    }
};

const sendWelcomeEmail = async (req, res, next) => {
    try {
        const { to, name } = req.body;

        const html = welcomeTemplate(name);

        const info = await emailService.sendEmail({
            to,
            subject: 'Welcome to our Platform',
            html
        });

        res.status(200).json({
            success: true,
            message: 'Welcome email sent successfully',
            data: info
        });
    } catch (error) {
        next(error);
    }
};


const sendOTPEmail = async (req, res, next) => {
    try {
        const { to } = req.body;

        const otp = 123456; // generate OTP could be done later its for testing purpose

        const html = otpTemplate(otp);

        const info = await emailService.sendEmail({
            to,
            subject: 'Your OTP',
            html
        });

        res.status(200).json({
            success: true,
            data: info
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    sendEmail,
    sendWelcomeEmail,
    sendOTPEmail
};