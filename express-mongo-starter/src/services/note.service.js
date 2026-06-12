const Note = require('../models/Note');

const getAllNotes = async()=>{
    return await Note.find();
};

const createNote  = async(noteData) => {
    return await Note.create(noteData);
};

module.exports = {
    getAllNotes,
    createNote
};