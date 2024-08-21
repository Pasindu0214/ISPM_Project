const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    fname: {
        type: String,
        required: true
    },

    lname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    phn: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

    
}, {timestamps: true})

module.exports = mongoose.model('Workout',workoutSchema)

