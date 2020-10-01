'use strict'

const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const gamesSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    num_players: {
        type: String
    },
    image: {
        type: String
    },
    manual: {
        type: String
    },
    dev_info: [{
        developer: {
            type: String
        },
        release_day: {
            type: Date
        },
        version: {
            type: String
        },
        companyName: {
            type: String
        },
        last_att: {
            developer: {
                type: String
            },
            description_modifications: {
                type: String                
            },
            info: {
                type: String
            }
        }
    }]
});

module.exports = mongoose.model('Games', noticecardsSchema);