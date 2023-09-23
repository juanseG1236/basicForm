
document.addEventListener('DOMContentLoaded', function() {

    //funciones de cambio de formulario

    // obtiene todos los elementos html necearios para el cambio de color y formularios

    const registerForm = document.getElementById('main-container-register');
    const loginForm = document.getElementById('main-container-login');
    const backgroundCircleDark = document.getElementById('background-circle-dark');
    const backgroundCircleLight = document.getElementById('background-circle-light');
    const toggleButton = document.getElementById('toggle-button');
    const changeLogin = document.getElementById('change-login');
    const changeRegister = document.getElementById('change-register');
    





    // funcion de cambio de formulario a su version de registro

    function registerStyle(){
        registerForm.style.display = 'flex';
        loginForm.style.display = 'none';
        backgroundCircleDark.style.transform = 'scale(1)'
        backgroundCircleLight.style.transform = 'scale(30)'
        backgroundCircleLight.style.opacity = '1'
        backgroundCircleLight.style.zIndex="2"
        backgroundCircleDark.style.zIndex="1"



        console.log("b")
    }
    // funcion de cambio de formulario a su version de login

    function loginStyle(){
        registerForm.style.display = 'none';
        loginForm.style.display = 'flex';
        backgroundCircleDark.style.transform = 'scale(30)'
        backgroundCircleDark.style.opacity = '1'
        backgroundCircleLight.style.transform = 'scale(1)'
        backgroundCircleDark.style.zIndex="2"
        backgroundCircleLight.style.zIndex="1"


            console.log("a")
    }
        
  //captura los eventos de cambio de color cuando se oprime el boton   
    changeLogin.addEventListener('click',registerStyle );
    changeRegister.addEventListener('click', loginStyle);

//obtencion de campos de formulario

// formulario de registro
    const register = document.getElementById('register-form');
    const nombreR = document.getElementById('r1');
    const correoR = document.getElementById('r2');
    const contrasenaR = document.getElementById('r3');

// formulario de registro

const login = document.getElementById('login-form');
const correoI = document.getElementById('i1');
const contrasenaI = document.getElementById('i2');


//funcion de obtencion de valores y conversion en JSON del regiter

    // Escuchar el evento de envío del formulario
    register.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevenir el envío del formulario por defecto
    
      // Obtener los valores de los campos del formulario
      const nombre = nombreR.value;
      const correo = correoR.value;
      const contrasena = contrasenaR.value;
    
      // Crear un objeto JSON con los datos del formulario
      const datosUsuario = {
        name: nombre,
        user: correo,
        password: contrasena,
      };
      register.reset()
      const url = 'http://localhost:4000/api/User'

      // Enviar el objeto JSON a través de una solicitud (por ejemplo, utilizando Fetch)
      enviarDatosAlServidor(datosUsuario,url);
    });


    //funcion de obtencion de valores y conversion en JSON del login


      // Escuchar el evento de envío del formulario
      login.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto
      
        // Obtener los valores de los campos del formulario
        const correo = correoI.value;
        const contrasena = contrasenaI.value;
      
        // Crear un objeto JSON con los datos del formulario
        const datosUsuario = {
          user: correo,
          password: contrasena,
        };

        const url = 'http://localhost:4000/api/User/Validate'
      
        // Enviar el objeto JSON a través de una solicitud (por ejemplo, utilizando Fetch)
        enviarDatosAlServidor(datosUsuario,url);
      });

      

      //funcion para enviar los datos al servidor

    function enviarDatosAlServidor(datos , url) {
     
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos), // Convierte el objeto JSON a una cadena JSON
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('No se pudo completar la solicitud al servidor');
          }
          return response.json(); // Convierte la respuesta del servidor a JSON 
        })
        .then(data => {
          // Maneja la respuesta del servidor 
          window.alert(data.info);

          console.log(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    



});

