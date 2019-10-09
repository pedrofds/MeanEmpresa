const express = require('express');
const app = express();
const funcionarioRoute = express.Router();

// Funcionario model
let Funcionario = require('../models/Funcionario');


// Add Funcionario
funcionarioRoute.route('/create').post((req, res, next) => {
  
  Funcionario.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Funcionarios
funcionarioRoute.route('/').get((req, res) => {
  //console("call metodo create")
  Funcionario.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Funcionario
funcionarioRoute.route('/read/:id').get((req, res) => {
  Funcionario.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Funcionario
funcionarioRoute.route('/update/:id').put((req, res, next) => {
  Funcionario.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Funcionario
funcionarioRoute.route('/delete/:id').delete((req, res, next) => {
  Funcionario.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = funcionarioRoute;