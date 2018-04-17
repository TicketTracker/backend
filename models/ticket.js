const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    title: String,
    description: String,
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project'
    },
    status: {
        type: String
    }
})

const Ticket = module.exports = mongoose.model('ticket', ticketSchema, 'tickets')