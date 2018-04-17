const Project = require('../models/project')

exports.getProjects = function (req, res) {
    Project.getProjects((err, code, body) => {
        res.status(code).json(body)
    })
}
exports.getProject = function (req, res) {
    Project.getProject(req.params.id, (err, code, body) => {
        res.status(code).json(body)
    })
}

exports.createProject = function (req, res) {
    let newProject = {};
    newProject.name = req.body.name;
    newProject.description = req.body.description
    Project.createProject(newProject, (err, code, body) => {
        res.status(code).json(body)
    })
}

exports.updateProject = function (req, res) {
    let update = {};
    if (req.body.name) {
        update.name = req.body.name
    }
    if (req.body.description) {
        update.description = req.body.description
    }
    Project.updateProject(req.params.id, update, (err, code, body) => {
        res.status(code).json(body)
    })

}