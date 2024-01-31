MCWebGUI.Element.Switch = {};

class MCSwitch extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = "<input type=\"checkbox\"><span class=\"knob\"></span>";
        this.querySelector("input").disabled = this.getAttribute("disabled") || false;
        this.querySelector("input").checked = this.getAttribute("toggled") || false;
    }
}

customElements.define("mc-switch", MCSwitch);