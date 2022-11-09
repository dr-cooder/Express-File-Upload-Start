const mongoose = require('mongoose');

const FileSchecma = new mongoose.Schema({
    name: {
        type: String
    },
    data: {
        type: Buffer
    },
    size: {
        type: Number
    },
    mimetype: {
        type: String
    },
});

const FileModel = mongoose.model('FileModel', FileSchecma);
module.exports = FileModel;