class McBorder extends HTMLElement {
    constructor () {
        super();

        if (this.hasAttribute("title")) {
            this.innerHTML = `<div><div class="title">${this.getAttribute("title")}</div>${this.innerHTML}<div class="bottom"></div></div>`;
            this.removeAttribute("title");
        } else {
            this.innerHTML = `<div><div class="top"></div>${this.innerHTML}<div class="bottom"></div></div>`;
        };
    };
};
customElements.define("mc-border", McBorder);