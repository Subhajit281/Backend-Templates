const uploadFiles = async(files) => {
    return files.map(file => ({
        filename: file.filename,
        path: file.path
    }));

};

module.exports = {
    uploadFiles
}