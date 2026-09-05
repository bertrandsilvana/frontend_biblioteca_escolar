const botonAlumnos = document.getElementById("btnAlumnos");
const listaAlumnos = document.getElementById("listaAlumnos");

botonAlumnos.addEventListener("click", async () => {

    const respuesta = await fetch("http://localhost:3000/alumnos");

    const alumnos = await respuesta.json();

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
}); 