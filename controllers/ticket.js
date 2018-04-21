const Ticket = require('../models/ticket')

exports.getTicket = function (req, res) {

}

exports.createTicket = function (req, res) {
    let newTicket = {}
    newTicket.title = req.body.title;
    newTicket.description = req.body.description;
    newTicket.project = req.body.project;
    newTicket.status = 'New'
    Ticket.createTicket(newTicket, (err, code, createdTicket) => {
        if (err) {
            return res.status(code).json({
                success: false,
                error: err
            })
        }
        return res.json({
            success: true,
            message: "New ticket is created"
        })
    })
}

exports.getTicketsByProject = function (req, res) {
    let projectId = req.query.project;
    Ticket.getAllTicketsByProject(projectId, (err, code, tickets) => {
        if (err) {
            return res.status(code).json({
                success: false,
                error: err
            })
        }
        return res.json({
            success: true,
            results: tickets
        });
    })
}