const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema({
    expression: {
        type: String,
        required: true
    },
    result: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('History', historySchema);