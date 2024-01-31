let MCWebGUI = {};

MCWebGUI.Log = function (context, contextColor, message) {
    console.log("%cMCWebGUI%c" + context, "padding: 4px; border-radius: 4px; background-color: white; color: black; margin-right: 4px;", "padding: 4px; border-radius: 4px; background-color: " + contextColor + "; color: black;", message);
};

if (document.title == "") {
    document.title = "MCWebGUI Document";
    MCWebGUI.Log("Error Handling", "firebrick", "No \"title\" element found, using default of \"" + document.title + "\"");
};

MCWebGUI.GeneratedCSS = document.createElement("style");
MCWebGUI.GeneratedCSS.id = "mcwebgui-generated";
document.head.appendChild(MCWebGUI.GeneratedCSS);