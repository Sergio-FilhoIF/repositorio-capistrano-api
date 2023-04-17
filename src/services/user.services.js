import Usuario from "../models/Usuario.js"

const create = (body) => Usuario.create(body)


export default {
    create,
}