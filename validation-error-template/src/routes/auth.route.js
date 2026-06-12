const express = require('express');
const validate = require('../middleware/validate.middleware');
const {registerSchema} = require('../validators/auth.validator');
const router = express.Router();

// TEST ROUTE
// Used only for validating Joi schemas and middleware flow.
// Not connected to authentication logic.
const registerUser = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Validation Passed'
    });
};
router.post('/register',validate(registerSchema) ,registerUser);

module.exports = router;