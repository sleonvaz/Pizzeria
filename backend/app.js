var express= require('express');
var bodyParser= require('body-parser');
const port= 3001;
var app= express();

//CONFIGURACIÓN DE ARCHIVOS

app.use(express.static(__dirname+ '/public'));
app.set('views', __dirname+ '/public/views');
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CREACIÓN DEL SERVIDOR
app.listen(port, () =>{
    console.log('Servidor corriendo correctamente');
});

module.exports= app;  


