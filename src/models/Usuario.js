import mongoose from "mongoose";
import bcrypt from "bcrypt"
const UsuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    tipos_de_usuarios: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
        select: false

    },
    confirmsenha: {
        type: String,
        required: true,
        select: false
    }
    
})
// baixar o bcrypt: npm i bcrypt
UsuarioSchema.pre("save", async function(next) {
    this.senha = await bcrypt.hash(this.senha, 10)
    this.confirmsenha = await bcrypt.hash(this.confirmsenha, 10)
    next()
})
const Usuario = mongoose.model("Usuario", UsuarioSchema) 

export default Usuario