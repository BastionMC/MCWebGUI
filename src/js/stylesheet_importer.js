const stylesheets = [
    "src/css/button.css",
    "src/css/input.css",
    "src/css/main.css"
];


for (let i=0; i<stylesheets.length; i++) {
    let stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href= stylesheets[i];
    document.body.appendChild(stylesheet);
};