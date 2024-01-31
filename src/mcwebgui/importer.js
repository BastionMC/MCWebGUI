function MCWebGUILog (context, contextColor, message) {
    console.log("%cMCWebGUI%c" + context, "padding: 4px; border-radius: 4px; background-color: white; color: black; margin-right: 4px;", "padding: 4px; border-radius: 4px; background-color: " + contextColor + "; color: black;", message)
};

const MCWebGUIImporter = {
    "Desktop": document.querySelector("desktop") !== null
};

import MCWebGUIImporterList from "./import.json" assert {type: "json"};

// firefox is unsupported haha

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
    let errorReloads = localStorage.getItem("MWGReloadPageHandler") || 0;

    if (errorReloads < 10) {
        MCWebGUILog("Error Handling", "firebrick", "An error ocurred while loading, attempting to reload the page.");
        localStorage.setItem("MWGReloadPageHandler", errorReloads + 1);
        location.reload();
    } else {
        MCWebGUILog("Error Handling", "firebrick", "Tried to reload page, in hopes of fixing an error, but overstepped reload limit (10).");
        localStorage.setItem("MWGReloadPageHandler", 0);
    };
};
setTimeout(function () {
    window.onerror = null;
}, 100);