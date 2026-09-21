


# 9. Ejercicios prácticos

Los siguientes ejercicios permiten practicar los conceptos fundamentales vistos en la unidad: variables, tipos de datos, operadores, estructuras de control, funciones, strings, arrays y objetos.

---

??? question "📝 Ejercicio 1: Calculadora básica"

    ### Enunciado

    Crea un programa que almacene dos números en variables y muestre:

    - Su suma.
    - Su resta.
    - Su multiplicación.
    - Su división.
    - El resto de la división.

    Utiliza operadores aritméticos.

    ??? success "💡 Solución"

        ```javascript
        const numero1 = 20;
        const numero2 = 6;

        console.log("Suma:", numero1 + numero2);
        console.log("Resta:", numero1 - numero2);
        console.log("Multiplicación:", numero1 * numero2);
        console.log("División:", numero1 / numero2);
        console.log("Resto:", numero1 % numero2);
        ```

---

??? question "📝 Ejercicio 2: ¿Aprobado o suspenso?"

    ### Enunciado

    Crea una variable `nota` con un valor entre `0` y `10`.

    El programa debe mostrar:

    - `"Suspenso"` si la nota es menor que 5.
    - `"Aprobado"` si está entre 5 y 6.
    - `"Notable"` si está entre 7 y 8.
    - `"Sobresaliente"` si es 9 o 10.
    - `"Nota no válida"` si el valor no está entre 0 y 10.

    **Extra:** muestra también `APTO` o `NO APTO` utilizando el operador ternario.

    ??? success "💡 Solución"

        ```javascript
        const nota = 8;

        if (nota < 0 || nota > 10) {
            console.log("Nota no válida");
        } else if (nota < 5) {
            console.log("Suspenso");
        } else if (nota < 7) {
            console.log("Aprobado");
        } else if (nota < 9) {
            console.log("Notable");
        } else {
            console.log("Sobresaliente");
        }

        const resultado = nota >= 5 ? "APTO" : "NO APTO";

        console.log(resultado);
        ```

---

??? question "📝 Ejercicio 3: Tabla de multiplicar"

    ### Enunciado

    Crea una variable llamada `numero` y muestra su tabla de multiplicar del 1 al 10.

    Por ejemplo, para:

    ```javascript
    const numero = 7;
    ```

    deberá mostrar:

    ```text
    7 x 1 = 7
    7 x 2 = 14
    7 x 3 = 21
    ...
    7 x 10 = 70
    ```

    Utiliza un bucle `for`.

    ??? success "💡 Solución"

        ```javascript
        const numero = 7;

        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
        ```

---

??? question "📝 Ejercicio 4: Funciones matemáticas"

    ### Enunciado

    Crea las siguientes funciones:

    ```javascript
    sumar(a, b)
    restar(a, b)
    multiplicar(a, b)
    dividir(a, b)
    ```

    Cada función debe recibir dos números y **devolver el resultado** mediante `return`.

    Después, utiliza las funciones para realizar varias operaciones.

    **Extra:** modifica `dividir()` para controlar el caso en el que se intenta dividir entre `0`.

    ??? success "💡 Solución"

        ```javascript
        function sumar(a, b) {
            return a + b;
        }

        function restar(a, b) {
            return a - b;
        }

        function multiplicar(a, b) {
            return a * b;
        }

        function dividir(a, b) {
            if (b === 0) {
                return "No se puede dividir entre 0";
            }

            return a / b;
        }

        console.log(sumar(10, 5));
        console.log(restar(10, 5));
        console.log(multiplicar(10, 5));
        console.log(dividir(10, 5));
        console.log(dividir(10, 0));
        ```

---

??? question "📝 Ejercicio 5: Trabajando con un array"

    ### Enunciado

    Tenemos el siguiente array:

    ```javascript
    const numeros = [4, 7, 2, 9, 5, 10, 3];
    ```

    Crea un programa que:

    1. Muestre todos los números.
    2. Muestre cuántos números contiene.
    3. Muestre el primer elemento.
    4. Muestre el último elemento.
    5. Compruebe si contiene el número `9`.
    6. Calcule la suma de todos sus elementos.
    7. Muestre únicamente los números pares.

    Para resolverlo deberás utilizar un bucle.

    ??? success "💡 Solución"

        ```javascript
        const numeros = [4, 7, 2, 9, 5, 10, 3];

        // 1. Mostrar todos los números
        for (const numero of numeros) {
            console.log(numero);
        }

        // 2. Número de elementos
        console.log("Cantidad:", numeros.length);

        // 3. Primer elemento
        console.log("Primero:", numeros[0]);

        // 4. Último elemento
        console.log("Último:", numeros[numeros.length - 1]);

        // 5. Comprobar si contiene el número 9
        console.log("¿Contiene el 9?", numeros.includes(9));

        // 6. Calcular la suma
        let suma = 0;

        for (const numero of numeros) {
            suma += numero;
        }

        console.log("Suma:", suma);

        // 7. Mostrar los números pares
        for (const numero of numeros) {
            if (numero % 2 === 0) {
                console.log(numero);
            }
        }
        ```

---

??? question "📝 Ejercicio 6: Objetos"

    ### Enunciado

    Crea un objeto que represente a un alumno:

    ```javascript
    const alumno = {
        nombre: "Ana",
        edad: 20,
        curso: "2º SMR",
        notas: [7, 8, 6, 9]
    };
    ```

    El programa debe:

    1. Mostrar el nombre del alumno.
    2. Mostrar su curso.
    3. Mostrar todas sus notas.
    4. Calcular y mostrar la media.
    5. Indicar si ha aprobado o suspendido.
    6. Añadir una propiedad `email`.
    7. Modificar su edad.

    ??? success "💡 Solución"

        ```javascript
        const alumno = {
            nombre: "Ana",
            edad: 20,
            curso: "2º SMR",
            notas: [7, 8, 6, 9]
        };

        // 1. Mostrar el nombre
        console.log("Nombre:", alumno.nombre);

        // 2. Mostrar el curso
        console.log("Curso:", alumno.curso);

        // 3. Mostrar las notas
        console.log("Notas:", alumno.notas);

        // 4. Calcular la media
        let suma = 0;

        for (const nota of alumno.notas) {
            suma += nota;
        }

        const media = suma / alumno.notas.length;

        console.log("Media:", media);

        // 5. Indicar si ha aprobado
        if (media >= 5) {
            console.log("Aprobado");
        } else {
            console.log("Suspenso");
        }

        // 6. Añadir email
        alumno.email = "ana@example.com";

        // 7. Modificar la edad
        alumno.edad = 21;

        console.log(alumno);
        ```

---

??? question "📝 Ejercicio 7: Gestión de alumnos"

    ### Enunciado

    Este es el **ejercicio integrador de la unidad**.

    Disponemos de un array de objetos:

    ```javascript
    const alumnos = [
        {
            nombre: "Ana",
            edad: 20,
            nota: 8
        },
        {
            nombre: "Pedro",
            edad: 19,
            nota: 4
        },
        {
            nombre: "Laura",
            edad: 21,
            nota: 9
        },
        {
            nombre: "Carlos",
            edad: 20,
            nota: 6
        }
    ];
    ```

    Crea un programa que recorra el array y muestre para cada alumno:

    ```text
    Ana - 20 años - Notable
    Pedro - 19 años - Suspenso
    Laura - 21 años - Sobresaliente
    Carlos - 20 años - Aprobado
    ```

    Para determinar la calificación utiliza una función:

    ```javascript
    obtenerCalificacion(nota)
    ```

    que devuelva:

    - `Suspenso`
    - `Aprobado`
    - `Notable`
    - `Sobresaliente`

    ### ⭐ Ampliación

    Añade al programa:

    - El número total de alumnos.
    - El número de aprobados.
    - El número de suspensos.
    - La nota media de la clase.
    - El alumno con mayor nota.

    ??? success "💡 Solución"

        ```javascript
        const alumnos = [
            {
                nombre: "Ana",
                edad: 20,
                nota: 8
            },
            {
                nombre: "Pedro",
                edad: 19,
                nota: 4
            },
            {
                nombre: "Laura",
                edad: 21,
                nota: 9
            },
            {
                nombre: "Carlos",
                edad: 20,
                nota: 6
            }




## 📝 Ejercicio: Navegando por un objeto JSON complejo

### 🎯 Objetivo

A partir del siguiente objeto JavaScript, debes aprender a **navegar por estructuras de datos complejas** utilizando la notación de punto (`.`) y los índices de los arrays (`[]`). No es necesario utilizar `map()`, `filter()`, `reduce()` ni otros métodos de arrays.

---

### 📦 Datos

```javascript
const plataforma = {
    nombre: "VideoWorld",
    version: "3.5.2",
    usuarios: [
        {
            id: 1,
            nombre: "Ana",
            edad: 28,
            activo: true,
            direccion: {
                ciudad: "Almería",
                pais: "España",
                codigoPostal: "04001"
            },
            preferencias: {
                idioma: "es",
                tema: "oscuro",
                notificaciones: true
            },
            historial: [
                {
                    titulo: "Stranger Things",
                    tipo: "serie",
                    temporadas: 4,
                    progreso: 85
                },
                {
                    titulo: "Interestelar",
                    tipo: "pelicula",
                    progreso: 100
                }
            ]
        },
        {
            id: 2,
            nombre: "Carlos",
            edad: 35,
            activo: false,
            direccion: {
                ciudad: "Madrid",
                pais: "España",
                codigoPostal: "28001"
            },
            preferencias: {
                idioma: "es",
                tema: "claro",
                notificaciones: false
            },
            historial: [
                {
                    titulo: "The Office",
                    tipo: "serie",
                    temporadas: 9,
                    progreso: 40
                },
                {
                    titulo: "Dune",
                    tipo: "pelicula",
                    progreso: 75
                },
                {
                    titulo: "Breaking Bad",
                    tipo: "serie",
                    temporadas: 5,
                    progreso: 100
                }
            ]
        },
        {
            id: 3,
            nombre: "Laura",
            edad: 22,
            activo: true,
            direccion: {
                ciudad: "Valencia",
                pais: "España",
                codigoPostal: "46001"
            },
            preferencias: {
                idioma: "en",
                tema: "oscuro",
                notificaciones: true
            },
            historial: [
                {
                    titulo: "The Last of Us",
                    tipo: "serie",
                    temporadas: 1,
                    progreso: 60
                },
                {
                    titulo: "Avatar",
                    tipo: "pelicula",
                    progreso: 100
                }
            ]
        }
    ]
};
```

### 🔎 Preguntas

**1.** Obtén el nombre de la plataforma.
**2.** Obtén el nombre del segundo usuario.
**3.** Obtén la ciudad del tercer usuario.
**4.** Obtén el tema de interfaz utilizado por Ana.
**5.** Obtén el código postal de Carlos.
**6.** Obtén el título del segundo contenido del historial de Ana.
**7.** Obtén el número de temporadas de *The Office*.
**8.** Obtén el progreso de *Dune*.
**9.** Obtén el título del tercer contenido del historial de Carlos.
**10.** Obtén el progreso del segundo contenido del historial de Laura.
**11.** Obtén el número de temporadas de *Breaking Bad*.
**12.** Obtén el código postal del usuario que está en la posición `2`.
