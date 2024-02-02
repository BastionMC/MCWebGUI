MCWebGUI.Element.Select = {};

class MCSelect extends HTMLElement {
    constructor() {
        super();

        const text = this.innerHTML;

        this.innerHTML = "<mc-button></mc-button>".repeat(4);
    }
}

customElements.define("mc-select", MCSelect);