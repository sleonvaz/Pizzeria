var con = require('./config');
var app = require('./app');

var pizzaController = require('./controller/pizzaController');
var usuariosController = require('./controller/usuariosController');




app.post('/users/add', usuariosController.addState);
app.get('/users/search', verifyToken, usuariosController.searchState);
app.post('/pizza/add',verifyToken, pizzaController.addState);
app.get('/pizza/search', pizzaController.searchState);
//app.post('/pizza/delete', pizzaController.deleteState);
//app.post('/pizza/update', pizzaController.changeState );

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  
  }

module.exports= con;
module.exports= app;