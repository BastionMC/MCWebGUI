MCWebGUI.SoundHandler = {};
MCWebGUI.Sound = {};
MCWebGUI.SoundHandler.SoundVolume = 1;

MCWebGUI.Sound.Button = {};
MCWebGUI.Sound.Button.ClickSignificantSound = new Audio("assets/sounds/button/significant_click.ogg");
MCWebGUI.Sound.Button.ClickSignificantSound.volume = MCWebGUI.SoundHandler.SoundVolume;
MCWebGUI.Sound.Button.ClickSound = new Audio("assets/sounds/button/click.ogg");

MCWebGUI.SoundHandler.ButtonPress = function (buttonConstructorThis) {
    const type = buttonConstructorThis.getAttribute('type');
    const disabled = buttonConstructorThis.getAttribute('disabled');

    if (type == "green" && !disabled || type == "purple" && !disabled) {
        MCWebGUI.Sound.Button.ClickSignificantSound.cloneNode().play();
    } else if (!disabled) {
        MCWebGUI.Sound.Button.ClickSound.cloneNode().play();
    };
};