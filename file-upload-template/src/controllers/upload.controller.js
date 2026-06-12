const uploadService = require('../services/upload.service');

const uploadFiles = async(req,res,next) => {
    try{
        const result = await uploadService.uploadFiles(req.files);
        res.status(200).json({
            success : true,
            data : result
        });
    }catch(error){
        next(error);
    }

};

module.exports ={
    uploadFiles
};