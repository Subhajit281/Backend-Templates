
const noteService = require('../services/note.service');

const getAllNotes = async(req,res) =>{
    try{
        const notes = await noteService.getAllNotes();
        res.status(200).json({
            success : true,
            data : notes
        });
    }catch(error){
        console.error(error);
    }
};

const createNote = async(req,res) => {
    const note = await noteService.createNote(req.body);
    res.status(200).json({
        success : true,
        data : note
    });
};

module.exports = {
    getAllNotes,
    createNote
};