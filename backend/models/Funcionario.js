const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Funcionario = new Schema({
   name: { type: String, required: [true, 'é obrigatório']  },
   email: { type: String, required: [true, 'é obrigatório'], match: [/\S+@\S+\.\S+/, 'é inválido'] },
   cargo: { type: String, required: [true, 'é obrigatório']},
   numeroTelefone: { type: Number },
   senha :{ type: String, required: [true, 'é obrigatório'] }
});

module.exports = mongoose.model('Funcionario', Funcionario)