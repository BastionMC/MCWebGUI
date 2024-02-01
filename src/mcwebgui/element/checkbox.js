MCWebGUI.Element.Checkbox = {};

class MCCheckbox extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = "<input type=\"checkbox\">";
        this.querySelector("input").disabled = this.getAttribute("disabled") || false;
        this.querySelector("input").checked = this.getAttribute("checked") || true;
    }
}

MCCheckbox.prototype.setChecked = function (checked) {
    this.querySelector("input").checked = checked || false;
};
MCCheckbox.prototype.getChecked = function () {
    return this.querySelector("input").checked || false;
};
MCCheckbox.prototype.setDisabled = function (disabled) {
    this.querySelector("input").disabled = disabled || false;
};
MCCheckbox.prototype.getDisabled = function () {
    return this.querySelector("input").disabled || false;
};

customElements.define("mc-checkbox", MCCheckbox);