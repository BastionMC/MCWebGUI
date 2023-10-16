function MCWebGUILog (context, contextColor, message) {
    console.log("%cMCWebGUI%c" + context, "padding: 4px; border-radius: 4px; background-color: white; color: black; margin-right: 8px;", "padding: 4px; border-radius: 4px; background-color: " + contextColor + "; color: black;", message)
};

const MCWebGUIImporter = {
    "Desktop": document.querySelector('desktop') !== null,
    "Scripts": [
        "src/mcwebgui/configurable.js",
        "src/mcwebgui/main.js",
        "src/mcwebgui/element.js",

        "src/mcwebgui/element/button.js",
        "src/mcwebgui/element/input.js"
    ],
    "Stylesheets": [
        "src/mcwebgui/configurable.css",
        "src/mcwebgui/base.css",
        "src/mcwebgui/grid.css",

        "src/mcwebgui/element/button.css",
        "src/mcwebgui/element/input.css"
    ]
};

if (MCWebGUIImporter.Desktop) {
    MCWebGUILog("Importer", "orange", "Switching to Desktop mode!");
};

document.addEventListener("DOMContentLoaded", function() {
    for (let i=0; i<MCWebGUIImporter.Scripts.length; i++) {
        let script = document.createElement("script");
        script.src = MCWebGUIImporter.Scripts[i];
        document.body.appendChild(script);
    };
    let stylesheets = document.createElement("style");
    for (let i=0; i<MCWebGUIImporter.Stylesheets.length; i++) {
        stylesheets.textContent += "@import url(" + MCWebGUIImporter.Stylesheets[i] + ");";
    };
    document.head.appendChild(stylesheets);
});