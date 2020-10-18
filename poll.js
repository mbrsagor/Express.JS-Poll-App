const { Schema, model } = require('mongoose');

const pollSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    totalVot: Number,
    options: {
        type: [{
            name: String,
            vot: Number
        }]
    }
})

const poll = model('poll', pollSchema);
module.exports = poll;
