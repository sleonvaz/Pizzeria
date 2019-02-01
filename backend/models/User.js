var mongoose = require('../config');
var Schema = mongoose.Schema;

var usersSchema = Schema({
    
    email: String,
    usuario: String,
    password: String,
    
})
module.exports = mongoose.model('users', usersSchema);