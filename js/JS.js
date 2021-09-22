//Ejecutando funciones
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

    //FUNCIONES

function anchoPage(){

    if (window.innerWidth > 850){
        caja_trasera_register.style.display = "block";
        caja_trasera_login.style.display = "block";
    }else{
        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.opacity = "1";
            caja_trasera_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            caja_trasera_register.style.display = "block";
            caja_trasera_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.opacity = "0";
            caja_trasera_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            contenedor_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            caja_trasera_register.style.display = "none";
            caja_trasera_login.style.display = "block";
            caja_trasera_login.style.opacity = "1";
        }
}
let user = "german";
var pass = 123;
let saldo = 100000;

function login() {
    let userid = prompt("Ingrese su nombre de usuario");
    var passid = prompt("Ingrese su contraseña");
    passid = parseInt(passid);
    if (userid == user && pass == passid) {
        window.location.replace("./menu.html");
    } else {
        alert("Usuario o contraseña incorrecta");
    }
}
    
   function verSaldo() {
    alert("Su saldo es de $" + saldo);
    window.location.replace("./menu.html");
   }

   function retirarDinero() {
    let retiro = prompt("¿Cuánto dinero desea retirar?");
    retiro = parseInt(retiro);
    saldo = saldo - retiro;
    alert("Su saldo ahora es de " + saldo);
    window.location.replace("./menu.html");
   }

   function depositarDinero() {
    let deposito = prompt("¿Cuánto dinero desea depositar?");
    deposito = parseInt(deposito);
    saldo = saldo + deposito;
    alert("Su saldo ahora es de " + saldo);
    window.location.replace("./menu.html");
   }

   function cambiarPassword() {
    pass = prompt("Escriba su nueva clave");
    alert("Su clave fue modificada con exito");
    window.location.replace("./menu.html");
   }

   function cerrarSesion() {
    window.location.replace("./login.html");
   }