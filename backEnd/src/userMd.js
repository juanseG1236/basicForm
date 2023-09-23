import { Schema, model } from "mongoose";
import bcrypt from "bcrypt"


//define el modelo del user
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2, // Mínimo 2 caracteres
    maxlength: 50, // Máximo 50 caracteres
  },
  user: {
    type: String,
    required: true,
    minlength: 2, // Mínimo 2 caracteres
    maxlength: 50, // Máximo 50 caracteres
  },
  password: {
    type: String,
    required: true,
    minlength: 2, // Mínimo 2 caracteres
  }


})

//funcion que hashea la contrasena 
userSchema.statics.encripted = function (password) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);
  console.log(typeof hashedPassword)
  return hashedPassword

}

//funcion para validar la contrasena enviada con la de la db
userSchema.methods.validatePassword = function (password, hashedPassword) {
  
  const validate =  bcrypt.compareSync(password, hashedPassword)
  return validate
}

const user = model('User', userSchema);

export default user