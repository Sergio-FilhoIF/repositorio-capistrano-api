import Obras from "../models/Obras.js"

const create = (body) => Obras.create(body)


export default {
    create,
}