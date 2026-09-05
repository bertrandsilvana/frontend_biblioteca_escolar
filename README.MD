# Frontend — Biblioteca Escolar

Proyecto frontend desarrollado como **ejemplo educativo para 7.º año de la Tecnicatura en Programación**.

La aplicación representa la interfaz de una biblioteca escolar y utiliza **HTML, CSS y JavaScript** para construir las pantallas, incorporar interactividad y comunicarse con un backend mediante el método `fetch()`.

El proyecto frontend trabaja en conjunto con un proyecto backend denominado **Biblioteca Escolar**, que proporciona una API para consultar y gestionar la información de la aplicación.

---

## Objetivo del proyecto

El principal objetivo es utilizar una aplicación sencilla y concreta para que los estudiantes puedan comprender cómo se relacionan un **frontend y un backend**.

A través de este proyecto se trabajan los siguientes conceptos:

- Estructura básica de una aplicación web.
- HTML y estructura de las páginas.
- CSS y diseño de la interfaz.
- JavaScript e interactividad.
- Eventos.
- Manipulación del DOM.
- Solicitudes HTTP.
- Método `fetch()`.
- APIs y endpoints.
- Formato JSON.
- Comunicación entre frontend y backend.
- Arquitectura cliente-servidor.

---

## Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| **HTML5** | Estructura de las páginas |
| **CSS3** | Diseño y estilos |
| **JavaScript** | Interactividad y lógica del frontend |
| **Fetch API** | Comunicación con el backend |
| **Live Server** | Visualización y ejecución local del frontend |
| **Visual Studio Code** | Entorno de desarrollo |

---

## Estructura del proyecto

```text
frontend_biblioteca_escolar/
│
├── index.html
│
├── css/
│   └── estilos.css
│
└── js/
    ├── libros.js
    ├── alumnos.js
    └── prestamo.js
```

### Archivos principales

#### `index.html`

Es la página principal de la aplicación.

Contiene la estructura HTML de la interfaz y los elementos con los que interactúa el usuario.

También incluye las referencias a los archivos JavaScript encargados de agregar funcionalidad a la aplicación.

---

#### `css/estilos.css`

Contiene los estilos visuales de la aplicación:

- Colores.
- Tipografías.
- Tamaños.
- Distribución de elementos.
- Botones.
- Formularios.
- Listas.
- Otros componentes visuales.

---

#### `js/libros.js`

Contiene la lógica relacionada con los **libros de la biblioteca**.

Desde este archivo se realizan las operaciones necesarias para consultar y mostrar información relacionada con los libros mediante la comunicación con el backend.

---

#### `js/alumnos.js`

Contiene la lógica relacionada con los **alumnos**.

Permite trabajar desde JavaScript con la información proporcionada por el backend y mostrarla dinámicamente en la interfaz.

---

#### `js/prestamo.js`

Contiene la lógica relacionada con los **préstamos de libros**.

Cuando el usuario hace clic en el botón **Préstamos**, se ejecuta una función que realiza una solicitud al backend utilizando `fetch()`.

El endpoint utilizado es:

```text
http://localhost:3000/prestamos
```

La respuesta recibida desde el backend se convierte de JSON a datos JavaScript y posteriormente se recorren los préstamos para generar dinámicamente los elementos HTML que se muestran en pantalla.

La información mostrada incluye:

- Número de préstamo.
- Alumno.
- Libro.
- Fecha de préstamo.
- Fecha de devolución.
- Estado del préstamo.

---

# Comunicación con el Backend

El frontend se comunica con un proyecto backend denominado:

**Biblioteca Escolar**

El backend proporciona una **API** que permite al frontend realizar solicitudes HTTP.

En este proyecto, JavaScript utiliza el método `fetch()` para comunicarse con los diferentes endpoints de la API.

Por ejemplo, en `prestamo.js`:

```javascript
const respuesta = await fetch("http://localhost:3000/prestamos");
```

Esta instrucción realiza una solicitud al endpoint `/prestamos`.

El backend procesa la solicitud y devuelve información en formato JSON.

Luego, JavaScript obtiene esos datos mediante:

```javascript
const prestamos = await respuesta.json();
```

Los datos recibidos pueden entonces ser utilizados para actualizar dinámicamente la interfaz.

---

# Endpoints utilizados

El frontend consume diferentes recursos proporcionados por el backend.

| Archivo | Recurso | Endpoint | Método HTTP |
|---|---|---|---|
| `libros.js` | Libros | `/libros` | GET |
| `alumnos.js` | Alumnos | `/alumnos` | GET |
| `prestamo.js` | Préstamos | `/prestamos` | GET |

> Los endpoints y métodos se corresponden con la API del proyecto backend **Biblioteca Escolar**.

---

#  Cómo ejecutar el proyecto

## 1. Abrir el frontend

Abrir la carpeta:

```text
frontend_biblioteca_escolar/
```

en **Visual Studio Code**.

---

## 2. Iniciar Live Server

Abrir:

```text
index.html
```

y seleccionar:

**Open with Live Server**

Live Server permitirá visualizar el frontend desde el navegador utilizando un servidor local.

---

## 3. Ejecutar el backend

Para que las funcionalidades que utilizan `fetch()` puedan comunicarse correctamente, también debe estar ejecutándose el proyecto backend:

```text
Biblioteca Escolar
```

El backend debe estar iniciado y disponible en el puerto configurado.

En el ejemplo de `prestamo.js`, el backend se encuentra disponible en:

```text
http://localhost:3000
```

---

# Recursos de la aplicación

El proyecto trabaja principalmente con tres recursos:

```text
js/
├── libros.js
├── alumnos.js
└── prestamo.js
```

Esta organización permite separar la lógica correspondiente a cada recurso y facilita la comprensión del código.

---

# Propósito educativo

Este proyecto fue desarrollado como **material didáctico para 7.º año de la Tecnicatura en Programación**.

Su objetivo es que los estudiantes puedan observar, mediante un ejemplo concreto, cómo un frontend puede comunicarse con un backend.

La aplicación permite comprender que el frontend no necesariamente contiene todos los datos que muestra. En muchos casos, solicita esa información a un servidor mediante una API.


# Conceptos trabajados

A partir de este proyecto se pueden introducir o reforzar:

- Frontend.
- Backend.
- Cliente y servidor.
- API.
- Endpoint.
- HTTP.
- Métodos HTTP.
- `fetch()`.
- `async` / `await`.
- Promesas.
- JSON.
- DOM.
- Eventos de JavaScript.
- Solicitudes y respuestas.
- Comunicación entre aplicaciones.
- Separación de responsabilidades.

---

# Posibles mejoras

El proyecto puede ampliarse incorporando nuevas funcionalidades, por ejemplo:

- Búsqueda de libros.
- Filtrado de información.
- Formularios.
- Validación de datos.
- Alta de nuevos libros.
- Alta de alumnos.
- Registro de préstamos.
- Devolución de libros.
- Manejo de errores.
- Mensajes para el usuario.
- Autenticación.
- Diferentes roles de usuario.
- Diseño responsive.
- Nuevas operaciones de la API.

---

## Contexto

**Proyecto educativo — 7.º año de la Tecnicatura en Programación**

Proyecto desarrollado como ejemplo práctico para trabajar conceptos de **Frontend, Backend, APIs y comunicación mediante `fetch()`**.

El frontend forma parte de un proyecto mayor junto con el backend **Biblioteca Escolar**.