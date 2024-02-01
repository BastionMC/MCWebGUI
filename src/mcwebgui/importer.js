function MCWebGUILog (context, contextColor, message) {
    console.log("%cMCWebGUI%c" + context, "padding: 4px; border-radius: 4px; background-color: white; color: black; margin-right: 4px;", "padding: 4px; border-radius: 4px; background-color: " + contextColor + "; color: black;", message)
};

const MCWebGUIImporter = {
    "Desktop": document.querySelector("desktop") !== null
};

let MCWebGUIImporterList = null

await fetch("src/mcwebgui/import.json")
.then(response => response.json())
.then(data => {
    MCWebGUIImporterList = data;
});

if (MCWebGUIImporter.Desktop) {
    MCWebGUILog("Importer", "orange", "Loading in Desktop-associated files.");
};

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

MCWebGUIImporter.ErrorReloads = localStorage.getItem("MWGReloadPageHandler") || 20;

window.onerror = function() {
    if (MCWebGUIImporter.ErrorReloads < 20) {
        MCWebGUILog("Error Handling", "firebrick", "An error ocurred while loading, attempting to reload the page.");
        localStorage.setItem("MWGReloadPageHandler", MCWebGUIImporter.ErrorReloads + 1);
        location.reload();
    } else {
        MCWebGUILog("Error Handling", "firebrick", "Tried to reload page, in hopes of fixing an error, but overstepped reload limit (20).");
        localStorage.setItem("MWGReloadPageHandler", 0);
    };
};
setTimeout(function () {
    window.onerror = null;
}, 500);

localStorage.setItem("MWGReloadPageHandler", 0);