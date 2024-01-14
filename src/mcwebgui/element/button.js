MCWebGUI.Log("Elements › Button", "gray", "Generated Button Color CSS.");

MCWebGUI.Element.Button = {}

class MCButton extends HTMLElement {
    constructor() {
        super();

        const text = this.innerHTML;

        this.innerHTML = "<button><span class=\"text\"></span><span class=\"nine-grid\"></span></button>";
        let innerButton = this.querySelector("button");
        innerButton.disabled = this.getAttribute("disabled");
        innerButton.getElementsByClassName("nine-grid")[0].innerHTML = "<span></span>".repeat(9);
        innerButton.getElementsByClassName("text")[0].innerHTML = text;
    }
}

customElements.define("mc-button", MCButton);