MCWebGUI.SoundHandler = {};
MCWebGUI.Sound = {};
MCWebGUI.SoundHandler.Volume = {
    "gui": 1
};

MCWebGUI.Sound.GUI = {};
MCWebGUI.Sound.GUI.ClickSignificantSound = new Audio("assets/sounds/gui/significant_click.ogg");
MCWebGUI.Sound.GUI.ClickSignificantSound.volume = MCWebGUI.SoundHandler.Volume.gui;
MCWebGUI.Sound.GUI.ClickSound = new Audio("assets/sounds/gui/click.ogg");
MCWebGUI.Sound.GUI.ClickSound.volume = MCWebGUI.SoundHandler.Volume.gui;

MCWebGUI.SoundHandler.ButtonPress = function (buttonConstructorThis) {
    const type = buttonConstructorThis.getAttribute('type');
    const disabled = buttonConstructorThis.getAttribute('disabled');

    if (type == "green" && !disabled || type == "purple" && !disabled) {
        MCWebGUI.Sound.GUI.ClickSignificantSound.cloneNode().play();
    } else if (!disabled) {
        MCWebGUI.Sound.GUI.ClickSound.cloneNode().play();
    };
};

MCWebGUI.SoundHandler.DialogExit = function () {
    MCWebGUI.Sound.GUI.ClickSound.cloneNode().play();
};
