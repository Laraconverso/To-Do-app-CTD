/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {
    
}

function normalizarTexto(texto) {
    
}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {
    //const inputMail = document.querySelector('#inputEmail');
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)){
        console.log("La dirección de email " + email + " es correcta.");
    } else {
        alert("La dirección de email es incorrecta.");
    } 
}

function normalizarEmail(email) {
    
}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {
    
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
    
}

