import mongoose, { Schema } from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    tipos_de_usuarios: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true},
    confirmsenha: {
        type: String,
        required: true
    }
    
})

const user = mongoose.Schema("Usuario", usuarioSchema) 

export default user