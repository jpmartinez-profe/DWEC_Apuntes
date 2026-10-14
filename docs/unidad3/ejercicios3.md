
---

# Ejercicios prácticos

??? question "📝 Ejercicio 1: Cambiar contenido" 

Crea una página en la que al pulsar el botón, el texto del `<h1>` debe cambiar a "Bienvenidos a JavaScript":


```html
<h1 id="titulo">Título original</h1>
<button id="boton">Cambiar título</button>
```

??? question "📝 Ejercicio 2: Contador"

Crea una página con un número y dos botones:

```text
Contador: 0

[ + ] [ - ]
```

Cada vez que se pulse `+`, el contador debe aumentar.

Cada vez que se pulse `-`, debe disminuir.

??? question "📝 Ejercicio 3: Lista dinámica"

Crea:

```html
<input id="producto">
<button id="boton">Añadir</button>
<ul id="lista"></ul>
```

Cada vez que el usuario pulse el botón, el contenido del `input` debe añadirse como un nuevo `<li>`.

Si el campo está vacío, no debe añadirse nada.

??? question "📝 Ejercicio 4: Mostrar información"

Crea un formulario que solicite:

- Nombre
- Edad

Al pulsar el botón, debe aparecer debajo del formulario un mensaje como:

```text
Hola Ana, tienes 20 años.
```

El formulario no debe recargar la página.

??? question "📝 Ejercicio 5: Lista de alumnos"

Partiendo de:

```javascript
const alumnos = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Luis", nota: 4 },
    { nombre: "Marta", nota: 9 },
    { nombre: "Pedro", nota: 6 }
];
```

Crea dinámicamente una lista HTML mostrando:

```text
Ana - 8
Luis - 4
Marta - 9
Pedro - 6
```

Los elementos deben crearse mediante JavaScript utilizando `createElement()` y `append()`.

??? question "📝 Ejercicio 6: Lista de tareas"

```
Crea una pequeña aplicación que permita:

- Escribir una tarea.
- Añadirla a una lista.
- Limpiar el campo después de añadirla.
- No permitir tareas vacías.
- Al hacer clic sobre una tarea, debe eliminarse de la lista.

Utiliza `querySelector()`, `createElement()`, `append()`, `addEventListener()` y `remove()`.
```

??? success "🎯 Ejercicio 7: Reto final"

Crea una aplicación de gestión de alumnos.

Debes partir de:

```javascript
const alumnos = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Luis", nota: 4 },
    { nombre: "Marta", nota: 9 }
];
```

La página debe:

- Mostrar los alumnos en una lista o tabla.
- Mostrar su nombre y nota.
- Permitir añadir un nuevo alumno mediante un formulario.
- Actualizar la lista automáticamente.
- No permitir añadir alumnos sin nombre.
- No permitir notas fuera del rango `0-10`.

En este ejercicio se combinarán **arrays, objetos, funciones, DOM, formularios y eventos**.

