var mongoose = require('../config');
var Schema = mongoose.Schema;

var pizzasSchema = Schema({
    id: Number,
    name: String,
    price: {
        mediana: Number,
        familiar: Number
    },
    pic: String,
    ingredients: []
})
module.exports = mongoose.model('pizzas', pizzasSchema);