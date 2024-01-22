MCWebGUI.Element.Button = {}

MCWebGUI.Element.Button.GenerateCSS = function () {
    const colors = ["bland", "green", "red", "purple", "dark"];

    for (let i=0;i<colors.length;i++) {
        MCWebGUI.GeneratedCSS.textContent += `mc-button[color|="${colors[i]}"]{--normal:url("../../../assets/button/${colors[i]}.png");--hover:url("../../../assets/button/${colors[i]}_hover.png");--active:url("../../../assets/button/${colors[i]}_active.png");}`
    };
    
    MCWebGUI.Log("Elements › Button", "gray", "Generated Button Color CSS.");
};

MCWebGUI.Element.Button.GenerateCSS();

class MCButton extends HTMLElement {
    constructor() {
        super();

        const text = this.innerHTML;

        this.innerHTML = "<button><span class=\"text\"></span></button>";
        let innerButton = this.querySelector("button");
        innerButton.disabled = this.getAttribute("disabled");
        innerButton.querySelector(".text").innerHTML = text;
    }
}

customElements.define("mc-button", MCButton);