


function findLength() {
    
    const textarea = document.getElementById("textarea");
    const displaySend = document.getElementById("displaySend");

    textarea.addEventListener("input", () => {
        const text = textarea.value;
        const words = text.split(" ");

        displaySend.textContent = Object.keys(words).length-1;
    });
    
}

findLength()