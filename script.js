
// PASSWORD GENERATOR

function generatePassword() {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let characters = "";
    let password = "";

    const length = document.getElementById("length").value;
    const message3 = document.getElementById("copyMsg3");

    message3.innerText = ""; 

    if (document.getElementById("uppercase").checked) {
        password+= uppercase[Math.floor(Math.random() * uppercase.length)];
        characters += uppercase; 
    }
    if (document.getElementById("lowercase").checked) {
        password+= lowercase[Math.floor(Math.random() * lowercase.length)];
        characters += lowercase;
    }
    if (document.getElementById("numbers").checked) {
        password+= numbers[Math.floor(Math.random() * numbers.length)];
        characters += numbers;
    }
    if (document.getElementById("symbols").checked) {
        password+= symbols[Math.floor(Math.random() * symbols.length)];
        characters += symbols;
    }

    if (characters === "") {
        message3.innerText = "⚠️ Select at least one character type!";
        setTimeout(() => {
        message3.innerText = "";
    }, 1500);
        return; // 
    }

    for (let i = password.length; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }



    let passwordArray = password.split("");   
    passwordArray.sort(() => Math.random() - 0.5);   
    password = passwordArray.join("");    
    document.getElementById("password").value = password;
}


// Copy to clipboard

function copyPassword() {
    const passwordField = document.getElementById("password");
    const message1 = document.getElementById("copyMsg1");
    const message2 = document.getElementById("copyMsg2");

    message1.innerText = "";

    if (passwordField.value === "") {
        message1.innerText = "⚠️ Generate a password first!";
        setTimeout(() => {
        message1.innerText = "";
             }, 1500);
        return;
    }

    navigator.clipboard.writeText(passwordField.value);
    message2.innerText = "✅ Password copied!";

    passwordField.value = "";

    setTimeout(() => {
        message2.innerText = "";
    }, 1500);
}

// THEME TOGGLE

const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");

function setLight() {
  document.body.classList.add("light");
  lightBtn.classList.add("active");
  darkBtn.classList.remove("active");
}

function setDark() {
  document.body.classList.remove("light");
  darkBtn.classList.add("active");
  lightBtn.classList.remove("active");
}


setDark();




