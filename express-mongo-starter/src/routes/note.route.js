const router = require('express').Router();

const{
    getAllNotes,
    createNote
} = require('../controllers/note.controller');

router.get('/getnotes',getAllNotes);
router.post('/createnote',createNote);

module.exports = router;