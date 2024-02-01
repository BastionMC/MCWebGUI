MCWebGUI.Element.Dropdown = {}

class MCDropdown extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = "<input type=\"select\"><span class=\"knob\"></span>"
        this.querySelector("input").disabled = this.getAttribute("disabled")
    }
}

customElements.define("mc-dropdown", MCDropdown);