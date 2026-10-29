# UD4 Asincronía en Javascript.

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


## 2. Callbacks
Los callbacks es una técnica que se utiliza en muchos lenguajes de programación. 

La definición más básica y simple de qué es una callback (función callback) es:

*Son funciones que se pasan como parámetros de otras funciones y que se “llaman” dentro de estas cuando una determinada operación ha terminado.*


