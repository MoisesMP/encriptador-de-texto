const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const copyBtn = document.getElementById("copy-btn");
const outMuneco = document.querySelector(".output-muneco");
const outputArea = document.querySelector(".output-area");

const encrypt = (text) => {
    let encryptedText = "";
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "a") {
            encryptedText += "ai";
        } else if (text[i] === "e") {
            encryptedText += "enter";
        } else if (text[i] === "i") {
            encryptedText += "imes";
        } else if (text[i] === "o") {
            encryptedText += "ober";
        } else if (text[i] === "u") {
            encryptedText += "ufat";
        } else {
            encryptedText += text[i];
        }
    }
    return encryptedText;
};

const decrypt = (text) => { 
    let decryptedText = "";
    let currentSubstring = "";
    let j = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] !== "a" && text[i] !== "e" && text[i] !== "i" && text[i] !== "o" && text[i] !== "u") {
            currentSubstring += text[i];
        } else {
            decryptedText += currentSubstring;
            if (text.slice(i, i + 2) === "ai") {
                decryptedText += "a";
                i++;
            } else if (text.slice(i, i + 4) === "ober") {
                decryptedText += "o";
                i += 3;
            } else if (text.slice(i, i + 4) === "ufat") {
                decryptedText += "u";
                i += 3;
            } else if (text.slice(i, i + 4) === "imes") {
                decryptedText += "i";
                i += 3;
            } else if (text.slice(i, i + 5) === "enter") {
                decryptedText += "e";
                i += 4;
            }
            currentSubstring = "";
        }
    }
    return decryptedText;
};

encryptBtn.addEventListener("click", () => {
    const text = inputText.value;
    outputText.value = encrypt(text);
    copyBtn.style.display = "block";
    outputText.style.display = "block";
    outMuneco.style.display = "none";
    inputText.value = "";
    outputArea.style.display = "block";
});

decryptBtn.addEventListener("click", () => {
    const text = inputText.value;
    outputText.value = decrypt(text);
});

copyBtn.addEventListener("click", () => {
    outputText.select();
    document.execCommand("copy");
})