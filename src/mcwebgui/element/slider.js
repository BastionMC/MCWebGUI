function setupSlider(sliderId, knobId, initialValue) {
    const slider = document.getElementById(sliderId);
    const knob = document.getElementById(knobId);
    const greenBackground = slider.querySelector(".green-background");
    let isDragging = false;

    const min = parseFloat(slider.getAttribute("min")) || 0;
    const max = parseFloat(slider.getAttribute("max")) || 100;

    function setKnobPosition(value) {
        const percentage = ((value - min) / (max - min)) * 100;
        knob.style.left = `${percentage}%`;
        greenBackground.style.width = `${percentage}%`;
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

setupSlider("slider1", "sliderKnob1", 50);
setupSlider("slider2", "sliderKnob2", 2);










MCWebGUI.Element.Slider = {}

class MCSlider extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = "<span class=\"start\"></span><span class=\"background\"></span><span class=\"range\"></span><span class=\"knob\"></span><span class=\"end\"></span>"
    }
}