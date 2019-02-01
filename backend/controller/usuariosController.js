const usersModel = require("../models/User");
const jwt = require("jsonwebtoken");

var userController = {
  addState: (req, res) => {
    let miUser = new usersModel();

    miUser.email = req.body.email;
    miUser.usuario = req.body.usuario;
    miUser.password = req.body.password;

    miUser.save((err, result) => {
      if (err) {
        console.log(err);
        return res.send(err);
      } else {
        console.log(result);
        jwt.sign({ miUser }, "Telepizza", { expiresIn: "3h" }, (err, token) => {
          console.log(token);
          return res.json({
            token
          });
        });
      }
    });
  },
  searchState: (req, res) => {
    pizzaModel.find(
      { email: authData.email, password: authData.password },
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          jwt.sign(
            { email: authData.email, password: authData.password },
            "Telepizza",
            { expiresIn: "3h" },
            (err, token) => {
              console.log(token);
              return res.json({
                token
              });
            }
          );
        }
      }
    );
  }
};

module.exports = userController;
