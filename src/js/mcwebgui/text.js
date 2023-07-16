MCWebGUI.JSONText = {};
MCWebGUI.JSONText.ValidKeys = [
    "color",
    "bold",
    "italic",
    "underlined",
    "strikethrough",
    "obfuscated",
    "clickEvent",
    "hoverEvent",
    "text"
];

MCWebGUI.JSONText.ObjectToElement = function (textObject) {
    let objectElement = document.createElement("mc-text");
    
    for (const key in textObject) {
        objectElement.setAttribute(key, textObject[key]);
    };

    for (let i = objectElement.attributes.length - 1; i >= 0; i--) {
        const attribute = objectElement.attributes[i];
        if (!MCWebGUI.JSONText.ValidKeys.includes(attribute.name)) {
            objectElement.removeAttribute(attribute.name);
        };
    };

    if (objectElement.hasAttribute("color")) {
        if (objectElement.getAttribute("color").startsWith("#")) {
            objectElement.style = "color:" + objectElement.getAttribute("color") + ";";
            objectElement.removeAttribute("color");
        };
    };

    if (typeof textObject == "string") {
        objectElement = document.createElement("mc-text");
        objectElement.innerHTML = textObject;
        return objectElement;
    } else {
        return objectElement;
    };
};

MCWebGUI.JSONTextToElements = function (textObject) {
    let objectElement = document.createElement("mc-text");
    
    if (typeof textObject == "string") {
        objectElement.innerHTML = textObject;
        return objectElement;
    } else if (Array.isArray(textObject)) {
        for (let i=0;i<textObject.length;i++) {
            objectElement.appendChild(MCWebGUI.JSONText.ObjectToElement(textObject[i]));
        };

        return objectElement;
    } else if (typeof textObject == "object") {
        objectElement = MCWebGUI.JSONText.ObjectToElement(textObject);
        return objectElement;
    } else {
        console.error(`Error while trying to convert JSON text to element: Given variable doesn't seem to be a valid JSON text.\n\n${textObject}`);
    };
};