const multer = require('multer');
const path = require('path');
const fs = require('fs');

const fileCategories = {
    '.jpg': 'images',
    '.jpeg': 'images',
    '.png': 'images',
    '.webp': 'images',

    '.mp4': 'videos',
    '.mov': 'videos',
    '.avi': 'videos',
    '.mkv': 'videos',

    '.pdf': 'documents',
    '.doc': 'documents',
    '.docx': 'documents',
    '.txt': 'documents',
    '.csv': 'documents',
    '.xlsx': 'documents',

    '.zip': 'zips',
    '.rar': 'zips'
};

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        const ext = path
            .extname(file.originalname)
            .toLowerCase();

        const category =
            fileCategories[ext] || 'others';

        const folderPath =
            `src/uploads/${category}`;

        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true } );
        }
        cb(null, folderPath);
    },

    filename: (req, file, cb) => {

        cb(
            null,
            Date.now() + '-' + file.originalname
        );

    }

});

const upload = multer({
    storage, limits: {fileSize: 20 * 1024 * 1024}
});

module.exports = upload;