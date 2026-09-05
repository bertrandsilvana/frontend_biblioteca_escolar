const botonPrestamos = document.getElementById("btnPrestamos");
const listaPrestamos = document.getElementById("listaPrestamos");

botonPrestamos.addEventListener("click", async () => {

    const respuesta = await fetch("http://localhost:3000/prestamos");

    const prestamos = await respuesta.json();

    listaPrestamos.innerHTML = "";

    prestamos.forEach(prestamo => {

        const elemento = document.createElement("div");

        elemento.innerHTML = `
            <h3>Préstamo N° ${prestamo.id_prestamo}</h3>
            <p>Alumno: ${prestamo.id_alumno}</p>
            <p>Libro: ${prestamo.id_libro}</p>
            <p>Fecha de préstamo: ${prestamo.fecha_prestamo ?? "No informada"}</p>
            <p>Fecha de devolución: ${prestamo.fecha_devolucion ?? "Pendiente"}</p>
            <p>Estado: ${prestamo.estado ? "Activo" : "Devuelto"}</p>
            <hr>
        `;

        listaPrestamos.appendChild(elemento);
    });
});