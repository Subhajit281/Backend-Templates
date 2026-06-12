const validateUserReg = (req,res,next) => {
   // console.log('validating...');
    const {name,email,password} = req.body;

    if(!email || !name || !password) throw new Error('All fields are required');

    next();
};

module.exports = validateUserReg;