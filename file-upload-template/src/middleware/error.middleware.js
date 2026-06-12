const multer = require('multer');

const errorHandler = (err,req,res,next) => {
    if(err instanceof multer.MulterError){
        if(err.code === 'LIMIT_FILE_SIZE'){
            return res.status(400).json({
                success:false,
                message:'file size exceeded'
            });
        }
    }
    res.status(500).json({
        success:false,
        message:err.message
    });
};

module.exports = errorHandler;