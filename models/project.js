const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
    name: String,
    description: String
})


const Project = module.exports = mongoose.model('project', projectSchema, 'projects')

module.exports.createProject = function (newProject, callback) {
    Project.create(newProject, (err, createdProject) => {
        if (err) {
            return callback(err, 500, null)
        }
        callback(null, 201, {
            status: "success",
            createdProject: createdProject
        })
    })
}

module.exports.getProject = function (projectId, callback) {
    Project.findById(projectId, (err, foundProject) => {
        if (err) {
            return callback(err, 500, null)
        }
        callback(null, 200, foundProject)
    })
}
module.exports.getProjects = function (callback) {
    Project.find({}, (err, projects) => {
        if (err) {
            return callback(err, 500, null)
        }
        callback(null, 200, projects)
    })
}
module.exports.updateProject = function (id, update, callback) {
    Project.findByIdAndUpdate(id, update, (err, updated) => {
        if (err) {
            return callback(err, 500, null)
        }
        callback(null, 200, {
            status: "success"
        })
    })
}