
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('main-container-register');
    const loginForm = document.getElementById('main-container-login');
    const backgroundCircleDark = document.getElementById('background-circle-dark');
    const backgroundCircleLight = document.getElementById('background-circle-light');
    const toggleButton = document.getElementById('toggle-button');
    const changeLogin = document.getElementById('change-login');
    const changeRegister = document.getElementById('change-register');
    





    function toggleForm() {

        if (registerForm.style.display === 'flex') {
            
            loginStyle()
    
        } else {
          
            registerStyle()
        }

        console.log("hola")
    }


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
        
        
        







    changeLogin.addEventListener('click',registerStyle );
    changeRegister.addEventListener('click', loginStyle);







});

