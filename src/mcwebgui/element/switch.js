MCWebGUI.Element.Switch = {}

class MCSwitch extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = "<input type=\"checkbox\"><span class=\"knob\"></span>"
        this.querySelector("input").disabled = this.getAttribute("disabled")
        this.querySelector("input").checked = this.getAttribute("toggled")
    }
}

customElements.define("mc-switch", MCSwitch);