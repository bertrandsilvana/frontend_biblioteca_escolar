const botonLibros = document.getElementById("btnLibros");
const listaLibros = document.getElementById("listaLibros");

botonLibros.addEventListener("click", async () => {

    const respuesta = await fetch("http://localhost:3000/libros");

    const libros = await respuesta.json();

    listaLibros.innerHTML = "";

    libros.forEach(libro => {

        const elemento = document.createElement("div");

        elemento.innerHTML = `
            <h3>${libro.titulo}</h3>
            <p>Autor: ${libro.autor}</p>
            <p>Año de publicación: ${libro.anio_publicacion ?? "No informado"}</p>
            <hr>
        `;

        listaLibros.appendChild(elemento);
    });
});
/*console.log("libros.js está funcionando");

const botonLibros = document.getElementById("btnLibros");

botonLibros.addEventListener("click", () => {
    console.log("Se hizo clic en Mostrar libros");
});*/