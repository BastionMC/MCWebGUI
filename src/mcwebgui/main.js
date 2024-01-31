let MCWebGUI = {};

MCWebGUI.Log = function (context, contextColor, message) {
    console.log("%cMCWebGUI%c" + context, "padding: 4px; border-radius: 4px; background-color: white; color: black; margin-right: 4px;", "padding: 4px; border-radius: 4px; background-color: " + contextColor + "; color: black;", message)
};

MCWebGUI.Information = {
    "WindowTitle": document.title
};

MCWebGUI.Information.WindowTitle = document.title;

if (MCWebGUI.Information.WindowTitle == "") {
    MCWebGUI.Information.WindowTitle = "MCWebGUI";
    document.title = MCWebGUI.Information.WindowTitle
    MCWebGUI.Log("Error Handling", "firebrick", "No \"title\" element found, using default of \"MCWebGUI\"");
};

MCWebGUI.GeneratedCSS = document.createElement("style");
MCWebGUI.GeneratedCSS.id = "mcwebgui-generated";
document.head.appendChild(MCWebGUI.GeneratedCSS);