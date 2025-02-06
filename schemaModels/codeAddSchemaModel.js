const mongoose = require('mongoose');

const codeAddSchema = mongoose.Schema({
    id: {type: Number, required: true },
    category: {type: String, required: true },
    code: {type: String, required: true },
},{versionKey: false});

const CodeModel = mongoose.model("Code", codeAddSchema);
module.exports = CodeModel;