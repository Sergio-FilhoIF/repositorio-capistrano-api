import mongoose from "mongoose";

const ObrasSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    autores: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    resumo: {
        type: String,
        required: true
    }

})

const Obras = mongoose.model("Obras", ObrasSchema)

export default Obras