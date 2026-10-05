const API_PRESTAMOS = "http://localhost:3000";


// ==========================================
// MOSTRAR PRÉSTAMOS
// ==========================================

const botonPrestamos =
    document.getElementById("btnPrestamos");

const listaPrestamos =
    document.getElementById("listaPrestamos");


botonPrestamos.addEventListener("click", async () => {

    // Obtenemos el token guardado al iniciar sesión
    const token = localStorage.getItem("token");


    // Verificamos que exista el token
    if (!token) {

        listaPrestamos.innerHTML =
            "<p>Debés iniciar sesión para consultar los préstamos.</p>";

        return;
    }


    try {

        const respuesta =
            await fetch(`${API_PRESTAMOS}/prestamos`, {

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

                listaPrestamos.innerHTML =
                    "<p>Sesión no válida. Volvé a iniciar sesión.</p>";

                return;
            }


            if (respuesta.status === 403) {

                listaPrestamos.innerHTML =
                    "<p>No tenés permisos para consultar los préstamos.</p>";

                return;
            }


            listaPrestamos.innerHTML =
                `<p>${datos.mensaje || datos.error || "Ocurrió un error."}`;

            return;
        }


        // ==========================================
        // MOSTRAR PRÉSTAMOS
        // ==========================================

        const prestamos = datos;

        listaPrestamos.innerHTML = "";


        prestamos.forEach(prestamo => {

            const elemento =
                document.createElement("div");


            elemento.innerHTML = `
                <h3>Préstamo N° ${prestamo.id_prestamo}</h3>

                <p>Alumno: ${prestamo.id_alumno}</p>

                <p>Libro: ${prestamo.id_libro}</p>

                <p>
                    Fecha de préstamo:
                    ${prestamo.fecha_prestamo ?? "No informada"}
                </p>

                <p>
                    Fecha de devolución:
                    ${prestamo.fecha_devolucion ?? "Pendiente"}
                </p>

                <p>
                    Estado:
                    ${prestamo.estado ? "Activo" : "Devuelto"}
                </p>

                <hr>
            `;


            listaPrestamos.appendChild(elemento);

        });


    } catch (error) {

        console.error(
            "Error al cargar préstamos:",
            error
        );


        listaPrestamos.innerHTML =
            "<p>No se pudo conectar con el servidor.</p>";
    }

});

