MCWebGUI.Element.Switch = {};

class MCSwitch extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = "<input type=\"checkbox\"><span class=\"knob\"></span>";
        this.querySelector("input").disabled = this.getAttribute("disabled") || false;
        this.querySelector("input").checked = this.getAttribute("toggled") || false;
    }
}

MCSwitch.prototype.setSwitched = function (checked) {
    this.querySelector("input").checked = checked || false;
};
MCSwitch.prototype.getSwitched = function () {
    return this.querySelector("input").checked || false;
};
MCSwitch.prototype.setDisabled = function (disabled) {
    this.querySelector("input").disabled = disabled || false;
};
MCSwitch.prototype.getDisabled = function () {
    return this.querySelector("input").disabled || false;
};

customElements.define("mc-switch", MCSwitch);