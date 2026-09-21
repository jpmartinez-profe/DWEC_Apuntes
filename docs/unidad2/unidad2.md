# UD2 Introducción al lenguaje JavaScript

## 1. Sintaxis Básica

### 1.1. Espacios en blanco

Generalmente, JavaScript **ignora** los espacios en blanco al ejecutar el programa. Los espacios, tabulaciones y saltos de línea se utilizan para mejorar la legibilidad del código. 

```
let nombre = "Ana";
let edad = 20;

let nombre="Ana";let edad=20;
```
Ambos códigos funcionan, pero el primero es mucho más fácil de leer.

### 1.2. Comentarios
JavaScript ofrece 2 tipos de comentarios:

- Para un comentario de una sola línea se utiliza //.
- Para comentarios de varias líneas (1 bloque) se utilizan /* */

```
// Guardamos la edad del usuario

/*
   Calculamos el precio
   aplicando un descuento.
*/
```
> ℹ️ **Comentar bloque en VSCode**
> 
> * Si quieres comentar un bloque de código de una vez en VSCode, puedes hacerlo con el atajo de teclado **CTRL + Ç**

### 1.3. Identificiadores

Los identificadores son los nombres que utilizamos para identificar variables, funciones, objetos, etc.
```
let edad;
let precioProducto;
```
Reglas básicas:
- Javascript distingue entre mayúsculas y minúsculas. 
- Sólo puede estar formado por letras, números y los símbolos  $ (dólar) y  _ (guión bajo).
- El primer carácter no puede ser un número.

> ℹ️ **Nomenclatura lowerCamelCase**
> 
> * Es ampliamente adoptado. La primera palabra se escribe completamente en minúsculas, y las palabras siguientes comienzan con una letra mayúscula.
> Ejemplos:  perroNombre  ,  perroEdad  ,  perroTipoRaza 


## 2. Variables y tipos de datos


### 2.1 Declaración de variables
Para crear una variable utilizamos **let** o **const**:
```
let edad = 20;          //edad puede cambiar su valor
const nombre = "Ana";   //nombre no podrá cambiar su valor
```

| ℹ️ **Buenas Prácticas** |
| :--- |
| - Utiliza **const** por defecto y **let** cuando necesites cambiar el valor de la variable. 
- Usa siempre nombres descriptivos. |

### 2.2. Tipos de datos

### Tipos de datos básicos en JavaScript

| **Tipo** | **Ejemplo** | **Descripción** |
|---|---|---|
| 🔢 `number` | `25` | Números tanto enteros como decimales |
| 🔤 `string` | `"Hola"` | Texto |
| ✅ `boolean` | `true` | Verdadero o falso |
| ❓ `undefined` | `undefined` | Variable sin valor asignado |
| 🚫 `null` | `null` | Ausencia intencionada de valor |

| ℹ️ **Cadenas de caracteres** |
| :--- |
| Se pueden usar tanto comillas simples ('') como dobles(""), así como los nuevos "template literals" que usan este tipo de comila *``*. |

### 2.3. Conversión de tipos
En ocasiones necesitamos convertir un dato de un tipo a otro. Los principales métodos para lograrlo son:
- Number()
- String()
- Boolean()

```
// Podemos convertir un texto en un número:
let edad = "20"; 
let edadNumero = Number(edad);   
console.log(edadNumero);

// Podemos convertir un número en texto:
let edad = 20;
let edadTexto = String(edad);
```

### 2.4 Operadores

Vamos a resumir todos los operadores en la siguiente tabla:

| **Categoría** | **Operadores** | **Descripción** |
|---|---|---|
| 🧮 **Aritméticos** | `+` `-` `*` `/` `%` `**` | Realizan operaciones matemáticas |
| 🔍 **Comparación** | `===` `!==` `>` `<` `>=` `<=` | Comparan valores y devuelven `true` o `false` |
| 🧠 **Lógicos** | `&&` `\|\|` `!` | Permiten combinar o negar condiciones |
| ➕ **Incremento / decremento** | `++` `--` | Aumentan o disminuyen un valor en 1 |
| 📝 **Asignación** | `=` `+=` `-=` `*=` `/=` | Asignan o modifican el valor de una variable |


|
#### 2.4.1 Operador Coalescencia nula  ??

Permite utilizar un valor alternativo cuando el valor de la izquierda es null o undefined.
```
const nombre = null;
const resultado = nombre ?? "Sin nombre";
console.log(resultado); // "Sin nombre"
```
Es diferente de ||, porque ?? solo considera null y undefined como ausencia de valor.
```
const cantidad = 0;
console.log(cantidad || 10); // 10
console.log(cantidad ?? 10); // 0
```

#### 2.4.2 Encadenamiento opcional  ?.

Permite acceder a propiedades de un objeto sin provocar un error si alguna propiedad intermedia no existe.
```
const usuario = {
    nombre: "Ana"
};

console.log(usuario.direccion?.calle);
```

| ℹ️ **Diferencia entre el operador `==` y `===`** |
| :--- |
| La principal diferencia es que el primero (`==`) solo se fija en el valor de los elementos a comparar, mientras que el segundo se fija en el valor y además si son del mismo tipo. Vamos a ver un ejemplo que además nos ayuda a comprender la diferencia entre “string” (primitivo) y “String” (objeto). |

``` 
 let j = new String("x"); 
 j === "x"  // false 
 j == "x"   // true 
 
``` 


## 2.3. Estructuras de control 

| **Estructura** | **Utilidad** |
|---|---|
| `if` | Ejecutar código si se cumple una condición |
| `if...else` | Elegir entre dos alternativas |
| `else if` | Comprobar varias condiciones |
| `? :` | Condición sencilla dentro de una expresión |
| `switch` | Seleccionar entre varias opciones |
| `while` | Repetir mientras se cumpla una condición |
| `do...while` | Repetir ejecutando el código al menos una vez |
| `for` | Repetir controlando las iteraciones |
| `break` | Salir de un bucle |
| `continue` | Saltar una iteración |

En el siguiente ejemplo puede verlas todas las estructuras de control en acción:
``` javascript
const notas = [4, 7, 9, 3, 10];

for (let i = 0; i < notas.length; i++) {

    const nota = notas[i];

    // if...else if...else
    if (nota < 0 || nota > 10) {
        console.log("Nota no válida");
        continue;
    } else if (nota < 5) {
        console.log("Suspenso");
    } else if (nota < 7) {
        console.log("Aprobado");
    } else {
        console.log("Aprobado con buena nota");
    }

    // Operador ternario
    const resultado = nota >= 5 ? "APTO" : "NO APTO";
    console.log(resultado);

    // switch
    switch (nota) {
        case 10:
            console.log("Matrícula");
            break;
        case 9:
            console.log("Sobresaliente");
            break;
        default:
            console.log("Nota normal");
    }

    // while
    let contador = 0;

    while (contador < 1) {
        console.log("Procesando nota...");
        contador++;
    }

    // do...while
    let procesada = false;

    do {
        procesada = true;
        console.log("Nota procesada");
    } while (!procesada);

    // break
    if (nota === 10) {
        console.log("Hemos encontrado un 10");
        break;
    }
}
```

## 2.4. Funciones

Una función es un bloque de código que realiza una tarea determinada y que podemos ejecutar tantas veces como necesitemos. Las funciones permiten **organizar** y **reutilizar** el código.

- **Declaración**: Una función se declara utilizando la palabra clave function:
```
function saludar() {
    console.log("Hola");
}
saludar();
```
- **Parámetros y argumentos**: Las funciones pueden recibir información mediante parámetros.
```
function saludar(nombre) {
    console.log("Hola " + nombre);
}
```
- **Parámetros con valor por defecto**: En javascript es muy común usar un valor por defecto en los parámetros de las funciones por si el valor no es pasado.
```javascript
function saludar(nombre = "usuario") {
    console.log("Hola " + nombre);
}

saludar("Ana");
saludar(); 
```
- **Return**: Una función puede devolver un resultado mediante return.
```
function sumar(a, b) {
    return a + b;
}

const resultado = sumar(5, 3);

console.log(resultado);
```

## 2.5. Funciones Flecha (Arrow functions)
Javascript permite definir funciones de una forma más compacta usando el operador flecha =>.
Por ejemplo, la función siguiente:
```
function sumar(a, b) {
    return a + b;
}
```
puede escribirse de la siguiente forma:
```
const sumar = (a, b) => {
    return a + b;
};
```
Y cuando la función solo tiene una línea de código, y es un "return" aún puede compactarse más:
```
const sumar = (a, b) => a + b;
```

También podemos utilizar funciones flecha con un único parámetro:
```
const doble = numero => numero * 2;

console.log(doble(5)); // 10
```

## 2.6. Cadenas de texto

Las dos formas tradicionales de usar cadenas de texto:
```
const nombre = "Ana";
const mensaje = 'Hola mundo';
```

***Template Literals***
Los template literals permiten crear cadenas utilizando backticks y facilitan la inclusión de variables mediante ${}. Digamos que es la nueva forma de trabajar con cadenas de texto.
```javascript
const nombre = "Ana";
const edad = 20;

const mensaje = `Hola, soy ${nombre} y tengo ${edad} años.`;

console.log(mensaje);

const precio = 10;
const cantidad = 3;

console.log(`Total: ${precio * cantidad} €`);
```

**Propiedad length**
La propiedad length permite conocer el número de caracteres de una cadena.
```
const texto = "JavaScript";
console.log(texto.length);
```


**Métodos básicos de strings**
| Método          | Función                                  |
|:---------------:|------------------------------------------|
| `toUpperCase()` | Convierte a mayúsculas                   |
| `toLowerCase()` | Convierte a minúsculas                   |
| `trim()`        | Elimina espacios al principio y al final |
| `includes()`    | Comprueba si contiene un texto           |
| `startsWith()`  | Comprueba cómo comienza                  |
| `endsWith()`    | Comprueba cómo termina                  |
| `slice()`       | Extrae una parte del texto               |
| `replace()`     | Sustituye parte del texto                |

```javascript
const texto = "  Hola JavaScript  ";
console.log(texto.toUpperCase());
console.log(texto.trim());
console.log(texto.includes("JavaScript"));
```

## 2.7. Arrays
Un array permite almacenar varios valores dentro de una misma variable.
```
const frutas = ["manzana", "pera", "naranja"];
```
Un array puede contener diferentes tipos de datos, aunque normalmente es recomendable que sus elementos tengan un propósito común:
```
const notas = [7, 8.5, 6, 9];
```

### 2.7.1. Añadir y eliminar elementos
| Método       | Función             |
|--------------|---------------------|
| `push()`     | Añade al final      |
| `pop()`      | Elimina el último   |
| `unshift()`  | Añade al principio  |
| `shift()`    | Elimina el primero  |

### 2.7.2. Recorrer un array
```javascript
const frutas = ["manzana", "pera", "naranja"];
frutas.push("uva");
frutas.push("melón");
frutas.pop();
frutas.unshift("jinjol");

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
for (const fruta of frutas) {
    console.log(fruta);
}
```
💡 

!!! tip "Consejo"
Para empezar, for...of es la opción más sencilla para recorrer los elementos de un array.

### 2.7.3. Recorrer un array

| Método       | Función                           |
|--------------|-----------------------------------|
| `includes()` | Comprueba si contiene un elemento |
| `indexOf()`  | Obtiene la posición de un elemento |
| `slice()`    | Obtiene una parte del array       |
```javascript
const frutas = ["manzana", "pera", "naranja"];
console.log(frutas.includes("pera")); // true
console.log(frutas.indexOf("naranja")); // 2
```
```javascript
const frutas = ["manzana", "pera", "naranja", "plátano"];
const algunasFrutas = frutas.slice(1, 3);
console.log(algunasFrutas);
```

## 2.8. Objetos
Un objeto permite agrupar diferentes datos relacionados mediante propiedades.
```
const alumno = {
    nombre: "Ana",
    edad: 20,
    curso: "2º SMR"
};
```
### 2.8.1. Acceder a las propiedades
Podemos acceder a una propiedad utilizando el operador ".":
```
console.log(alumno.nombre);
console.log(alumno.edad);
```
También podemos utilizar corchetes:
```
console.log(alumno["nombre"]);
```
!!! note "Información"
Esta segunda forma resulta especialmente útil cuando el nombre de la propiedad está almacenado en una variable.

### 2.8.2. Modificar, añadir y eliminar propiedades
´´´
alumno.edad = 21;                   //Modificar
alumno.email = "ana@example.com";   //Si no existe la propiedad, se crea
delete edad;                        //Elimina la propiedad edad
´´´
### 2.8.4. Objetos y arrays
En javascript es muy importante poder combinar arrays y objetos. Así se crean los obtetos JSON siendo estos la base del intercambio de información en Javascript. 
```javascript
const alumnos = [
    {
        nombre: "Ana",
        edad: 20
    },
    {
        nombre: "Pedro",
        edad: 21
    }
];

console.log(alumnos[0].nombre);
console.log(alumnos[1].edad);

const alumno = {
    nombre: "Ana",
    notas: [7, 8, 9]
};

console.log(alumno.notas[0]);
```