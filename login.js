
const formulario = document.getElementById("formLogin");
const mensaje = document.getElementById("mensaje");

// Limpiar los campos al cargar la página
formulario.reset();

const campoEmail = document.getElementById("email");
const campoPassword = document.getElementById("password");

campoEmail.value = "";
campoPassword.value = "";

console.log("Login cargado");
console.log("Email después de limpiar:", campoEmail.value);
console.log("Contraseña vacía:", campoPassword.value === "");




formulario.addEventListener("submit", async (evento) => {

    // Evitamos que el formulario recargue la página
    evento.preventDefault();



    const email =  document.getElementById("email").value;

    const password = document.getElementById("password").value;
                        
    try {



        const respuesta = await fetch(
            "http://localhost:3000/usuarios/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        );


        // Convertimos la respuesta a JSON
        const datos = await respuesta.json();


    
        if (!respuesta.ok) {

            mensaje.textContent =
                datos.error ||
                "Email o contraseña incorrectos.";

            return;
        }


    
        // Guardamos el token
        localStorage.setItem(
            "token",
            datos.token
        );


        // Guardamos los datos del usuario
        localStorage.setItem(
            "usuario",
            JSON.stringify(datos.usuario)
        );


        // Mostramos mensaje de bienvenida
        mensaje.textContent =
            "Login exitoso. Bienvenido " +
            datos.usuario.nombre;


        // Mostramos información en la consola
        console.log("Token:", datos.token);

        console.log("Usuario:", datos.usuario);

       
        // IR AL SISTEMA
        

        setTimeout(() => {

            window.location.href = "bibliotecario.html";

        }, 5000);


    } catch (error) {

        
        // ERROR DE CONEXIÓN
    

        console.error(
            "Error en el login:",
            error
        );


        mensaje.textContent =
            "No se pudo conectar con el servidor.";

    }

});
