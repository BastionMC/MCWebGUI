MCWebGUI.Element.Slider = {};

MCWebGUI.Element.Slider.SetupElement = function (slider, initialValue) {
    const range = slider.querySelector(".range");
    let isDragging = false;
    let knob = slider.querySelector(".knob");

    let min = parseFloat(slider.getAttribute("min")) || 0;
    let max = parseFloat(slider.getAttribute("max")) || 100;

    function setKnobPosition(value) {
        // this isnt even math anymore this is meth 💀
        knob.style.transform = `translateY(calc(4px * var(--pixel-size))) translateX(calc(((var(--width) * var(--pixel-size)) * ((${value} - ${min}) / (${max} - ${min}))) - (8px * var(--pixel-size)))`;
        range.style.width = `calc((var(--width) * var(--pixel-size)) * ((${value} - ${min}) / (${max} - ${min})))`;
    };

    setKnobPosition(parseFloat(slider.getAttribute("value")) || initialValue);

    slider.addEventListener("mousedown", startSlide);
    knob.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        startSlide(e);
    });

    document.addEventListener("mousemove", function (e) {
        (isDragging) && updateSliderPosition(e.clientX);
    });
    document.addEventListener("mouseup", function () {
        isDragging = false;
    });

    function startSlide(e) {
        e.preventDefault();

        if (slider.hasAttribute("disabled")) {
            return;
        };

        isDragging = true;
        updateSliderPosition(e.clientX);
    };

    function updateSliderPosition(clientX) {
        const position = clientX - slider.getBoundingClientRect().left;
        const percentage = (position / slider.clientWidth) * 100;

        const validPercentage = Math.min(Math.max(percentage, 0), 100);

        const value = Math.round((validPercentage / 100) * (max - min) + min);
        setKnobPosition(value);
        slider.setAttribute("value", value);
    };
}

class MCSlider extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = "<span class=\"background\"></span><span class=\"range\"></span><span class=\"knob\"></span><span class=\"lines\"></span>";
        MCWebGUI.Element.Slider.SetupElement(this, this.getAttribute("value"));

        const max = this.getAttribute("max") || 100;
        const min = this.getAttribute("min") || 0;
        const linesContainer = this.querySelector(".lines");

        if (this.getAttribute("lines") == "true") {
            linesContainer.innerHTML = "<span></span>".repeat(max);
            for (let i=0;i<linesContainer.children.length-1-min;i++) {
                linesContainer.children[i].style.transform = `translateX(calc(((((var(--width) * var(--pixel-size)) / (${max} - ${min})) * ${i+1})) - (0.5px * var(--pixel-size)))`;
            };
            this.removeAttribute("lines")
        } else {
            linesContainer.remove();
        };
    };
};

MCSlider.prototype.setLines = function (lines) {
    const max = this.getAttribute("max") || 100;
    const min = this.getAttribute("min") || 0;

    let linesContainer = document.createElement("span");
    linesContainer.className = "lines";

    if (lines) {
        linesContainer.innerHTML = "<span></span>".repeat(max);
        for (let i=0;i<linesContainer.children.length-1-min;i++) {
            linesContainer.children[i].style.transform = `translateX(calc(((((var(--width) * var(--pixel-size)) / (${max} - ${min})) * ${i+1})) - (0.5px * var(--pixel-size)))`;
        };
            
        this.appendChild(linesContainer);
    } else {
        this.querySelector("span.lines").remove();
    };
};
MCSlider.prototype.getLines = function () {
    return this.querySelector("span.lines") != undefined;
}
MCSlider.prototype.setDisabled = function (disabled) {
    this.setAttribute("disabled") = disabled || false;
};
MCSlider.prototype.getDisabled = function () {
    return this.getAttribute("disabled") || false;
};

customElements.define("mc-slider", MCSlider);