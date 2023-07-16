MCWebGUI.SoundHandler = {};
MCWebGUI.Sound = {};
MCWebGUI.SoundHandler.Volume = 1;

MCWebGUI.Sound.ClickSignificantSound = new Audio("assets/sounds/gui/significant_click.ogg");
MCWebGUI.Sound.ClickSignificantSound.volume = MCWebGUI.SoundHandler.Volume;
MCWebGUI.Sound.ClickSound = new Audio("assets/sounds/gui/click.ogg");
MCWebGUI.Sound.ClickSound.volume = MCWebGUI.SoundHandler.Volume;

MCWebGUI.SoundHandler.ButtonPress = function (buttonConstructorThis) {
    const type = buttonConstructorThis.getAttribute('type');
    const disabled = buttonConstructorThis.getAttribute('disabled');

    if (type == "green" && !disabled || type == "purple" && !disabled) {
        MCWebGUI.Sound.ClickSignificantSound.cloneNode().play();
    } else if (!disabled) {
        MCWebGUI.Sound.ClickSound.cloneNode().play();
    };
};

MCWebGUI.SoundHandler.DialogExit = function () {
    MCWebGUI.Sound.ClickSound.cloneNode().play();
};
