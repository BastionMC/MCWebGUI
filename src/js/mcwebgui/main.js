let MCWebGUI = {};

function doShit () {
    console.log("green button got pressed lol")
};

document.getElementById("funnyButton").addEventListener("click", function () {
    doShit();
});

MCWebGUI.ButtonArrayToElements = function (buttonArray) {
    let elementButtons = [];
    
    for (let i=0;i<buttonArray.length;i++) {
        let button = document.createElement("mc-button");
        const buttonInfo = buttonArray[i];

        button.setAttribute("type", buttonInfo.type);
        button.setAttribute("content", buttonInfo.content);
        
        if (buttonInfo.hasOwnProperty("willCloseDialouge")) { if (buttonInfo.willCloseDialouge) {
            button.innerHTML = "closeDialouge";
        };};
        if (buttonInfo.hasOwnProperty("function")) {
            button.addEventListener("click", function () {
                buttonInfo.function();
            });
        };

        elementButtons.push(button);
    };

    return elementButtons;
};