MCWebGUI.Element.Input = {};

class MCInput extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = "<input></input>";
        this.querySelector("input").disabled = this.getAttribute("disabled") || false;
        this.querySelector("input").placeholder = this.getAttribute("placeholder") || "";
    }
}

MCInput.prototype.setValue = function (value) {
    this.querySelector("input").value = value || "";
};
MCInput.prototype.getValue = function () {
    return this.querySelector("input").value || "";
};
MCInput.prototype.setPlaceholder = function (placeholder) {
    this.querySelector("input").placeholder = placeholder || "";
};
MCInput.prototype.getPlaceholder = function () {
    return this.querySelector("input").placeholder || "";
};
MCInput.prototype.setDisabled = function (disabled) {
    this.querySelector("input").disabled = disabled || false;
};
MCInput.prototype.getDisabled = function () {
    return this.querySelector("input").disabled || false;
};

customElements.define("mc-input", MCInput);