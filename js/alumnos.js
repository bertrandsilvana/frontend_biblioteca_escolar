const botonAlumnos = document.getElementById("btnAlumnos");
const listaAlumnos = document.getElementById("listaAlumnos");

botonAlumnos.addEventListener("click", async () => {

    const token = localStorage.getItem("token");

    if (!token) {
        listaAlumnos.innerHTML = "<p>Debés iniciar sesión.</p>";
        return;
    }

    try {

        const respuesta = await fetch("http://localhost:3000/alumnos", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        const datos = await respuesta.json();

        if (!respuesta.ok) {

            if (respuesta.status === 401) {
                listaAlumnos.innerHTML = "<p>Sesión no válida. Volvé a iniciar sesión.</p>";
                return;
            }

            if (respuesta.status === 403) {
                listaAlumnos.innerHTML = "<p>No tenés permisos para consultar los alumnos.</p>";
                return;
            }

            listaAlumnos.innerHTML = `<p>${datos.mensaje || "Ocurrió un error."}</p>`;
            return;
        }

        const alumnos = datos;

        listaAlumnos.innerHTML = "";

        alumnos.forEach(alumno => {

            const elemento = document.createElement("div");

            elemento.innerHTML = `
                <h3>${alumno.nombre} ${alumno.apellido}</h3>
                <p>DNI: ${alumno.dni}</p>
                <p>ID alumno: ${alumno.id_alumno}</p>
                <hr>
            `;

            listaAlumnos.appendChild(elemento);
        });

    } catch (error) {

        console.error(error);

        listaAlumnos.innerHTML =
            "<p>No se pudo conectar con el servidor.</p>";
    }
});