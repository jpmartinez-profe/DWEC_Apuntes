??? question "📝 Ejercicio: ¿Cliente o servidor?"

    ### Enunciado

    Lee las siguientes situaciones y decide **dónde debería ejecutarse cada operación**.

    Marca con una **✓** si consideras que la operación debe realizarse en el **cliente**, en el **servidor** o en ambos.

    | Operación | Cliente | Servidor |
    |---|:---:|:---:|
    | Cambiar el color de un botón | | |
    | Validar que un campo no está vacío | | |
    | Comprobar las credenciales contra una BD | | |
    | Consultar una base de datos | | |
    | Mostrar/ocultar un menú | | |
    | Calcular el total de un carrito | | |
    | Guardar definitivamente un pedido | | |
    | Modificar el DOM | | |
    | Enviar una petición a una API | | |
    | Procesar datos confidenciales | | |

    ??? success "💡 Ver solución"

        ### Solución

        | Operación | Cliente | Servidor |
        |---|:---:|:---:|
        | Cambiar el color de un botón | ✓ | |
        | Validar que un campo no está vacío | ✓ | |
        | Comprobar las credenciales contra una BD | | ✓ |
        | Consultar una base de datos | | ✓ |
        | Mostrar/ocultar un menú | ✓ | |
        | Calcular el total de un carrito | ✓* | ✓ |
        | Guardar definitivamente un pedido | | ✓ |
        | Modificar el DOM | ✓ | |
        | Enviar una petición a una API | ✓ | |
        | Procesar datos confidenciales | | ✓ |

        > **\*** El cálculo puede realizarse en el cliente para ofrecer una respuesta inmediata al usuario, pero el servidor debe **volver a calcular y validar el importe** antes de aceptar definitivamente el pedido.


??? question "🐞 Ejercicio de depuración: ¿por qué no se calculan bien los dobles?"

    ### Enunciado

    Tenemos un programa que debe calcular el doble de todos los números almacenados en un array.

    El resultado esperado es:

    ```text
    [4, 8, 12, 16, 20]
    ```

    Sin embargo, el programa proporciona un resultado incorrecto.

    ### Código

    ```javascript
    const numeros = [2, 4, 6, 8, 10];

    const dobles = [];

    for (let i = 0; i < numeros.length; i++) {

        const doble = numeros[i] + 2;

        dobles.push(doble);

    }

    console.log(dobles);
    ```

    ### 🎯 Objetivo

    Utiliza las herramientas de **depuración del navegador** para descubrir dónde está el error.

    No debes limitarte a modificar el código hasta que funcione.

    Utiliza un **breakpoint** y ejecuta el programa paso a paso.

    ### 🔎 Analiza la ejecución

    Observa especialmente los valores de:

    - `i`
    - `numeros[i]`
    - `doble`

    Completa la siguiente tabla:

    | Iteración | `i` | `numeros[i]` | `doble` |
    |---:|---:|---:|---:|
    | 1 | ? | ? | ? |
    | 2 | ? | ? | ? |
    | 3 | ? | ? | ? |
    | 4 | ? | ? | ? |
    | 5 | ? | ? | ? |

    ### ❓ Preguntas

    1. ¿Cuántas veces se ejecuta el cuerpo del `for`?
    2. ¿Qué valor tiene `numeros[i]` en cada iteración?
    3. ¿Qué valor debería tener `doble` en la primera iteración?
    4. ¿Qué valor tiene realmente?
    5. ¿En qué línea está el problema?
    6. ¿Qué operación se está realizando realmente?
    7. ¿Qué operación debería realizarse?
    8. Corrige el programa.

    ??? success "💡 Ver solución"

        El error está en:

        ```javascript
        const doble = numeros[i] + 2;
        ```

        Esta operación **suma 2** al número, pero no calcula su doble.

        Por ejemplo:

        ```text
        4 + 2 = 6
        ```

        pero el doble de `4` es:

        ```text
        4 × 2 = 8
        ```

        La operación correcta es:

        ```javascript
        const doble = numeros[i] * 2;
        ```

        El programa corregido queda:

        ```javascript
        const numeros = [2, 4, 6, 8, 10];

        const dobles = [];

        for (let i = 0; i < numeros.length; i++) {

            const doble = numeros[i] * 2;

            dobles.push(doble);

        }

        console.log(dobles);
        ```

        El resultado será:

        ```text
        [4, 8, 12, 16, 20]
        ```

        !!! important "Idea importante"

            Un programa puede ejecutarse sin producir ningún error en la consola y, sin embargo, estar funcionando incorrectamente.

            Estos errores se denominan **errores lógicos**.


??? question "🐞 Ejercicio de depuración: buscar el número mayor"

    ### Enunciado

    Tenemos un programa que debe encontrar el **número mayor** de un array.

    El resultado esperado es:

    ```text
    El número mayor es: 89
    ```

    Sin embargo, el programa devuelve:

    ```text
    El número mayor es: 0
    ```

    ### Código

    ```javascript
    const numeros = [12, 45, 7, 89, 34, 21];

    let mayor = 0;

    for (let i = 0; i < numeros.length; i++) {

        if (numeros[i] < mayor) {
            mayor = numeros[i];
        }

    }

    console.log("El número mayor es:", mayor);
    ```

    ### 🎯 Objetivo

    Utiliza las herramientas de **depuración del navegador** para descubrir dónde está el error.

    Coloca un **breakpoint** dentro del `for` y ejecuta el programa paso a paso.

    Observa especialmente los valores de:

    - `i`
    - `numeros[i]`
    - `mayor`

    ### 🔎 Analiza la ejecución

    Completa la siguiente tabla mientras utilizas el debugger:

    | Iteración | `i` | `numeros[i]` | `mayor` |
    |---:|---:|---:|---:|
    | 1 | ? | ? | ? |
    | 2 | ? | ? | ? |
    | 3 | ? | ? | ? |
    | 4 | ? | ? | ? |
    | 5 | ? | ? | ? |
    | 6 | ? | ? | ? |

    ### ❓ Preguntas

    1. ¿Cuántas veces se ejecuta el bucle?
    2. ¿Qué valor tiene `mayor` al comenzar?
    3. ¿Cambia el valor de `mayor` durante las iteraciones?
    4. ¿Qué condición se está comprobando?
    5. ¿Tiene sentido esa condición para encontrar el número mayor?
    6. ¿Cuál es el error?
    7. Corrige el programa.

    ### 💡 Pista

    Observa detenidamente esta condición:

    ```javascript
    if (numeros[i] < mayor)
    ```

    Pregúntate:

    > Si quiero encontrar el número **mayor**, ¿debería actualizar `mayor` cuando el nuevo número es menor o cuando es mayor?

    ??? success "💡 Ver solución"

        El error está en la condición:

        ```javascript
        if (numeros[i] < mayor)
        ```

        Estamos comprobando si el número actual es **menor** que `mayor`.

        Pero queremos actualizar `mayor` cuando encontremos un número **mayor**.

        La condición correcta es:

        ```javascript
        if (numeros[i] > mayor)
        ```

        El programa corregido queda:

        ```javascript
        const numeros = [12, 45, 7, 89, 34, 21];

        let mayor = 0;

        for (let i = 0; i < numeros.length; i++) {

            if (numeros[i] > mayor) {
                mayor = numeros[i];
            }

        }

        console.log("El número mayor es:", mayor);
        ```

        Durante la ejecución podemos observar cómo cambia `mayor`:

        | Iteración | `numeros[i]` | `mayor` |
        |---:|---:|---:|
        | 1 | 12 | 12 |
        | 2 | 45 | 45 |
        | 3 | 7 | 45 |
        | 4 | 89 | 89 |
        | 5 | 34 | 89 |
        | 6 | 21 | 89 |

        Finalmente:

        ```text
        El número mayor es: 89
        ```

        !!! important "Idea importante"

            El debugger no sirve únicamente para encontrar errores de sintaxis.

            También nos permite descubrir **errores lógicos**, observando cómo cambian las variables durante la ejecución del programa.