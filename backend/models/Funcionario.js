const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Funcionario = new Schema({
   name: {
      type: String
   },
   email: {
      type: String
   },
   designation: {
      type: String
   },
   phoneNumber: {
      type: Number
   }
}, {
   collection: 'funcionarios'
})

module.exports = mongoose.model('Funcionario', Funcionario)