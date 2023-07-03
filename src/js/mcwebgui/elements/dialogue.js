let DialogueContainer = document.createElement("div");
DialogueContainer.id = "dialogueContainer";
document.body.appendChild(DialogueContainer);

MCWebGUI.Dialogue = {};

MCWebGUI.Dialogue.TextOnly = function (title, content, buttons) {
    const dialogueButtons = MCWebGUI.ButtonArrayToElements(buttons);
};

MCWebGUI.ShowDialogue = function (title, contentType, content, buttons) {
    switch (contentType) {
        case "imageText":
            break
        case "imageOnly":
            break
        case "videoText":
            break
        case "videoOnly":
            break
        case "textOnly":
        default:
            break
    };
};

/* MCWebGUI.ShowDialogue(
    "Leave Create New World?",
    "textOnly", 
    "Your world settings will not be saved if you leave.",
    [
        {
            "type": "default",
            "content": "Continue Creating",
            "willCloseDialogue": true
        },
        {
            "type": "red",
            "content": "Leave without saving",
            "willCloseDialogue": true,
            "function": exitCreateWorldScreen()
        }
    ]
) */