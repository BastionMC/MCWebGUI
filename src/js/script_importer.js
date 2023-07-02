const scripts = [
    "src/js/stylesheet_importer.js",
    "src/js/mcwebgui/main.js",
    "src/js/mcwebgui/elements/button.js",
    "src/js/mcwebgui/elements/input.js",
    "src/js/mcwebgui/elements/dialogue.js",
    "src/js/mcwebgui/sound.js"
];

document.addEventListener("DOMContentLoaded", function() {
    for (let i=0; i<scripts.length; i++) {
        let script = document.createElement("script");
        script.src = scripts[i];
        document.body.appendChild(script);
    };
});