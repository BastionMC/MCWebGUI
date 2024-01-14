function setupSlider(slider, knob, initialValue) {
    const greenBackground = slider.querySelector(".range");
    let isDragging = false;

    const min = parseFloat(slider.getAttribute("min")) || 0;
    const max = parseFloat(slider.getAttribute("max")) || 100;

    function setKnobPosition(value) {

        /* This is the longest line of JavaScript that I have ever written, even though the majority is CSS. */
        knob.style.transform = `translateY(calc(4px * var(--pixel-size))) translateX(calc(calc(calc(var(--width) * var(--pixel-size)) * calc(calc(${value} - ${min}) / calc(${max} - ${min}))) - calc(8px * var(--pixel-size)))`;
        greenBackground.style.width = `calc(calc(calc(var(--width) * var(--pixel-size)) * calc(calc(${value} - ${min}) / calc(${max} - ${min}))) - calc(8px * var(--pixel-size))`;
    }

    setKnobPosition(parseFloat(slider.getAttribute("value")) || initialValue);

    slider.addEventListener("mousedown", startSlide);
    knob.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        startSlide(e);
    });

    document.addEventListener("mousemove", slide);
    document.addEventListener("mouseup", stopSlide);

    function startSlide(e) {
        e.preventDefault();

        isDragging = true;
        updateSliderPosition(e.clientX);
    }

    function slide(e) {
        if (isDragging) {
            updateSliderPosition(e.clientX);
        }
    }

    function stopSlide() {
        isDragging = false;
    }

    function updateSliderPosition(clientX) {
        const position = clientX - slider.getBoundingClientRect().left;
        const percentage = (position / slider.clientWidth) * 100;

        const validPercentage = Math.min(Math.max(percentage, 0), 100);

        const value = Math.round((validPercentage / 100) * (max - min) + min);
        setKnobPosition(value);
        slider.setAttribute("value", value);
    }
}










MCWebGUI.Element.Slider = {}

class MCSlider extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = "<span class=\"start\"></span><span class=\"background\"></span><span class=\"range\"></span><span class=\"knob\"></span><span class=\"end\"></span>"
        setupSlider(this, this.querySelector(".knob"), 50);
    }
}

customElements.define("mc-slider", MCSlider);