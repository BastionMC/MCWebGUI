MCWebGUI.Element.Select = {};

class MCSelect extends HTMLElement {
    constructor() {
        super();

        const text = this.innerHTML;

        this.innerHTML = "<select><span class=\"text\"></span></select>";
        let innerSelect = this.querySelector("select");
        innerSelect.disabled = this.getAttribute("disabled");
        // innerSelect.querySelector("span").innerHTML = text || "";
    }
}

customElements.define("mc-select", MCSelect);