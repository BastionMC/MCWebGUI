MCWebGUI.Element.Input = {}

class MCInput extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = "<input></input><span class=\"nine-grid\"></span>";
        this.querySelector("input").disabled = this.getAttribute("disabled");
        this.querySelector("input").placeholder = this.getAttribute("placeholder");
        this.getElementsByClassName("nine-grid")[0].innerHTML = "<span></span>".repeat(9);
    }
}

customElements.define("mc-input", MCInput);