import User from "./userMd.js"

const userCtrl = {}

//funcion de obtener todos los usuarios
userCtrl.getUsers = async(req,res) => {
    const user = await User.find();
    res.json(user)
}

//funcion de Crear un nuevo usuario
userCtrl.newUser = async (req,res)=>{
    const { name, user, password} = req.body;
    //llama a la funcion que hashea la password
    const passwordHashed = User.encripted(password);
    const newUser = new User({
        name,
        user,
        password: passwordHashed 
    })
    await newUser.save();
    return res.status(200).send({
        "info": "usuario guardado"
    });

    
}

//funcion para editar un user
userCtrl.updateUser = async (req,res)=>{
    const {name, user, password} = req.body;
    await User.findOneAndUpdate({ user: req.params.user },{
        name,
        user,
        password
    })
    res.send("updated")

}

//funcion para borrar un user
userCtrl.deleteUser = async (req,res)=>{
    const {idUser} = req.body;
    await User.findOneAndDelete({ user: req.params.user }) 
    res.send("deleted")


}


//funcion para obtener un user
userCtrl.getOneUser = async (req, res) => {
    const userget = await User.findOne({ user: req.params.user }); // Agrega las llaves {} para el objeto de consulta
    res.json(userget)
}


//esta funcion valida el usuario para el inicio de sesion
userCtrl.validateUser = async (req , res) => {
    try {
        
        //busca el user segun el usuario enviado
        const {user , password} = req.body
        const userget = await User.findOne({ user: user });
        if (!userget) {
            //si el nombre de usuario no esta en la db lanzara este error
            return res.status(404).send({
                "info": "el usuario no existe"
            });
        }

        //lama a la funcion validate que se encarga de comparar la password ingresa con la ya hasheada de la db
        const validate = userget.validatePassword(password, userget.password);
        if(validate){
            // si concide se enviare esto
            return res.status(200).send({
                "info": "user valido"
            });

        }

        //en dicho caso que la contrasena no este correcta se lanzara este error
        return res.status(500).send({
            "info": "usuario o contrasena equivocada"
        });

    } catch (error) {
        // si  hay algun otro tipo de error se manejara aqui
        return res.status(500).send({
            "info": "error del servidor"
        });

    }
}

export default userCtrl