const API = "http://localhost:3000";


// ==========================================
// AGREGAR ALUMNO
// ==========================================

const formAlumno = document.getElementById("formAlumno");

formAlumno.addEventListener("submit", async (event) => {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const dni = document.getElementById("dni").value;

    try {

        const respuesta = await fetch(`${API}/alumnos`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                nombre: nombre,
                apellido: apellido,
                dni: dni
            })
        });


        const datos = await respuesta.json();


        if (!respuesta.ok) {
            throw new Error(datos.mensaje || "Error al agregar alumno");
        }


        document.getElementById("mensajeAlumno").textContent =
            "✅ Alumno agregado correctamente.";


        formAlumno.reset();


        // Actualizamos la lista de alumnos
        cargarAlumnos();

    } catch (error) {

        console.error(error);

        document.getElementById("mensajeAlumno").textContent =
            "❌ No se pudo agregar el alumno.";
    }

});



// ==========================================
// CARGAR ALUMNOS
// ==========================================

async function cargarAlumnos() {

    try {

        const respuesta = await fetch(`${API}/alumnos`);

        const alumnos = await respuesta.json();

        const selectAlumno = document.getElementById("alumno");


        // Limpiamos el select
        selectAlumno.innerHTML =
            '<option value="">Seleccionar alumno</option>';


        alumnos.forEach(alumno => {

            const opcion = document.createElement("option");

            opcion.value = alumno.id_alumno;

            opcion.textContent =
                `${alumno.nombre} ${alumno.apellido}`;


            selectAlumno.appendChild(opcion);

        });


    } catch (error) {

        console.error("Error al cargar alumnos:", error);

    }

}

// AGREGAR LIBRO

const formLibro = document.getElementById("formLibro");

formLibro.addEventListener("submit", async (event) => {

    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const anio_publicacion =
        document.getElementById("anio_publicacion").value;

    try {

        const respuesta = await fetch(`${API}/libros`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                titulo: titulo,
                autor: autor,
                anio_publicacion: anio_publicacion
            })
        });

        const datos = await respuesta.json();

        if (!respuesta.ok) {
            throw new Error(
                datos.mensaje || "Error al agregar libro"
            );
        }

        document.getElementById("mensajelibro").textContent =
            "✅ Libro agregado correctamente.";

        formLibro.reset();

        // Actualizamos la lista de libros
        cargarLibros();

    } catch (error) {

        console.error(error);

        document.getElementById("mensajelibro").textContent =
            "❌ No se pudo agregar el libro.";
    }

});




// CARGAR LIBROS


async function cargarLibros() {

    try {

        const respuesta = await fetch(`${API}/libros`);

        const libros = await respuesta.json();

        const selectLibro = document.getElementById("libro");


        // Limpiamos el select
        selectLibro.innerHTML =
            '<option value="">Seleccionar libro</option>';


        libros.forEach(libro => {

            const opcion = document.createElement("option");

            opcion.value = libro.id_libro;

            opcion.textContent =
                `${libro.titulo} - ${libro.autor}`;


            selectLibro.appendChild(opcion);

        });


    } catch (error) {

        console.error("Error al cargar libros:", error);

    }

}




// REGISTRAR PRÉSTAMO

const formPrestamo = document.getElementById("formPrestamo");

formPrestamo.addEventListener("submit", async (event) => {

    event.preventDefault();


    const id_alumno =
        document.getElementById("alumno").value;

    const id_libro =
        document.getElementById("libro").value;

    const fecha_prestamo =
        document.getElementById("fechaPrestamo").value;

    const fecha_devolucion =
        document.getElementById("fechaDevolucion").value;
        console.log("ID ALUMNO:", id_alumno);
        console.log("ID LIBRO:", id_libro);
        console.log("FECHA PRÉSTAMO:", fecha_prestamo);


    try {

        const respuesta = await fetch(`${API}/prestamos`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                id_alumno: id_alumno,
                id_libro: id_libro,
                fecha_prestamo: fecha_prestamo,
                fecha_devolucion: fecha_devolucion,
                estado: true

            })

        });


        const datos = await respuesta.json();


        if (!respuesta.ok) {
            throw new Error(
                datos.mensaje || "Error al registrar préstamo"
            );
        }


        document.getElementById("mensajePrestamo").textContent =
            "✅ Préstamo registrado correctamente.";


        formPrestamo.reset();


    } catch (error) {

        console.error(error);

        document.getElementById("mensajePrestamo").textContent =
            "❌ No se pudo registrar el préstamo.";

    }

});



// ==========================================
// AL CARGAR LA PÁGINA
// ==========================================

cargarAlumnos();
cargarLibros();