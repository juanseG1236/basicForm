import mongoose from "mongoose"

//url de la base de datos
const url =
"mongodb+srv://juanse:sebastian01@cluster0.cewkanx.mongodb.net/form?retryWrites=true&w=majority";


//conexion con la base de datos
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;


//control de error

db.on("error", console.error.bind(console, "Error de conexion"));



//mensaje de prueba una vez iniciada
db.once("open", () => {
  console.log("Conexion exitosa");
});
