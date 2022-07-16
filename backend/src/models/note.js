const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: false
    },
    id: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    content: {
        type: String,
        required: false
    },
    achived: {
        type: Boolean,
        required: false
    },
    date: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Note', noteSchema);

