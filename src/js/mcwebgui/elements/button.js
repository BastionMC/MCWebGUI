class McButton extends HTMLElement {
    constructor () {
        super();

        this.addEventListener("click", function () {
            MCWebGUI.SoundHandler.ButtonPress(this);
        });
    };

    connectedCallback () {
        this.innerHTML = `<div>${this.getAttribute("content")}</div>`;
        this.removeAttribute("content");
    }
};
customElements.define("mc-button", McButton);

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
    if (buttonInfo.hasOwnProperty("tall")) {
        if (buttonInfo.close_dialog) {
            button.setAttribute("tall", buttonInfo.close_dialog);
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