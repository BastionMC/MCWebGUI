MCWebGUI.Element.Input = {};

class MCInput extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = "<input></input>";
        this.querySelector("input").disabled = this.getAttribute("disabled");
        this.querySelector("input").placeholder = this.getAttribute("placeholder");
    }
}

customElements.define("mc-input", MCInput);