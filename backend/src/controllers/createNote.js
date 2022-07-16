const NoteSchema = require('../models/note');
const createOrder = (req, res) => {

    if (!req.body) return res.status(400).send({ message: 'Client has not sent params' });

    const note = NoteSchema(req.body);
    note.save()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json({ message: err });
        });
        
}

module.exports = createOrder;
