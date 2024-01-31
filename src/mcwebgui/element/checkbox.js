MCWebGUI.Element.Checkbox = {};

class MCCheckbox extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = "<input type=\"checkbox\">";
        this.querySelector("input").disabled = this.getAttribute("disabled") || false;
        this.querySelector("input").checked = this.getAttribute("checked") || true;
    }
}

customElements.define("mc-checkbox", MCCheckbox);