import { Router } from "express";
import {cadastro_obras} from '../controllers/controllers.js'


const route = Router()

route.post("/cadastro_obras", cadastro_obras)




export default route
