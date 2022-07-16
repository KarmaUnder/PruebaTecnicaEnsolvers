const NoteSchema = require('../models/note');
const getNoteById = (req, res) => {

    if (!req.params) return res.status(400).send({ message: 'Client has not sent params' });

    const { id } = req.params;
    NoteSchema.findById(id)

        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
}

module.exports = getNoteById;