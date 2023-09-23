import { Router } from "express";
import userCtrl from "./userCtrl.js";
const router = Router();

//rutas de get y post para la creacion y obtencion de users
router.route("/")
    .get(userCtrl.getUsers)
    .post(userCtrl.newUser)


//ruta para borrar, esitar y obtener una.
//se usa el user como parametro para hacer la peticion
router.route("/:user")
    .put(userCtrl.updateUser)
    .get(userCtrl.getOneUser)
    .delete(userCtrl.deleteUser)


//ruta para validar el usuario(inicio de sesion)
router.route("/Validate")
.post(userCtrl.validateUser)

export default router;
