let generatedPin = 0;
let userPin = "";
let tryLeft = 3;

//Generating the pin
const generateBtn = document.getElementById("btn-generate");
generateBtn.addEventListener("click", function () {
    generatedPin = Math.ceil(Math.random() * 10000);
    document.getElementById("generated-pin").value = generatedPin;
    document.getElementById("generated-pin").style.color = "white";
    userPin = "";
    document.getElementById("user-input").value = userPin;
    displayStyle("login-success", "none");
    displayStyle("login-failed", "none");
    document.getElementById("submit-btn").style.backgroundColor = "#495BC3";
    document.getElementById("submit-btn").style.boxShadow = "0px 0px 20px rgb(27, 70, 151)";
})

//User entering pin
const buttons = document.getElementsByClassName("button");
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener("click", function () {
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

//User Submitting Pin
const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
    if (userPin == generatedPin) {
        displayStyle("login-success", "block");
        document.getElementById("submit-btn").style.backgroundColor = "#17b978";
        document.getElementById("submit-btn").style.boxShadow = "0px 0px 20px #17b978";
    }
    else {
        displayStyle("login-failed", "block");
        if (tryLeft > 1) {
            tryLeft--;
            document.getElementById("try-left").innerText = tryLeft;
            document.getElementById("submit-btn").style.backgroundColor = "#ff304f";
            document.getElementById("submit-btn").style.boxShadow = "0px 0px 20px #ff304f";
        }
        else {
            document.getElementById("try-left").innerText = 0;
            document.getElementById("submit-btn").disabled = true;
            document.getElementById("submit-btn").style.backgroundColor = "gray";
            document.getElementById("submit-btn").style.boxShadow = "none";
            displayStyle("login-failed", "none");
            displayStyle("no-try", "block");
        }
    }
})


//Function to set the display style of different elements
function displayStyle(id, property){
    return (document.getElementById(id).style.display = property)
}