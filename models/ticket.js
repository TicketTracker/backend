const Project = require('./project');
const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    title: String,
    description: String,
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'project'
    },
    status: {
        type: String,
        enum: ['New', 'In Progress', 'Done', 'Discarded']
    },
    comment: [{
        type: String
    }]
})

const Ticket = module.exports = mongoose.model('ticket', ticketSchema, 'tickets')

module.exports.createTicket = function (newTicket, callback) {
    Project.findById(newTicket.project, (err, project) => {
        if (err) {
            return callback(err, 500, null)
        }
        if (!project) {
            return callback(`There is no project with id ${newTicket.project}`, 400, null)
        }
        Ticket.create(newTicket, (err, createdTicket) => {
            if (err) {
                return callback(err, 500, null)
            }
            callback(null, 201, createdTicket)
        })
    })
}

module.exports.getAllTicketsByProject = function (projectId, callback) {
    Project.findById(projectId, (err, project) => {
        if (err) {
            return callback(err, 500, null)
        }
        if (!project) {
            return callback(`There is no project with id ${projectId}`, 400, null)
        }
        Ticket.find({
            project: projectId
        }, (err, tickets) => {
            if (err) {
                return callback(err, 500, null)
            }
            if (tickets.length === 0) {
                return callback(err, 200, "There are no tickets in this project")
            }
            callback(null, 200, tickets);
        })
    })

}