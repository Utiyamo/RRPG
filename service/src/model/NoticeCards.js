'use strict'

const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const noticecardsSchema = new Schema({
    titulo: {
        type: String,
        unique: true
    },
    autor: {
        type: String
    },
    estilocard: {
        type: String,
        default: 'slide slide-'
    },
    img: {
        type: String
    },
    href: {
        type: String,
        unique: true
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    isNotice: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('NoticeCards', noticecardsSchema);