import { Router } from "express";
import {cadastro_obras, cadastro_usuario} from '../controllers/controllers.js'


const route = Router()

route.post("/cadastro_obras", cadastro_obras)
route.post("/cadastro_usuario", cadastro_usuario)



export default route
