const express = require('express');
const router = express.Router();
const {sendEmail,sendWelcomeEmail, sendOTPEmail} = require('../controllers/email.controller');
const {sendEmailSchema} = require('../validators/email.validator');
const validate = require('../middleware/validator.middleware');

router.post('/send',validate(sendEmailSchema),sendEmail);
router.post('/welcome',sendWelcomeEmail);
router.post('/otp',sendOTPEmail);

module.exports = router;