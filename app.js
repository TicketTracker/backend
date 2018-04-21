const config = require('./config')
const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
let port = process.env.PORT || 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
const router = express.Router();
//controllers
const ticketController = require('./controllers/ticket')
const projectController = require('./controllers/project')
mongoose.connect(config.db.mainDb);
mongoose.connection.on('error', function (...arg) {
    console.log(arguments);
});
router.route('/tickets/:id')
    .get(ticketController.getTicket)

router.route('/tickets')
    .get(ticketController.getTicketsByProject)
    .post(ticketController.createTicket)

router.route('/projects')
    .get(projectController.getProjects)
    .post(projectController.createProject)

router.route('/projects/:id')
    .get(projectController.getProject)
    .put(projectController.updateProject)
app.use(cors());
app.use('/api', router);
app.listen(port, () => {
    console.log(`Running on port ${port}`)
})