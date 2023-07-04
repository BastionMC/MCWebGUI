MCWebGUI.Dialog = {};

MCWebGUI.Dialog.DialogContainer = document.createElement("div");
MCWebGUI.Dialog.DialogContainer.id = "dialogContainer";
document.body.appendChild(MCWebGUI.Dialog.DialogContainer);

MCWebGUI.Dialog.AddNewDialog = function (dialogVariable) {
    let newDialog = document.createElement("dialog");
    newDialog.className = "dialogWindow";
    newDialog.innerHTML = `<div class="windowBar"></div><div class="windowPage"></div><div class="windowButtons"></div>`;
    
    let windowBar = newDialog.querySelector("#windowBar");
    let windowPage = newDialog.querySelector("#windowPage");
    let windowButtons = newDialog.querySelector("#windowButtons");

    windowBar.innerHTML = dialogVariable.title;

    let dialogClose = document.createElement("div");
    dialogClose.addEventListener("click", function () {
        newDialog.close();
    });
    windowBar.appendChild(dialogClose);

    switch (dialogVariable.type) {
        case "textOnly":
        case "textWithImage":
        case "imageWithText":
        case "imageOnly":
        case "textWithVideo":
        case "videoWithText":
        case "videoOnly":
        case "textWithInput":
        case "inputWithText":
        case "inputOnly":
        case "customHTML":
            windowPage.innerHTML = dialogVariable.content;
            break;
        default:
            console.error(`Error while trying to add new dialog (${dialogVariable}) to cache: ${dialogVariable.type} is not a valid dialog type. Defaulted to "customHTML".`)
            windowPage.innerHTML = dialogVariable.content;
            break;
    };
}

MCWebGUI.ShowDialog = function (dialogVariable) {
    if (MCWebGUI.Dialog.DialogContainer.querySelector("#" + dialogVariable.toString()) == null) {
        MCWebGUI.Dialog.AddNewDialog(dialogVariable);
    } else {

    };
};