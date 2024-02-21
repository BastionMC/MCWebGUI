MCWebGUI.Element.Button = {};

const colors = ["green", "red", "purple", "dark", "bland"];

MCWebGUI.Element.Button.GenerateCSS = function () {
    for (let i=0;i<colors.length;i++) {
        MCWebGUI.GeneratedCSS.textContent += `mc-button[color|="${colors[i]}"]{--normal:url("../../../assets/button/${colors[i]}.png");--hover:url("../../../assets/button/${colors[i]}_hover.png");--active:url("../../../assets/button/${colors[i]}_active.png");}`
    };
};

MCWebGUI.Element.Button.GenerateCSS();

class MCButton extends HTMLElement {
    constructor() {
        super();

        const text = this.innerHTML;

        this.innerHTML = "<button><span class=\"text\"></span></button>";
        let innerButton = this.querySelector("button");
        innerButton.disabled = this.getAttribute("disabled") || false;
        innerButton.querySelector("span.text").innerHTML = text || "";
    };
};

MCButton.prototype.setTextContent = function (text) {
    this.querySelector("button > span.text").textContent = text || this.querySelector("button > span.text").textContent;
};
MCButton.prototype.getTextContent = function () {
    return this.querySelector("button > span.text").textContent || "";
};
MCButton.prototype.setInnerHTML = function (html) {
    this.querySelector("button > span.text").innerHTML = html || this.querySelector("button > span.text").innerHTML;
};
MCButton.prototype.getInnerHTML = function () {
    return this.querySelector("button > span.text").innerHTML || "";
};
MCButton.prototype.setDisabled = function (disabled) {
    this.querySelector("button").disabled = disabled || false;
};
MCButton.prototype.getDisabled = function () {
    return this.querySelector("button").disabled || false;
};

MCButton.prototype.setColor = function (color) {
    if (colors.includes(color)) {
        this.setAttribute("color", color);
    } else if (color == "default") {
        this.removeAttribute("color");
    } else {
        MCWebGUI.Error("Error", `Tried to change button color, but recieved invalid color id of "${color}".
You can read the documentation here, if you want to look at the list of all valid button colors:
https://bastionmc.github.io/redirect/#XXXXXX/ (Link doesn't work yet, as Bookshelf isn't done.)`);
    };
};
MCButton.prototype.getColor = function () {
    return this.getAttribute("color") || "default";
};
MCButton.prototype.setTall = function (tall) {
    this.setAttribute("color", tall);
};
MCButton.prototype.getTall = function () {
    return this.getAttribute("tall") || false;
};

customElements.define("mc-button", MCButton);