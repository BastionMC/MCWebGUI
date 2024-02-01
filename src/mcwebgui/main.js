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

MCWebGUI.ConfiguredCSS = document.createElement("style");
MCWebGUI.ConfiguredCSS.id = "mcwebgui-configured"

document.head.appendChild(MCWebGUI.GeneratedCSS);
document.head.appendChild(MCWebGUI.ConfiguredCSS);

if (window.location.toString().startsWith("https://mc-web-gui.vercel.app")) {
    MCWebGUI.Log("Acknowledgement", "pink", "Hello! This is \"mc-web-gui.vercel.app\". We just want to make something clear - this website is NOT hosted by us. It is hosted by @wulian233 on GitHub as a fork of MCWebGUI. We don't have anything against it, but we just want to put this here if someone mistakes this site for legit because of the URL.")
}