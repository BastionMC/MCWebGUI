let MCWebGUI = {};

MCWebGUI.LogStyle = {};
MCWebGUI.LogStyle.Chip = `
    padding: 4px;
    padding-left: 8px;
    padding-right: 8px;
    color: black;
    margin-right: 4px;
    border-style: solid;
    border-color: #00000064;
    border-width: 0px;
    border-bottom-width: 4px;
    margin-bottom: 8px;
`;
MCWebGUI.LogStyle.Text = `
    margin-top: 12px;
    margin-left: 8px;
`;

MCWebGUI.Log = function (context, contextColor, message) {
    console.log("%cMCWebGUI%c" + context + "%c" + message, MCWebGUI.LogStyle.Chip + "background-color: white", MCWebGUI.LogStyle.Chip + "background-color: " + contextColor, MCWebGUI.LogStyle.Text);
};
MCWebGUI.Error = function (context, message) {
    console.error("%cMCWebGUI%c" + context + "%c" + message, MCWebGUI.LogStyle.Chip + "background-color: white", MCWebGUI.LogStyle.Chip + "background-color: #ca3636", MCWebGUI.LogStyle.Text);
};
MCWebGUI.Warn = function (context, message) {
    console.warn("%cMCWebGUI%c" + context + "%c" + message, MCWebGUI.LogStyle.Chip + "background-color: white", MCWebGUI.LogStyle.Chip + "background-color: orange", MCWebGUI.LogStyle.Text);
};

if (document.title == "") {
    document.title = "MCWebGUI Document";
};

MCWebGUI.GeneratedCSS = document.createElement("style");
MCWebGUI.GeneratedCSS.id = "mcwebgui-generated";

MCWebGUI.ConfiguredCSS = document.createElement("style");
MCWebGUI.ConfiguredCSS.id = "mcwebgui-configured"

document.head.appendChild(MCWebGUI.GeneratedCSS);
document.head.appendChild(MCWebGUI.ConfiguredCSS);
 
if (window.location.toString().startsWith("https://mc-web-gui.vercel.app")) {
    MCWebGUI.Log("Acknowledgement", "pink", "Hello! This is \"mc-web-gui.vercel.app\". We just want to make something clear - this website is NOT hosted by us. It is hosted by @wulian233 on GitHub as a fork of MCWebGUI. We don't have anything against it, but we just want to put this here if someone mistakes this site for legit because of the URL.")
};