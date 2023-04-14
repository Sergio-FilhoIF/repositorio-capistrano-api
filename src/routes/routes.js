import { Router } from "express";
import {soma, saudacao, cadastro} from '../controllers/controllers.js'


const route = Router()

route.get("/test", soma)
route.post("/saudacao", saudacao)
route.post("/cadastro", cadastro)
export default route
