const router = require('express').Router();
const {registerUser,loginUser,getProfile , updateUser,deleteUser} = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');
const validateUserReg = require('../middleware/validate.middleware');

router.post('/register',validateUserReg,registerUser);
router.post('/login',loginUser);
router.get('/profile',authMiddleware,getProfile);
router.patch('/update',authMiddleware,updateUser);
router.delete('/delete',authMiddleware,deleteUser);

module.exports = router;