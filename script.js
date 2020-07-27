let generatedPin = 0;
let userPin = "";

//Generating the pin
const generateBtn = document.getElementById("btn-generate");
generateBtn.addEventListener("click", function () {
    generatedPin = Math.ceil(Math.random() * 10000);
    document.getElementById("generated-pin").value = generatedPin;
    document.getElementById("generated-pin").style.color = "white";
    console.log(generatedPin);
})

//User entering pin
const buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener("click", function (event) {
        if (this.innerText == "C") {
            userPin = "";
            document.getElementById("user-input").value = userPin;
        }
        else if (this.innerText == "<") {
            userPin = document.getElementById("user-input").value;
            userPin = userPin.substring(0, userPin.length - 1);
            document.getElementById("user-input").value = userPin;
        }
        else {
            if (userPin.length < 4) {
                userPin = document.getElementById("user-input").value;
                userPin += this.innerText;
                document.getElementById("user-input").value = userPin;
            }
        }
    })
}