
const API = "http://localhost:3000";


// ==========================================
// MOSTRAR LIBROS
// ==========================================

const botonLibros = document.getElementById("btnLibros");
const listaLibros = document.getElementById("listaLibros");


botonLibros.addEventListener("click", async () => {

    // Obtenemos el token guardado al iniciar sesión
    const token = localStorage.getItem("token");


    // Verificamos que exista el token
    if (!token) {

        listaLibros.innerHTML =
            "<p>Debés iniciar sesión para consultar los libros.</p>";

        return;
    }


    try {

        const respuesta = await fetch(`${API}/libros`, {

            headers: {
                "Authorization": `Bearer ${token}`
            }

        });


        const datos = await respuesta.json();


        // ==========================================
        // MANEJO DE ERRORES
        // ==========================================

        if (!respuesta.ok) {

            if (respuesta.status === 401) {

                listaLibros.innerHTML =
                    "<p>Sesión no válida. Volvé a iniciar sesión.</p>";

                return;
            }


            if (respuesta.status === 403) {

                listaLibros.innerHTML =
                    "<p>No tenés permisos para consultar los libros.</p>";

                return;
            }


            listaLibros.innerHTML =
                `<p>${datos.mensaje || datos.error || "Ocurrió un error."}</p>`;

            return;
        }


        // ==========================================
        // MOSTRAR LIBROS
        // ==========================================

        const libros = datos;

        listaLibros.innerHTML = "";


        libros.forEach(libro => {

            const elemento =
                document.createElement("div");


            elemento.innerHTML = `
                <h3>${libro.titulo}</h3>
                <p>Autor: ${libro.autor}</p>
                <p>Año de publicación: ${libro.anio_publicacion ?? "No informado"}</p>
                <hr>
            `;


            listaLibros.appendChild(elemento);

        });


    } catch (error) {

        console.error(
            "Error al cargar libros:",
            error
        );


        listaLibros.innerHTML =
            "<p>No se pudo conectar con el servidor.</p>";

    }

});
``
