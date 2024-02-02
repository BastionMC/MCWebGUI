MCWebGUI.Element.JSONText = {};

class MCJSONText extends HTMLElement {
    constructor() {
        super();

        const text = this.innerHTML;

        this.innerHTML = "<input></input>";
        this.querySelector("input").disabled = this.getAttribute("disabled") || false;
        this.querySelector("input").placeholder = this.getAttribute("placeholder") || "";
    }
}

MCJSONText.prototype.setText = function (value) {
    this.querySelector("input").value = value || "";
};
MCJSONText.prototype.getText = function () {
    return this.querySelector("input").value || "";
};

customElements.define("mc-json", MCJSONText);