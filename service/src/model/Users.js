'use strict'

const mongoose = require('mongoose'),
Schema = mongoose.Schema;
const UsersSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    date_created: {
        type: Date,
        default: Date.now
    },
    blocked: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Users', UsersSchema);