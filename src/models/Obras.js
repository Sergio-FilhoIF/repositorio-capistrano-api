import mongoose from "mongoose";


const ObrasSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    criador: {
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

const Obras = mongoose.Schema("Obras", ObrasSchema)

export default Obras