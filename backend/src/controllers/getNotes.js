const NoteSchema = require('../models/note');


const getAllNotes = (req, res) => {


        NoteSchema.find()
            .then((data) => {
                res.json(data);
                // console.log(data)
            })
            .catch((err) => {
                res.json({ message: err });
            });
    
}
module.exports = getAllNotes;
