/* MCWebGUI.Element.Switch = {}

class MCSwitch extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = "<input type=\"checkbox\"><span class=\"knob\"></span>"
        this.querySelector("input").disabled = this.getAttribute("disabled")
    }

    connectedCallback() {
        console.log("Custom element added to page.");
    }

    disconnectedCallback() {
        console.log("Custom element removed from page.");
    }

    adoptedCallback() {
        console.log("Custom element moved to new page.");
    }

    attributeChangedCallback(name, oldValue, newValue) {

        this.getAttribute("disabled")

        console.log(`Attribute ${name} has changed.`);
    }
}

customElements.define("mc-switch", MCSwitch); 



TEMPORARY!!!!!!!!!




*/