MCWebGUI.Element.Checkbox = {};

class MCCheckbox extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = "<input type=\"checkbox\">";
        this.querySelector("input").disabled = this.getAttribute("disabled");
        this.querySelector("input").checked = this.getAttribute("checked");
    }
}

customElements.define("mc-checkbox", MCCheckbox);