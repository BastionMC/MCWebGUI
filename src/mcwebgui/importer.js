function MCWebGUILog (context, contextColor, message) {
    console.log("%cMCWebGUI%c" + context, "padding: 4px; border-radius: 4px; background-color: white; color: black; margin-right: 8px;", "padding: 4px; border-radius: 4px; background-color: " + contextColor + "; color: black;", message)
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

// Sometimes loading MCWebGUI can go wrong, but simply reloading
// the page seems to fix the issue. Just let this be unless it's
// causing problems, k? - Jae

// To be honest, this might cause flashing lights if the user of
// MCWebGUI screws something up in the first 150 microseconds
// of the document being loaded. Maybe add a temporary cookie to
// avoid refreshing more then a certain ammount, for sample,
// "5" should work. Do this later.

window.onerror = function() {
    let errorReloads = localStorage.getItem("MWGReloadPageHandler") || 0;
    localStorage.setItem("MWGReloadPageHandler", 0);

    if (errorReloads < 5) {
        MCWebGUILog("Error Handling", "firebrick", "An error ocurred while loading, attempting to reload the page.");
        localStorage.setItem("MWGReloadPageHandler", errorReloads + 1);
        location.reload();
    } else {
        MCWebGUILog("Error Handling", "firebrick", "Tried to reload page, in hopes of fixing an error, but overstepped reload limit (5).");
        localStorage.setItem("MWGReloadPageHandler", 0);
    }
};
setTimeout(function () {
    window.onerror = null;
}, 100)

erower