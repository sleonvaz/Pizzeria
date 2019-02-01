const pizzaModel = require('../models/Pizza');
const jwt = require('jsonwebtoken');

var pizzaController = {
    addState:  (req, res) => {
    
        jwt.verify(req.token, 'Telepizza', (err, authData) => {
            if(err) {
              res.sendStatus(403);
            } else {
              
        let miPizza = new pizzaModel();
        miPizza.id = pizza1.id;
        miPizza.name = pizza1.name;
        miPizza.price = pizza1.price;
       
        miPizza.save((err, result) => {
            if (err) {
                
                console.log(err);
                return res.send(err);
                
            } else {
                // let tarea = {
                //     id:result.id,
                //     nombre:result.nombre,
                //     estado: result.estado
                // }
                console.log(result);
                return res.status(200).send(result);
            }
        })
            }
        
        });
    
    },
    searchState: (req, res) => {
        // jwt.verify(req.token, 'Telepizza', (err, authData) => {
        //     if(err) {
        //       res.sendStatus(403);
        //     } else {
        
        pizzaModel.find({}, (err, result) => {
            if (err) {
                res.send(err)
            } else {
                res.status(200).send(result);
            }

        })
    // }
},
    // deleteState: function (req, res) {
    //     let tareasId = req.body.id;
    //     tareasModel.findByIdAndDelete(tareasId, (err, result) => {
    //         if (err) {
    //             res.send(err)
    //         } else {
    //             res.status(200).send(result);
    //         }
    //     });
    // },
    // changeState:function (req, res) {
    //     let tareasId = req.body.id;
    //     console.log(tareasId);
    //     let update = {
    //         estado: req.body.estado
    //     }
    //     tareasModel.findByIdAndUpdate(tareasId, update, (err, result) => {
    //         if (err) {
    //             res.send(err)
    //             console.log(err);
    //         } else {
    //             console.log(result);
    //             res.status(200).send(result);
    //         }
    //     });
    // }
};


module.exports = pizzaController;