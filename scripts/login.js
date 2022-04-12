window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
    const form = document.forms[0];
    const email = document.querySelector('#inputEmail');
    const password = document.querySelector('#inputPassword');
    const url = 'https://ctd-todo-api.herokuapp.com/v1';

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const datos = {
            email: email.value,
            password: password.value
        };
        const settings = {
            method: 'POST',
            body: JSON.stringify(datos),
            headers:  {
                'Content-Type': 'application/json'
            }
        };
        realizarLogin(settings);
        form.reset();
    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(settings) {
       console.log("Lanzando consulta de Login...");
       fetch(`${url}/users/login`,settings)
       .then(response => {
           console.log(response);
           if(response.ok != true){
               alert("Algunos de los datos son incorrectos")
           }
           return response.json();
       })
       .then(data => {
           console.log("Login exitoso: ");
           console.log(data);

           if (data.jwt) {
               //guardo en LocalStorage el objeto con el token
               localStorage.setItem('jwt', JSON.stringify(data.jwt));

               //redireccionamos a la página
               location.replace('/mis-tareas.html');
            }
       }).catch(err => {
           console.log("Login rechazado:");
           console.log(err);
       })
    }
});