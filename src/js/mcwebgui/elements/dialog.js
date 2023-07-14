MCWebGUI.Dialog = {};

MCWebGUI.Dialog.DialogContainer = document.createElement("div");
MCWebGUI.Dialog.DialogContainer.id = "dialogContainer";
document.body.appendChild(MCWebGUI.Dialog.DialogContainer);

MCWebGUI.Dialog.AddNewDialog = function (dialogName, dialogVariable) {
    let newDialog = document.createElement("dialog");
    newDialog.className = "dialogWindow";
    newDialog.innerHTML = `<div class="windowBar"></div><div class="windowPage"></div><div class="windowButtons"></div>`;
    
    let windowBar = newDialog.querySelector(".windowBar");
    let windowPage = newDialog.querySelector(".windowPage");
    let windowButtons = newDialog.querySelector(".windowButtons");

    let dialogTitle = document.createElement("div");
    dialogTitle.className = "windowTitle";
    dialogTitle.innerHTML = dialogVariable.title;
    windowBar.appendChild(dialogTitle);

    let dialogClose = document.createElement("div");
    dialogClose.addEventListener("click", function () {
        newDialog.close();
        MCWebGUI.SoundHandler.DialogExit();
    });
    dialogClose.className = "closeWindow";
    windowBar.appendChild(dialogClose);

    switch (dialogVariable.type) {
        case "text_only":
        case "text_image":
        case "image_text":
        case "image_only":
        case "text_video":
        case "video_text":
        case "video_only":
        case "text_input":
        case "input_text":
        case "input_only":
        case "custom_html":
            windowPage.innerHTML = dialogVariable.content;
            break;
        default:
            console.error(`Error while trying to add new dialog (${dialogName}) to cache: "${dialogVariable.type}" is not a valid dialog type. Defaulted to "custom_html".`)
            windowPage.innerHTML = dialogVariable.content;
            break;
    };

    let elementButtons = MCWebGUI.ButtonArrayToElements(dialogVariable.buttons);
    for (let i=0;i<elementButtons.length;i++) {
        if (elementButtons[i].hasAttribute("close_dialog") && elementButtons[i].getAttribute("close_dialog")) {
            elementButtons[i].addEventListener("click",function () {
                newDialog.close();
            });
        };
        windowButtons.appendChild(elementButtons[i]);
    };

    newDialog.id = dialogName;

    MCWebGUI.Dialog.DialogContainer.appendChild(newDialog);
    newDialog.show();
};

MCWebGUI.ShowDialog = function (dialogName, dialogVariable) {
    const dialogCache = MCWebGUI.Dialog.DialogContainer.childNodes;
    let useCached = false;

    for (let i=0;i<dialogCache.length;i++) {
        if (dialogCache[i].id == dialogName) {
            useCached = true;
            break;
        };
    };

    if (!useCached) {
        MCWebGUI.Dialog.AddNewDialog(dialogName, dialogVariable);
    } else {
        for (let i=0;i<dialogCache.length;i++) {
            if (dialogCache[i].id == dialogName) {
                dialogCache[i].show();
            };
        };
    };
};