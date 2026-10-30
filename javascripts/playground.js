(function () {

    console.log("### PLAYGROUND.JS CARGADO ###");


    /*
     * =========================================================
     * CREAR PLAYGROUNDS
     * =========================================================
     */

    function createPlaygrounds() {

        const blocks = Array.from(
            document.querySelectorAll("pre code")
        );


        for (let i = 0; i < blocks.length; i++) {

            const code = blocks[i];
            const pre = code.closest("pre");


            if (!pre) {
                continue;
            }


            if (
                pre.dataset.playgroundProcessed === "true"
            ) {
                continue;
            }


            /*
             * -------------------------------------------------
             * IDENTIFICAR EL LENGUAJE
             * -------------------------------------------------
             */

            const classes =
                Array.from(code.classList);


            let language = null;


            if (
                classes.includes("language-html")
            ) {

                language = "html";

            }

            else if (
                classes.includes("language-css")
            ) {

                language = "css";

            }

            else if (
                classes.includes("language-javascript") ||
                classes.includes("language-js")
            ) {

                language = "javascript";

            }


            if (!language) {
                continue;
            }


            /*
             * -------------------------------------------------
             * JAVASCRIPT SOLO
             * -------------------------------------------------
             */

            if (
                language === "javascript"
            ) {

                crearPlayground(
                    pre,
                    "",
                    "",
                    code.textContent,
                    "javascript"
                );

                continue;
            }


            /*
             * -------------------------------------------------
             * HTML
             * -------------------------------------------------
             */

            if (
                language === "html"
            ) {

                const code2 =
                    blocks[i + 1];


                const pre2 =
                    code2
                        ? code2.closest("pre")
                        : null;


                if (!code2 || !pre2) {
                    continue;
                }


                const classes2 =
                    Array.from(
                        code2.classList
                    );


                /*
                 * =============================================
                 * HTML + CSS + JAVASCRIPT
                 * =============================================
                 */

                if (
                    classes2.includes("language-css")
                ) {

                    const code3 =
                        blocks[i + 2];


                    const pre3 =
                        code3
                            ? code3.closest("pre")
                            : null;


                    if (!code3 || !pre3) {
                        continue;
                    }


                    const classes3 =
                        Array.from(
                            code3.classList
                        );


                    const esJS =
                        classes3.includes(
                            "language-javascript"
                        ) ||
                        classes3.includes(
                            "language-js"
                        );


                    if (esJS) {

                        crearPlayground(
                            pre,
                            code.textContent,
                            code2.textContent,
                            code3.textContent,
                            "html-css-js"
                        );


                        pre.dataset.playgroundProcessed =
                            "true";


                        pre2.dataset.playgroundProcessed =
                            "true";


                        pre3.dataset.playgroundProcessed =
                            "true";


                        pre2.remove();
                        pre3.remove();


                        continue;
                    }

                }


                /*
                 * =============================================
                 * HTML + JAVASCRIPT
                 * =============================================
                 */

                const esJS =
                    classes2.includes(
                        "language-javascript"
                    ) ||
                    classes2.includes(
                        "language-js"
                    );


                if (esJS) {

                    crearPlayground(
                        pre,
                        code.textContent,
                        "",
                        code2.textContent,
                        "html-js"
                    );


                    pre.dataset.playgroundProcessed =
                        "true";


                    pre2.dataset.playgroundProcessed =
                        "true";


                    pre2.remove();


                    continue;
                }

            }

        }

    }


    /*
     * =========================================================
     * CREAR PLAYGROUND
     * =========================================================
     */

    function crearPlayground(
        pre,
        html,
        css,
        js,
        tipo
    ) {

        if (
            pre.dataset.playgroundProcessed === "true"
        ) {
            return;
        }


        pre.dataset.playgroundProcessed =
            "true";


        const mostrarHTML =
            tipo === "html-js" ||
            tipo === "html-css-js";


        const mostrarCSS =
            tipo === "html-css-js";


        /*
         * -------------------------------------------------
         * PESTAÑAS
         * -------------------------------------------------
         */

        let tabs = "";


        if (mostrarHTML) {

            tabs += `
                <button
                    class="playground-tab active"
                    data-editor="html"
                    type="button">
                    HTML
                </button>
            `;

        }


        if (mostrarCSS) {

            tabs += `
                <button
                    class="playground-tab"
                    data-editor="css"
                    type="button">
                    CSS
                </button>
            `;

        }


        tabs += `
            <button
                class="playground-tab ${mostrarHTML ? "" : "active"}"
                data-editor="js"
                type="button">
                JavaScript
            </button>
        `;


        /*
         * -------------------------------------------------
         * EDITORES
         * -------------------------------------------------
         */

        let editors = "";


        if (mostrarHTML) {

            editors += `
                <div
                    class="playground-editor"
                    data-editor="html">

                    <textarea
                        class="playground-html"></textarea>

                </div>
            `;

        }


        if (mostrarCSS) {

            editors += `
                <div
                    class="playground-editor hidden"
                    data-editor="css">

                    <textarea
                        class="playground-css"></textarea>

                </div>
            `;

        }


        editors += `
            <div
                class="playground-editor ${mostrarHTML ? "hidden" : ""}"
                data-editor="js">

                <textarea
                    class="playground-js"></textarea>

            </div>
        `;


        /*
         * -------------------------------------------------
         * PLAYGROUND
         * -------------------------------------------------
         */

        const playground =
            document.createElement("div");


        playground.className =
            "playground";


        playground.innerHTML = `

            <div class="playground-header">

                <div class="playground-title">
                    🧪 Ejemplo interactivo
                </div>


                <div class="playground-actions">

                    <button
                        class="playground-reset"
                        type="button">
                        ↺ Reiniciar
                    </button>


                    <button
                        class="playground-run"
                        type="button">
                        ▶ Ejecutar
                    </button>

                </div>

            </div>


            <div class="playground-tabs">

                ${tabs}

            </div>


            <div class="playground-editors">

                ${editors}

            </div>


            <div class="playground-output">

                <div class="playground-output-title">
                    Resultado
                </div>

            </div>

        `;


        /*
         * -------------------------------------------------
         * INSERTAR
         * -------------------------------------------------
         */

        pre.parentNode.insertBefore(
            playground,
            pre
        );


        /*
         * -------------------------------------------------
         * TEXTAREAS
         * -------------------------------------------------
         */

        const htmlElement =
            playground.querySelector(
                ".playground-html"
            );


        const cssElement =
            playground.querySelector(
                ".playground-css"
            );


        const jsElement =
            playground.querySelector(
                ".playground-js"
            );


        if (htmlElement) {

            htmlElement.value =
                html;

        }


        if (cssElement) {

            cssElement.value =
                css;

        }


        if (jsElement) {

            jsElement.value =
                js;

        }


        /*
         * -------------------------------------------------
         * ELIMINAR BLOQUE ORIGINAL
         * -------------------------------------------------
         */

        pre.remove();


        /*
         * -------------------------------------------------
         * CODEMIRROR
         * -------------------------------------------------
         */

        const editorsMap = {};


        if (htmlElement) {

            editorsMap.html =
                CodeMirror.fromTextArea(
                    htmlElement,
                    {
                        mode: "xml",
                        lineNumbers: true,
                        lineWrapping: true,
                        tabSize: 2,
                        indentUnit: 2
                    }
                );

        }


        if (cssElement) {

            editorsMap.css =
                CodeMirror.fromTextArea(
                    cssElement,
                    {
                        mode: "css",
                        lineNumbers: true,
                        lineWrapping: true,
                        tabSize: 2,
                        indentUnit: 2
                    }
                );

        }


        if (jsElement) {

            editorsMap.js =
                CodeMirror.fromTextArea(
                    jsElement,
                    {
                        mode: "javascript",
                        lineNumbers: true,
                        lineWrapping: true,
                        tabSize: 2,
                        indentUnit: 2
                    }
                );

        }


        playground._editors =
            editorsMap;


        /*
         * -------------------------------------------------
         * ESTADO INICIAL
         * -------------------------------------------------
         */

        const initialHTML = html;
        const initialCSS = css;
        const initialJS = js;


        const runButton =
            playground.querySelector(
                ".playground-run"
            );


        const resetButton =
            playground.querySelector(
                ".playground-reset"
            );


        const output =
            playground.querySelector(
                ".playground-output"
            );


        /*
         * =================================================
         * EJECUTAR
         * =================================================
         */

        runButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const htmlCode =
                    editorsMap.html
                        ? editorsMap.html.getValue()
                        : "";


                const cssCode =
                    editorsMap.css
                        ? editorsMap.css.getValue()
                        : "";


                const jsCode =
                    editorsMap.js
                        ? editorsMap.js.getValue()
                        : "";


                /*
                 * -------------------------------------------------
                 * CREAR IFRAME
                 * -------------------------------------------------
                 */

                const iframe =
                    document.createElement(
                        "iframe"
                    );


                iframe.style.width =
                    "100%";


                /*
                 * Para JavaScript puro no necesitamos
                 * mostrar visualmente el iframe.
                 */

                if (tipo === "javascript") {

                    iframe.style.display =
                        "none";

                }

                else {

                    iframe.style.height =
                        "auto";

                    iframe.style.minHeight =
                        "40px";

                    iframe.style.border =
                        "1px solid #ccc";

                    iframe.style.borderRadius =
                        "8px";

                }


                /*
                 * -------------------------------------------------
                 * CREAR CONSOLA VISUAL
                 * -------------------------------------------------
                 */

                output.innerHTML = "";


                if (tipo !== "javascript") {

                    output.innerHTML = `

                        <div class="playground-output-title">
                            Resultado
                        </div>

                    `;

                }


                /*
                 * -------------------------------------------------
                 * AÑADIR IFRAME AL DOM
                 * -------------------------------------------------
                 *
                 * IMPORTANTE:
                 * Lo añadimos ANTES de acceder a contentWindow.
                 */

                output.appendChild(
                    iframe
                );


                /*
                 * -------------------------------------------------
                 * CONSOLA
                 * -------------------------------------------------
                 */

                const consoleContainer =
                    document.createElement(
                        "div"
                    );


                consoleContainer.className =
                    "playground-console";


                consoleContainer.innerHTML = `

                    <div class="playground-console-title">
                        Consola
                    </div>


                    <div class="playground-console-output">

                        <div class="playground-console-empty">
                            La salida de console.log() aparecerá aquí.
                        </div>

                    </div>

                `;


                output.appendChild(
                    consoleContainer
                );


                const consoleOutput =
                    consoleContainer.querySelector(
                        ".playground-console-output"
                    );


                /*
                 * -------------------------------------------------
                 * RECIBIR MENSAJES DEL IFRAME
                 * -------------------------------------------------
                 */

                function recibirConsola(
                    event
                ) {

                    if (
                        event.source !==
                        iframe.contentWindow
                    ) {

                        return;

                    }


                    if (
                        !event.data ||
                        event.data.tipo !==
                        "playground-console"
                    ) {

                        return;

                    }


                    const mensaje =
                        document.createElement(
                            "div"
                        );


                    mensaje.className =
                        "playground-console-line";


                    if (
                        event.data.nivel ===
                        "warn"
                    ) {

                        mensaje.classList.add(
                            "warn"
                        );

                    }


                    if (
                        event.data.nivel ===
                        "error"
                    ) {

                        mensaje.classList.add(
                            "error"
                        );

                    }


                    mensaje.textContent =
                        event.data.mensaje;


                    const vacio =
                        consoleOutput.querySelector(
                            ".playground-console-empty"
                        );


                    if (vacio) {

                        vacio.remove();

                    }


                    consoleOutput.appendChild(
                        mensaje
                    );


                    consoleOutput.scrollTop =
                        consoleOutput.scrollHeight;

                }


                window.addEventListener(
                    "message",
                    recibirConsola
                );


                /*
                 * -------------------------------------------------
                 * DOCUMENTO DEL IFRAME
                 * -------------------------------------------------
                 */

                const documento = `

<!DOCTYPE html>

<html>

<head>

<style>

${cssCode}

</style>

</head>

<body>

${htmlCode}

<script>

/*
 * =================================================
 * CAPTURAR CONSOLA
 * =================================================
 */

(function () {


    function enviarConsola(
        tipo,
        argumentos
    ) {

        const valores =
            argumentos.map(
                function (valor) {

                    if (
                        typeof valor === "object" &&
                        valor !== null
                    ) {

                        try {

                            return JSON.stringify(
                                valor,
                                null,
                                2
                            );

                        }
                        catch (e) {

                            return String(
                                valor
                            );

                        }

                    }


                    return String(
                        valor
                    );

                }
            );


        window.parent.postMessage(
            {
                tipo:
                    "playground-console",

                nivel:
                    tipo,

                mensaje:
                    valores.join(" ")

            },
            "*"
        );

    }


    /*
     * Guardar funciones originales
     */

    const consoleOriginal = {

        log:
            console.log,

        warn:
            console.warn,

        error:
            console.error

    };


    /*
     * console.log()
     */

    console.log =
        function () {

            consoleOriginal.log.apply(
                console,
                arguments
            );


            enviarConsola(
                "log",
                Array.from(arguments)
            );

        };


    /*
     * console.warn()
     */

    console.warn =
        function () {

            consoleOriginal.warn.apply(
                console,
                arguments
            );


            enviarConsola(
                "warn",
                Array.from(arguments)
            );

        };


    /*
     * console.error()
     */

    console.error =
        function () {

            consoleOriginal.error.apply(
                console,
                arguments
            );


            enviarConsola(
                "error",
                Array.from(arguments)
            );

        };


    /*
     * -------------------------------------------------
     * CAPTURAR ERRORES
     * -------------------------------------------------
     */

    window.addEventListener(
        "error",
        function (event) {

            window.parent.postMessage(
                {
                    tipo:
                        "playground-console",

                    nivel:
                        "error",

                    mensaje:
                        "Error: " +
                        event.message

                },
                "*"
            );

        }
    );


})();


/*
 * =================================================
 * CÓDIGO DEL ALUMNO
 * =================================================
 */

${jsCode}

<\/script>

</body>

</html>

`;


                /*
                 * -------------------------------------------------
                 * EJECUTAR DOCUMENTO
                 * -------------------------------------------------
                 */

                iframe.contentWindow.document.open();


                iframe.contentWindow.document.write(
                    documento
                );


                iframe.contentWindow.document.close();

            }
        );


        /*
         * =========================================================
         * REINICIAR
         * =========================================================
         */

        resetButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                if (editorsMap.html) {

                    editorsMap.html.setValue(
                        initialHTML
                    );

                }


                if (editorsMap.css) {

                    editorsMap.css.setValue(
                        initialCSS
                    );

                }


                if (editorsMap.js) {

                    editorsMap.js.setValue(
                        initialJS
                    );

                }


                output.innerHTML = `

                    <div class="playground-output-title">
                        Resultado
                    </div>

                `;

            }
        );

    }


    /*
     * =========================================================
     * PESTAÑAS
     * =========================================================
     */

    document.addEventListener(
        "click",
        function (event) {

            const tab =
                event.target.closest(
                    ".playground-tab"
                );


            if (!tab) {
                return;
            }


            const playground =
                tab.closest(
                    ".playground"
                );


            if (!playground) {
                return;
            }


            const editorName =
                tab.dataset.editor;


            /*
             * Quitar active
             */

            playground
                .querySelectorAll(
                    ".playground-tab"
                )
                .forEach(
                    function (otherTab) {

                        otherTab.classList.remove(
                            "active"
                        );

                    }
                );


            /*
             * Activar pestaña
             */

            tab.classList.add(
                "active"
            );


            /*
             * Mostrar editor

             */

            playground
                .querySelectorAll(
                    ".playground-editor"
                )
                .forEach(
                    function (editor) {

                        if (
                            editor.dataset.editor ===
                            editorName
                        ) {

                            editor.classList.remove(
                                "hidden"
                            );

                        }

                        else {

                            editor.classList.add(
                                "hidden"
                            );

                        }

                    }
                );


            /*
             * Refrescar CodeMirror
             */

            if (
                playground._editors &&
                playground._editors[editorName]
            ) {

                setTimeout(
                    function () {

                        playground
                            ._editors[editorName]
                            .refresh();

                    },
                    20
                );

            }

        }
    );


    /*
     * =========================================================
     * INICIALIZACIÓN
     * =========================================================
     */

    function start() {

        createPlaygrounds();

    }


    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            start
        );

    }

    else {

        start();

    }


    /*
     * =========================================================
     * MATERIAL
     * =========================================================
     */

    if (
        typeof document$ !== "undefined"
    ) {

        document$.subscribe(
            function () {

                createPlaygrounds();

            }
        );

    }

})();