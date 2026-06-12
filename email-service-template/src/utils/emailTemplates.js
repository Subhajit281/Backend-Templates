const welcomeTemplate = (name) => {
    return `
        <h1>Welcome ${name}!</h1>
        <p>Thank you for joining our platform.</p>
    `;
};

const otpTemplate = (otp) => {
    return `
        <h1>OTP Verification</h1>
        <p>Your OTP is:</p>
        <h2>${otp}</h2>
        <p>This OTP will expire soon.</p>
    `;
};

// CAN ADD MORE TEMPLATES

module.exports = {
    welcomeTemplate,
    otpTemplate
};