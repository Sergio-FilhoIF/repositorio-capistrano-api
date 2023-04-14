import user from "../models/Usuario"

const create = (body) => user.create(body)


export {
    create, 
}