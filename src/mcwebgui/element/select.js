// THIS JAVASCRIPT IS *ALL* TEMPORARY!!! FIX THE CODE LATER JAE

MCWebGUI.Element.Select = {};

class MCSelect extends HTMLElement {
    constructor() {
        super();

        const text = this.innerHTML;
        this.innerHTML = "<mc-button>Text</mc-button>".repeat(4);
        let innerButtons = this.querySelectorAll("mc-button > button");

        for (let i=0;i<innerButtons.length;i++) {
            innerButtons[i].disabled = this.getAttribute("disabled") || false;
            
            const line = document.createElement("span");
            line.className = "line";
            innerButtons[i].appendChild(line);
            
            innerButtons[i].addEventListener("click", function () {
                for (let j=0;j<innerButtons.length;j++) {
                    innerButtons[j].id = "";
                }
                innerButtons[i].id = "selected";
            });
        }
    }
}

customElements.define("mc-select", MCSelect);