class McButton extends HTMLElement {
    constructor () {
        super();

        this.addEventListener("click", function () {
            MCWebGUI.SoundHandler.ButtonPress(this);
        });
    };

    connectedCallback () {
        if (this.getAttribute("type") == "green") {
            this.innerHTML = `<div>${this.getAttribute("content").toLowerCase().replace("a","A")}</div>`;
        } else {
            this.innerHTML = `<div>${this.getAttribute("content")}</div>`;
        }
        this.removeAttribute("content");
    }
};
customElements.define("mc-button", McButton);