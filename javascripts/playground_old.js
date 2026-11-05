console.log("### PLAYGROUND.JS SE HA CARGADO ###");

(function () {

    let playgroundsInitialized = false;

    function initPlaygrounds() {

        document.querySelectorAll(".playground").forEach(function (playground) {

            if (playground.dataset.initialized === "true") {
                return;
            }

            playground.dataset.initialized = "true";

            const htmlElement =
                playground.querySelector(".playground-html");

            const cssElement =
                playground.querySelector(".playground-css");

            const jsElement =
                playground.querySelector(".playground-js");

            if (!htmlElement || !cssElement || !jsElement) {
                return;
            }

            /* =====================================
               CODEMIRROR
               ===================================== */

            const htmlEditor = CodeMirror.fromTextArea(
                htmlElement,
                {
                    mode: "xml",
                    lineNumbers: true,
                    lineWrapping: true,
                    tabSize: 2,
                    indentUnit: 2
                }
            );

            const cssEditor = CodeMirror.fromTextArea(
                cssElement,
                {
                    mode: "css",
                    lineNumbers: true,
                    lineWrapping: true,
                    tabSize: 2,
                    indentUnit: 2
                }
            );

            const jsEditor = CodeMirror.fromTextArea(
                jsElement,
                {
                    mode: "javascript",
                    lineNumbers: true,
                    lineWrapping: true,
                    tabSize: 2,
                    indentUnit: 2
                }
            );

            /* Guardamos los editores */

            playground._editors = {
                html: htmlEditor,
                css: cssEditor,
                js: jsEditor
            };

            /* =====================================
               BOTONES
               ===================================== */

            const runButton =
                playground.querySelector(".playground-run");

            const resetButton =
                playground.querySelector(".playground-reset");

            const output =
                playground.querySelector(".playground-output");

            /* =====================================
               EJECUTAR
               ===================================== */

            if (runButton) {

                runButton.addEventListener("click", function (event) {

                    event.preventDefault();
                    event.stopPropagation();

                    const htmlCode =
                        htmlEditor.getValue();

                    const cssCode =
                        cssEditor.getValue();

                    const jsCode =
                        jsEditor.getValue();

                    const iframe =
                        document.createElement("iframe");

                    iframe.style.width = "100%";
                    iframe.style.height = "250px";
                    iframe.style.border = "1px solid #ccc";
                    iframe.style.borderRadius = "8px";

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
${jsCode}
<\/script>

</body>

</html>
`;

                    output.innerHTML = `
                        <div class="playground-output-title">
                            Resultado
                        </div>
                    `;

                    output.appendChild(iframe);

                    iframe.contentWindow.document.open();

                    iframe.contentWindow.document.write(
                        documento
                    );

                    iframe.contentWindow.document.close();

                });

            }


            /* =====================================
               REINICIAR
               ===================================== */

            if (resetButton) {

                const initialHTML =
                    htmlEditor.getValue();

                const initialCSS =
                    cssEditor.getValue();

                const initialJS =
                    jsEditor.getValue();

                resetButton.addEventListener(
                    "click",
                    function (event) {

                        event.preventDefault();
                        event.stopPropagation();

                        htmlEditor.setValue(initialHTML);
                        cssEditor.setValue(initialCSS);
                        jsEditor.setValue(initialJS);

                        output.innerHTML = `
                            <div class="playground-output-title">
                                Resultado
                            </div>
                        `;

                    }
                );

            }

        });

    }


    /* =========================================
       CLICS EN LAS PESTAÑAS
       ========================================= */

    document.addEventListener("click", function (event) {

        const tab =
            event.target.closest(".playground-tab");

        if (!tab) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();

        console.log(
            "PESTAÑA PULSADA:",
            tab.dataset.editor
        );

        const playground =
            tab.closest(".playground");

        if (!playground) {
            return;
        }

        const editorName =
            tab.dataset.editor;

        /* Activar pestaña */

        playground
            .querySelectorAll(".playground-tab")
            .forEach(function (otherTab) {

                otherTab.classList.remove("active");

            });

        tab.classList.add("active");


        /* Mostrar editor */

        playground
            .querySelectorAll(".playground-editor")
            .forEach(function (editor) {

                if (
                    editor.dataset.editor === editorName
                ) {

                    editor.classList.remove("hidden");

                }
                else {

                    editor.classList.add("hidden");

                }

            });


        /* Refrescar CodeMirror */

        if (
            playground._editors &&
            playground._editors[editorName]
        ) {

            setTimeout(function () {

                playground
                    ._editors[editorName]
                    .refresh();

            }, 20);

        }

    });


    /* =========================================
       INICIALIZACIÓN
       ========================================= */

    function start() {

        initPlaygrounds();

    }


    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            start
        );

    }
    else {

        start();

    }


    /* =========================================
       MATERIAL FOR MKDOCS
       ========================================= */

    if (typeof document$ !== "undefined") {

        document$.subscribe(function () {

            initPlaygrounds();

        });

    }

})();