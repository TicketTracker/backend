const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
let port = process.env.PORT || 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.listen(port, ()=>{
    console.log(`Running on port ${port}`)
})