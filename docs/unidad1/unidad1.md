#  1. Evolución y características de los navegadores web

En los inicios de Internet existían numerosos problemas de compatibilidad entre navegadores (Internet Explorer, Netscape Navigator, Opera) a diferentes niveles, y esto hizo tomar conciencia de la importancia en la adopción de estándares. El **World Wide Web Consortium (WWWC o W3C)** es una organización que se encarga de velar por la implementación de estándares en el ámbito web, haciendo posible que diferentes fabricantes de software se pongan de acuerdo en beneficio del usuario final.


## 1.1. Arquitectura Cliente/Servidor:

Las tareas se reparten entre dos partes principales: el **cliente**, que solicita los servicios, y el **servidor**, que los proporciona.

- **El cliente:** Es el dispositivo o programa del usuario (como un navegador web o una aplicación móvil) que inicia la comunicación enviando una **petición** y se encarga de presentar la información recibida al usuario (HTLM + CSS + Javascript)
- **El servidor:** Es un equipo o programa especializado que recibe la petición, procesa la información y devuelve una **respuesta**. Puede encargarse de:
--   acceder a bases de datos;
--   autenticar usuarios;
--   procesar información;
--   ejecutar lógica de negocio;
--   generar contenido;
--   proporcionar APIs.
- **La comunicación:** Se realiza mediante un ciclo constante de peticiones y respuestas a través de una red, utilizando protocolos como HTTP.

**Ejemplo:**

El usuario introduce:
```
https://www.ejemplo.com/productos
```
El navegador realiza una petición:
```
CLIENTE ──────── HTTP ────────> SERVIDOR
         GET /productos
```
El servidor responde:
```
SERVIDOR ─────── HTTP ────────> CLIENTE
              respuesta
```
El navegador recibe los recursos y los procesa.

## 1.2. Cliente frente a servidor

Una comparación sencilla:
### Comparación: cliente vs. servidor
| 💻 **Entorno cliente** | 🖥️ **Entorno servidor** |
|---|---|
| Se ejecuta en el navegador | Se ejecuta en la máquina servidor |
| Está cerca del usuario | Está en la infraestructura del servicio |
| Interactúa directamente con la interfaz | Gestiona datos y lógica de negocio |
| **HTML, CSS, JavaScript** | **PHP, Java, Python, C#, Node.js, etc.** |
| Puede manipular el **DOM** | Puede acceder a **bases de datos** |
| Tiene acceso limitado al sistema | Tiene acceso a recursos del servidor según permisos |
| El usuario puede inspeccionar el código | El código normalmente no se envía al cliente |
**¿Si escribimos una contraseña dentro de un programa JavaScript que se descarga al navegador, ¿podemos considerarla secreta?** La respuesta es No. El usuario puede inspeccionar el código descargado.

## 1.3 ¿Qué ocurre cuando cargamos una web?

<div style="text-align: center;">
<p><strong>1. Usuario introduce URL</strong></p>
<p style="text-align: center;">↓</p>
<p>🖥️ <strong>2. Navegador realiza petición HTTP</strong></p>
<p style="text-align: center;">↓</p>
<p>🌐 <strong>3. Servidor responde</strong></p>
<p style="text-align: center;">↓</p>
<p>📄 <strong>4. Navegador recibe HTML</strong></p>
<p style="text-align: center;">↓</p>
<p>🔍 <strong>5. Analiza el HTML</strong></p>
<p style="text-align: center;">↓</p>
<p>🌳 <strong>6. Construye el DOM</strong></p>
<p style="text-align: center;">↓</p>
<p>📦 <strong>7. Descarga CSS, JavaScript, imágenes...</strong></p>
<p style="text-align: center;">↓</p>
<p>⚙️ <strong>8. Ejecuta JavaScript</strong></p>
<p style="text-align: center;">↓</p>
<p>🖼️ <strong>9. Renderiza la página</strong></p>
</div>


## 2. Mecanismos de ejecución de código en un navegador Web

Los navegadores modernos incorporan diferentes **motores** (Javascript Engine) capaces de interpretar y ejecutar código. En el caso de JavaScript, podemos citar:

-   **V8** → Chrome y otros navegadores basados en Chromium.
-   **SpiderMonkey** → Firefox.
-   **JavaScriptCore** → Safari.

Aunque internamente los motores tienen arquitecturas diferentes, todos tienen como objetivo ejecutar JavaScript de acuerdo con el estándar del lenguaje, y por supuesto, realizarlo de la forma más eficiente posible.

### 2.1. ¿El navegador interpreta o compila JavaScript?

Tradicionalmente se hablaba de JavaScript como un lenguaje **interpretado**. Actualmente la realidad es más compleja. Los motores modernos utilizan técnicas como:
-   interpretación;
-   compilación JIT (_Just-In-Time_);
-   optimización del código;


| ℹ️ **Importante** |
| :--- |
| JavaScript es un lenguaje ejecutado por el motor JavaScript del navegador, que puede utilizar interpretación y compilación JIT para conseguir un mejor rendimiento. |

## 3. Lenguajes de programación en el entorno cliente

Durante la historia de la Web han existido diferentes tecnologías para ejecutar código en el cliente.

Por ejemplo:

-   JavaScript
-   VBScript        —histórico y actualmente obsoleto—
-   Java Applets  —histórico y casi obsoleto—
-   Flash/ActionScript —histórico—
-   WebAssembly

Actualmente, el lenguaje fundamental del desarrollo web del lado cliente es:  **JavaScript**
Además, **TypeScript** se utiliza ampliamente como lenguaje que posteriormente se transforma a JavaScript.

**WebAssembly (Wasm)** permite ejecutar código compilado de otros lenguajes (C, C++, Rust, etc.) de forma que una vez cargado pueda ser usado desde el código Javascript. Normalmente se utiliza cuando se necesita mucho rendimiento o funcionalidades específicas usadas en Videojuegos, Procesamiento de audio y video, Criptografía, IA, etc.

| ℹ️ **Importante** |
| :--- |
| No confundir lenguajes con los llamados "frameworks" de desarrollo como React, Angular, Vue.js, Svelte, etc. |


### 3.1 Características de los lenguajes de script
JavaScript pertenece tradicionalmente a la categoría de los **lenguajes de scripting**.

Un script es un programa destinado normalmente a automatizar o controlar determinadas operaciones dentro de un entorno. Algunas características asociadas a JavaScript:

-   sintaxis relativamente sencilla;
-   tipado dinámico;
-   ejecución en múltiples plataformas;
-   integración con HTML;
-   interacción con el DOM;
-   manejo de eventos;
-   programación asíncrona;
-   acceso a APIs del navegador.

| ℹ️ **Importante** |
| :--- |
| **ECMA** es la organización encargada de estandarizar el lenguaje Javascript. Algunos llaman al propio lenguaje *EcmaScript*.  La última versión es la EcmaScript2026, aunque una de las más sonada fue la llamada ES6 (2015) la cual introdujo las *clases*, función *arrow*, las *promesas*, y las variables de bloque *let* y *const*.|

### 3.2 Ventajas de los lenguajes de script

- **Facilidad de desarrollo:** Permiten realizar determinadas tareas con relativamente poco código.

- **Integración con el navegador:** JavaScript está profundamente integrado con la plataforma Web. Podemos decir que es el ***único*** lenguaje usado en navegadores.

- **Multiplataforma:** El mismo código puede ejecutarse en diferentes sistemas y navegadores, dentro de las capacidades compatibles.

- **Interactividad:** Permite modificar una página sin tener que recargarla completamente.

### 3.3. Desventajas y limitaciones

JavaScript en el navegador también presenta limitaciones.

- **Seguridad:** El navegador utiliza un modelo de seguridad que limita lo que puede hacer el código. Por ejemplo, una página no puede acceder libremente a todos los archivos del ordenador.

- **Dependencia del navegador:** El comportamiento puede variar entre navegadores, especialmente con APIs nuevas o características no estandarizadas.

- **Rendimiento:** Aunque los motores modernos son muy rápidos, determinadas operaciones pueden ser más adecuadas para código nativo o WebAssembly.

- **Código visible:** El código JavaScript enviado al navegador puede ser inspeccionado por el usuario.

## 4. ¿Dónde puede aparecer JavaScript?

JavaScript puede incorporarse a una página Web de diferentes formas.

Las tres formas principales que podemos encontrar son:

1.  JavaScript **integrado directamente en HTML** mediante la etiqueta `<script>`.
    
2.  JavaScript **en un archivo externo**.
    
3.  JavaScript asociado directamente a determinados elementos HTML mediante **atributos de evento**.
    

Actualmente, la opción más recomendable para proyectos reales suele ser utilizar **archivos JavaScript externos**, ya que permite separar el contenido HTML de la lógica de programación.


### 4.1. JavaScript dentro de la etiqueta `<script>`

Podemos escribir código JavaScript directamente dentro de una etiqueta `<script>`.

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>JavaScript</title>
</head>
<body>

    <h1>Mi página Web</h1>

    <script>
        console.log("Hola desde JavaScript");
    </script>

</body>
</html>
```

El navegador encontrará la etiqueta  **script** y ejecutará el código JavaScript que se encuentra en su interior.

En este ejemplo:

```javascript
console.log("Hola desde JavaScript");
```

se muestra el mensaje en la **consola del navegador**.

!!! tip "Recuerda"  
La etiqueta `<script>` permite introducir código JavaScript dentro de un documento HTML.



### 4.2. JavaScript en un archivo externo

También podemos colocar el código JavaScript en un archivo independiente.

Por ejemplo, podemos tener la siguiente estructura:

```text
mi-web/
│
├── index.html
└── app.js
```

El archivo `index.html` contiene el HTML:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Mi página Web</title>
</head>
<body>

    <h1>Mi página Web</h1>
    <script src="app.js"></script>

</body>
</html>
```

Y el archivo `app.js` contiene el código JavaScript:

```javascript
console.log("Hola desde el archivo app.js");
```

La conexión entre ambos archivos se realiza mediante:

```html
<script src="app.js"></script>
```

El atributo `src` indica al navegador dónde se encuentra el archivo JavaScript.



### 4.3. Ventajas de utilizar archivos externos

Separar JavaScript del HTML presenta varias ventajas.

#### Organización

El proyecto queda dividido en diferentes archivos según su función.

```text
HTML       → estructura
CSS        → presentación
JavaScript → comportamiento
```

#### Reutilización

Un mismo archivo JavaScript puede utilizarse en varias páginas.

```text
           ┌─────────────┐
           │   app.js    │
           └──────┬──────┘
                  │
          ┌───────┴────────┐
          ▼                ▼
      index.html       contacto.html
```

#### Mantenimiento

Cuando necesitamos modificar el comportamiento de la aplicación, podemos trabajar directamente sobre el archivo JavaScript.

#### Legibilidad

El código HTML resulta más sencillo de leer cuando no contiene grandes cantidades de JavaScript.

----------

### 4.4. JavaScript en atributos HTML

También es posible escribir código JavaScript directamente en determinados atributos de los elementos HTML.

Por ejemplo:

```html
<button onclick="alert('Hola')">
    Saludar
</button>
```

Cuando el usuario pulsa el botón, se ejecuta:

```javascript
alert("Hola");
```

Este mecanismo funciona, pero **no suele ser la opción recomendada en aplicaciones modernas**.

Una de las razones es que mezcla diferentes responsabilidades dentro del mismo documento:

```text
HTML
 └── estructura
      +
JavaScript
 └── comportamiento
```

Es preferible mantener separados ambos aspectos.



### 4.5. Integración del código con las etiquetas HTML

HTML y JavaScript trabajan conjuntamente en las aplicaciones Web.

HTML define los elementos que forman la página:

```html
<h1>Calculadora</h1>
<button>Sumar</button>
```

JavaScript puede utilizar esos elementos y modificar su comportamiento.

Podemos resumirlo así:

```text
HTML
 │
 │ crea los elementos
 ▼
DOM
 │
 │ JavaScript accede a ellos
 ▼
JavaScript
 │
 ├── modifica contenido
 ├── modifica estilos
 ├── responde a eventos
 └── añade comportamiento
```



#### 4.5.1. Acceder a un elemento HTML

Supongamos que tenemos:

```html
<h1 id="titulo">Hola</h1>
```

Podemos localizar este elemento desde JavaScript mediante:

```javascript
const titulo = document.getElementById("titulo");
```

La variable `titulo` contiene ahora una referencia al elemento HTML.

Podemos utilizarla para modificar su contenido:

```javascript
titulo.textContent = "Hola, alumnos";
```

El resultado será equivalente a tener inicialmente:

```html
<h1 id="titulo">Hola, alumnos</h1>
```

#### 4.5.2 Modificar el contenido de una página

HTML:

```html
<h1 id="titulo">Título original</h1>
```

JavaScript:

```javascript
const titulo = document.getElementById("titulo");
titulo.textContent = "Nuevo título";
```

JavaScript ha modificado el contenido del elemento.

Esto ocurre **sin necesidad de modificar físicamente el archivo HTML**.

El navegador modifica la representación del documento que tiene cargada en memoria.



#### 4.5.3. Modificar estilos

JavaScript también puede modificar determinados estilos CSS.

HTML:

```html
<h1 id="titulo">
    Hola
</h1>
```

JavaScript:

```javascript
const titulo = document.getElementById("titulo");
titulo.style.fontSize = "40px";
```

También podemos modificar otros estilos:

```javascript
titulo.style.backgroundColor = "yellow";
titulo.style.padding = "20px";
```

Sin embargo, en aplicaciones grandes suele ser preferible trabajar con **clases CSS** en lugar de modificar directamente muchos estilos desde JavaScript.

#### 4.5.4. Responder a eventos

Una de las funciones más importantes de JavaScript es responder a las acciones realizadas por el usuario. Algunos eventos habituales son:

-   `click` → pulsar un elemento.
-   `input` → modificar el contenido de un campo.    
-   `change` → cambiar el valor de determinados controles.    
-   `submit` → enviar un formulario.    
-   `keydown` → pulsar una tecla.    
-   `mouseover` → situar el ratón sobre un elemento.
    

Por ejemplo:

```html
<button id="btnSaludar">
    Saludar
</button>
```

JavaScript:

```javascript
const boton = document.getElementById("btnSaludar");
boton.addEventListener("click", function () {
    alert("¡Hola!");
});
```

#### 4.5.6. El DOM como punto de unión

Cuando el navegador carga un documento HTML, construye una representación de sus elementos denominada **DOM (Document Object Model)**.

Por ejemplo, este HTML:

```html
<body>
    <h1>Mi página</h1>
    <button>Saludar</button>
</body>
```

puede representarse conceptualmente como:

```text
Document
   │
   └── html
        │
        └── body
             │
             ├── h1
             │    └── "Mi página"
             │
             └── button
                  └── "Saludar"

```

JavaScript puede acceder a este árbol y modificarlo. Por ejemplo:

```javascript
document.querySelector("h1").textContent = "Nuevo título";
```
El navegador actualizará el elemento `<h1>` que aparece en la página.

## 5. Depuración de programas

Uno de los conceptos más importantes del tema es la **depuración** (*debugging*). Depurar consiste en **localizar y solucionar errores de un programa**.

Podemos clasificar los errores, de forma sencilla, en:

### Errores sintácticos

El código no tiene una sintaxis válida. Por ejemplo:

````javascript
if (nombre === "Juan" {
    console.log("Hola");
}
````
En este caso falta el paréntesis `)` que cierra la condición del `if`.

### Errores de ejecución

El programa comienza a ejecutarse, pero durante su ejecución ocurre un problema. Por ejemplo:

```
let persona;
console.log(persona.nombre);
```

En este caso, `persona` tiene el valor `undefined`, por lo que intentar acceder a `persona.nombre` provoca un error durante la ejecución.
### Errores lógicos

El programa funciona y no produce ningún error, pero **el resultado obtenido no es el esperado**. Por ejemplo:

```
let precio = 100;
let descuento = 20;

let resultado = precio + descuento;
```

Sintácticamente el código es correcto y se ejecuta sin problemas, pero el resultado no es el esperado, deberíamos restar en vez de sumar en este caso. 

### 5.1. Inspector de código en los navegadores:

El inspector de código es una herramienta para desarrolladores que viene integrada en los navegadores modernos como Firefox y Google Chrome. Tienes varias formas de abrir el inspector de código, una de mis favoritas es con el acceso por teclas.

-   En Mac y Linux: Cmd + Opción + i
    
-   En Windows : Ctrl + Shift + i
    

![](data:image/png;base64,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DyZOvFFbNRGyirxTPPvJJBKi2n7MjB492rmHnOiy++KLLzpD+IUk99AUMjlJOu9ucHuJnt6rwisphPINUalcMUSl5kcEKI888ogTqPqfZSKIO/vsc5wHS9mG+BJReRGjDVasqHUeqiUeoNW//wD+o1lzceCA6GqKA/v2YeO3v40v57+CvS1booUol7VqhbZffYW2F1yAnrOed3ugeusSEREVii14NM0zlSeVST6XZJ9JlillkRA1iXXr1jn/93+M2u9TlpLJSSoeDFGp1DBEJSIiomZKDlIvvggNb76Jr0TvUy9IFfdJbXXgAA79+tk4et48BqhERNRkbJ0ZTbIdsZVJPpekntnWq9hlFKJmKpOTRERERERERERERLnBfC4zDFGJiIiIiIiIiIiaCYaomWGISkRERERERERE1EwwRM1MQUNUIiIiIiIiIiIiolLDEJWIiIiIiIiIiIjIgiEqERERERERERERkUWLurp1B4MpIiJKrG3btti7d28wTURERERULPhdlYgot9gTlYiIiIiIiAJbtmzBUUcdFUwXwuE/ryjEbprM3/+9scn2TUREucEQlYiIiIiancbGfdi1axcaG/c3u2On4lRR0RodOnREmzZtmryCfoh64MABfPHFXhw8mJ/Biy1atMChh7ZFy5YtGaISEVHRY4hKRERERM3OJ598gu7dj0RFRXn3fqPS0djYiE8+qUe3bt2avNJ+iNrQ8EXeAlSfCFLbtTs0mCYiIipWDFGJiIiIqNkRIVHv3sc0u+Om4rZu3fqCD6PX8UPUzz77PCjLp/btDwv+JiIiKlYMUYmIiIio2WGISsWIISoREVHxYohKRERERM0OQ1QqRgxRiYiIildaIWpVVRVqamqCaSIiIiKiUpRuiNrQ0IDPP/8chx12GNq1axeUE+USQ1QiIqLilVaI2qVLF+zYsSOYJiIiIiIqRUlDVPGwn7ffftsJTsVDqMS0CFTPOussy0Op6jDr1mosCaaBIRPuxchjg8kSJY5rFrrfOglDOsmHkCrv/uqtqJYP3NN95K2YNGSn2y5DJuBeTWPsXDIV984CRjrbN+2rvOUqRBWdX2bMmIEBAwY403PnzsWuXbtw7bXXekvYxd0T9eKLL8L7778XTCd1yimnYN68l4JpX/r3RN2JG8Y3YEYwDYy9oSceOzOYTJPY3uc4/b964Efdg8Im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oWeLhKaf4acPj8G3oqZ02ypgva4uNfuRf3+MW9R+76PzwU+xiFWoRERERETU4EqFqKxEJSKietSQIer+/e/ilVf+G62tl+BLX/LfvIvsEPUElj0YT8cfcIgaVabeiHOxHifU/+rXAxARERERETWo0iEq34lKRET1xw5RFyxYgGXLlunlhG99TVaivvjiDlxxxcVobo6m0pcWTcsvJO9BVVP2k+A0aktP53e3pabzSxgr2676DK34DK23FatciYiIiIiIGhVDVCIiakSuEFWYgalrXWIAIWr8/hv5upT5YSnPtgOdzt8/UQUpJgM/fzu6HN/Ho+QdqzokFfLBqLWfqn8WPyxVbJeq1esxTL8blYiIiIiIqJGFQ9QerJu3BFhY6Wc6IiKiweULUYWEpvayzROiUoIflCIiIiIiotOJL0Tdv+4OzF9zIC6muUqvJyIiqgd2iCrM4DThClAFQ9QQNZ3ffGcqERERERFRY/OFqERERPXMFaKKUhWoCYaoTtGHqe58z5r6T0RERERE1OAYohIRUSPyhahCgtRQgCoYohIREREREZHGEJWIiBpRKETNgyEqERERERERaRKiEhERNRJ5TQ1DVCIiIiIiIqoYCVHHjh2rl4mIiOrd0KFDGKISERERERFR5TBEJSKiRlOJEPX/AZMuAZ7ODk53AAAAAElFTkSuQmCC)

(Nota: En Windows y usando Chrome, pulsando la tecla F12 se nos abre la consola del desarrollador mostrando la última pestaña que hubiera sido usada)
