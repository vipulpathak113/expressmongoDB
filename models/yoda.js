const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const YodaSchema = new Schema({
    number: {
        type: String,
        required: [true, 'number is required']

    },

    password: {
        type: String,
        required: [true, 'password is required']

    }
});

const Yoda = mongoose.model('yoda', YodaSchema)

module.exports = Yoda