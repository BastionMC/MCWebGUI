let MCWebGUI = {};

function doShit () {
    console.log("green button got pressed lol");
};

document.getElementById("funnyButton").addEventListener("click", function () {
    doShit();
});

MCWebGUI.ButtonObjectToElement = function (buttonObject) {
    let button = document.createElement("mc-button");
    const buttonInfo = buttonObject;

    button.setAttribute("type", buttonInfo.type);
    button.setAttribute("content", buttonInfo.content);
    
    if (buttonInfo.hasOwnProperty("close_dialog")) {
        if (buttonInfo.close_dialog) {
            button.setAttribute("close_dialog", buttonInfo.close_dialog);
        };
    };
    if (buttonInfo.hasOwnProperty("function")) {
        button.addEventListener("click", function () {
            buttonInfo.function();
        });
    };

    return button;
};

MCWebGUI.ButtonArrayToElements = function (buttonArray) {
    let elementButtons = [];
    
    for (let i=0;i<buttonArray.length;i++) {
        elementButtons.push(MCWebGUI.ButtonObjectToElement(buttonArray[i]));                 
    };

    return elementButtons;
};