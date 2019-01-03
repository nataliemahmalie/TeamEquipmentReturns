const mongoose  = require('mongoose')
const equipment=require('./equipment')
const schema = {
    name: { type: String, required: true},
    id: { type: String, required: true },
    status: { type: String, required:true } ,
    team:  { type: String, required:true } ,
    equipment:[equipment]
}

const post_schema = new mongoose.Schema(schema)
module.exports = mongoose.model('NewUsr', post_schema, 'users')



