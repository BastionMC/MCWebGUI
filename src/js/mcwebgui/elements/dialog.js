MCWebGUI.Dialog = {};

MCWebGUI.Dialog.DialogContainer = document.createElement("div");
MCWebGUI.Dialog.DialogContainer.id = "dialogContainer";
document.body.appendChild(MCWebGUI.Dialog.DialogContainer);

MCWebGUI.Dialog.Types = [
    "textOnly",
    "textWithImage",
    "imageWithText",
    "imageOnly",
    "textWithVideo",
    "videoWithText",
    "videoOnly",
    "textWithInput",
    "inputWithText",
    "inputOnly",
    "customHTML"
];

MCWebGUI.Dialog.AddNewDialog = function () {
    let newDialog = document.createElement("dialog");
    newDialog.className = "dialogWindow";

    let newDialogWindowBar = document.createElement("div");
    newDialogWindowBar.className = "windowBar";
    newDialog.appendChild(newDialogWindowBar);
}

MCWebGUI.ShowDialog = function (dialogVariable) {
    if (MCWebGUI.Dialog.DialogContainer.querySelector("#" + dialogVariable.toString()) == null) {
        MCWebGUI.Dialog.AddNewDialog(dialogVariable);
    } else {

    };
};