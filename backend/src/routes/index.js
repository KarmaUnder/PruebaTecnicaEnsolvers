const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


const getNotes = require ('../controllers/getNotes');
const postNote = require ('../controllers/createNote');
const updateNote = require ('../controllers/updateNote');
const deleteNote = require ('../controllers/deleteNote');
const getNoteById = require ('../controllers/getNoteById')

router.get("/notes", getNotes);
router.post("/notes", postNote);
router.put("/notes/:id", updateNote);
router.delete("/notes/:id",deleteNote)
router.get("/notes/:id", getNoteById);


module.exports = router;
