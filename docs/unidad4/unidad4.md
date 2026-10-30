# UD4. Asincronía en Javascript.

## 1. Introducción a la asincronía

### 1.1. Ejecución síncrona y asíncrona

JavaScript ejecuta normalmente las instrucciones de un programa de forma secuencial: una instrucción comienza después de que haya terminado la anterior. Este comportamiento se denomina ejecución síncrona.

Sin embargo, algunas operaciones pueden tardar cierto tiempo en completarse, como consultar una API, descargar información de un servidor o esperar un temporizador. Si JavaScript tuviera que detener la ejecución del programa hasta que cada una de estas operaciones terminara, la aplicación podría quedarse bloqueada.

Para evitarlo, JavaScript dispone de mecanismos que permiten gestionar estas operaciones de **forma asíncrona**, continuando con otras tareas mientras espera sus resultados.

### 1.2. Soluciones para asincronía

En javascript principalmente existen 3 técnicas basadas para la asincronía:
1. Callbacks
2. Promises
3. Async/Await

Generalmente son usados en todas aquellas funciones que conlleven cierto tiempo de ejecución y no queremos bloquear el programa como pueden ser:

- Acceso a ficheros. 
- Operaciones de red.
- Acceso a bases de datos.
- Carga de imágenes pesadas.
- Operaciones matemáticas complejas.
- Etc.

## 2. Callbacks
Los callbacks es una técnica que se utiliza en muchos lenguajes de programación, y podemos definirlos como:

!!! Definición 

    **Función callback:** Son funciones que se pasan como parámetros de otras funciones y que se “llaman” dentro de estas cuando una determinada operación ha terminado.


```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
</head>
<body>
</body>
</html>
```
```javascript

    function procesarDatos(callback) 
    {
        console.log("Procesando datos...");
        console.log("Inicio");

        setTimeout(() => {
            let datoProcesado = 666;  //Simulo un dato que ha tardado en obtenerse.
            console.log("Ya hemos terminado, y llamo al callback");
            callback(datoProcesado);  //El callback puede (o no) recivir valores 
                                      //como argumento.
        }, 2000);
    }

    function callback(resultado)
    {
        console.log(`Este es el resultado obtenido: ${resultado}`)
    }

    procesarDatos(callback);
    
```