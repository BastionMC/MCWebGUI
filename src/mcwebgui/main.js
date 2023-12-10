let MCWebGUI = {};

MCWebGUI.Information = {
    "WindowTitle": document.title
};

MCWebGUI.Information.WindowTitle = document.title;

if (MCWebGUI.Information.WindowTitle == "") {
    MCWebGUI.Information.WindowTitle = "MCWebGUI";
    document.title = MCWebGUI.Information.WindowTitle
    MCWebGUILog("Error Handling", "firebrick", "No \"title\" element found, using default of \"MCWebGUI\"");
};