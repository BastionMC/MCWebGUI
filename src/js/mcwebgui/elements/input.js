class McInput extends HTMLElement {
    constructor () {
        super();

        this.innerHTML = `<input placeholder="${this.getAttribute("placeholder")}"></input>`;
        this.removeAttribute("placeholder");
    };
};
customElements.define("mc-input", McInput);

MCWebGUI.GetInputById = function (id) {
    return document.getElementById(id).firstChild;
};