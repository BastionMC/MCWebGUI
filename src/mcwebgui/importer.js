function MCWebGUILog (context, contextColor, message) {
    console.log("%cMCWebGUI%c" + context, "padding: 4px; border-radius: 4px; background-color: white; color: black; margin-right: 8px;", "padding: 4px; border-radius: 4px; background-color: " + contextColor + "; color: black;", message)
};

const MCWebGUIImporter = {
    "Desktop": document.querySelector("desktop") !== null
};

import MCWebGUIImporterList from "./import.json" assert {type: "json"};

if (MCWebGUIImporter.Desktop) {
    MCWebGUILog("Importer", "orange", "Loading in Desktop-associated files.");
};

document.addEventListener("DOMContentLoaded", function () {
    for (let i=0; i<MCWebGUIImporterList.scripts.length; i++) {
        let script = document.createElement("script");
        script.src = MCWebGUIImporterList.scripts[i];
        script.id = "mcwebgui-script";
        document.body.appendChild(script);
    };

    let stylesheets = document.createElement("style");
    for (let i=0; i<MCWebGUIImporterList.stylesheets.length; i++) {
        stylesheets.textContent += "@import url(" + MCWebGUIImporterList.stylesheets[i] + ");";
    };
    stylesheets.id = "mcwebgui-stylesheets";
    document.head.appendChild(stylesheets);
});

window.onerror = function() {
    MCWebGUILog("Error Handling", "firebrick", "An error ocurred, attempting to reload the page.");
    location.reload();
}