function showAlert() {
    alert("Hello, world!");
    document.getElementById("textInput").style.fontSize = "24pt";
}

function applyFancyStyles() {
    alert("Style Changed!");
    let textInput = document.getElementById("textInput");
    if (document.getElementById("fancyShmancy").checked) {
        textInput.style.fontWeight = "bold";
        textInput.style.color = "blue";
        textInput.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textInput.style.fontWeight = "normal";
        textInput.style.color = "black";
        textInput.style.textDecoration = "none";
    }
}


function applyMoo() {
    let textInput = document.getElementById("textInput");
    let text = textInput.value.toUpperCase();
    let sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i].trim() + "-Moo";
    }
        textInput.value = sentences.join(". ");
}

document.getElementById("biggerBtn").onclick = showAlert;
document.getElementById("fancyShmancy").onchange = applyFancyStyles;
document.getElementById("boringBetty").onchange = applyFancyStyles;
document.getElementById("mooBtn").onclick = applyMoo;