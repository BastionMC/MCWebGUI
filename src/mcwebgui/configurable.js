MCWebGUI.Configurable = {
    "pixel_size": 2
}

MCWebGUI.SetPixelSize = function (pixelSize) {
    MCWebGUI.Configurable.pixel_size = pixelSize;
    MCWebGUI.ConfiguredCSS.textContent = `*{--pixel-size:${MCWebGUI.Configurable.pixel_size}}`;
}
MCWebGUI.GetPixelSize = function () {
    return MCWebGUI.Configurable.pixel_size;
}