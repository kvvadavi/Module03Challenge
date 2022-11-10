// Assignment Code
let lowerCaseAlphabets = "abcdefghijklmnopqrstuvwxyz"
let upperCaseAlphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers = "0123456789"
let specialCharacters = ["!", "@", "#", "$", "&", "+", "_", "%", "?"]

let passwordLength = ""

let randomLowerAlpha = []
let randomUpperAlphaConcat
let randomUpperAlpha = []
let randomUpperLower = []
let randomSpecialAlpha = []
let randomSpecUppLowConcat
let randomSpecUppLow = []
let randomNumeric = []
let randomNumSpecUppLowConcat = []
let randomFinal = []

var generateBtn = document.querySelector("#generate");

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = randomFinal;
}

function generatePassword() {
  window.alert("Select Password Creteria: \nLength, Numeric, UpperCase, LowerCase and Special Character:");
  passLengthFunc()
  // If user pressed Cancel, immediately end function
}

function passLengthFunc() {
  var passLength = window.prompt("Enter length of password. \nLength of at least 8 characters and no more than 128 characters:");
  if (!passLength) {
    return;
  }

  if (passLength < 8 || passLength > 128) {
    alert("Password length should be 8 characters and no more than 128.")
    return;

  } else {
    passwordLength = passLength
    passLowerFunc()
  }
}

function passLowerFunc() {
  let passLower = window.prompt("Include Lower Case Characters? \nYES or NO:");
  if (!passLower) {
    return;
  }
  passLower = passLower.toUpperCase()
  
  if (passLower === "YES") {
    let i 
    for (i=0; i<passwordLength; i++) {
      randomLowerAlpha += lowerCaseAlphabets[Math.floor(Math.random() * lowerCaseAlphabets.length)]
    }
    passUpperFunc()
  } 
  
  if (passLower === "NO") {
    randomLowerAlpha += ""
    console.log(randomLowerAlpha)
    passUpperFunc()
  } 
}

function passUpperFunc() {
  var passUpper = window.prompt("Include Upper Case Characters? \nYES or NO:");
  if (!passUpper) {
    return;
  }

  passUpper = passUpper.toUpperCase()

  if (passUpper === "YES") {
    let i
    for (i=0; i<passwordLength; i++) {
      randomUpperAlpha += upperCaseAlphabets[Math.floor(Math.random() * upperCaseAlphabets.length)]
    }
    randomUpperAlphaConcat =  randomUpperAlpha + randomLowerAlpha
    passSpecialFunc()
  } 
  if (passUpper === "NO") {
    randomUpperAlphaConcat =  randomUpperAlpha + randomLowerAlpha
    passSpecialFunc()
  } 
}


function passSpecialFunc() {
  var passSpecial = window.prompt("Include Special Characters? \nYES or NO:");
  if (!passSpecial) {
    return;
  }
  passSpecial = passSpecial.toUpperCase()

  if (passSpecial === "YES") {
    let i
    for (i=0; i<passwordLength; i++){
      randomSpecialAlpha += specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
    randomSpecUppLowConcat = randomSpecialAlpha + randomUpperAlphaConcat
    passNumericFunc()
  } 
  if (passSpecial === "NO") {
    randomSpecUppLowConcat = randomSpecialAlpha + randomUpperAlphaConcat

    passNumericFunc()
  } 
}

function passNumericFunc() {
  var passNumeric = window.prompt("Include Numbers? \nYES or NO:");
  if (!passNumeric) {
    return;
  }
  passNumeric = passNumeric.toUpperCase()

  if (passNumeric === "YES") {
    let i
    for (i=0; i<passwordLength; i++){
      randomNumeric += numbers[Math.floor(Math.random() * numbers.length)]
    }

    randomNumSpecUppLowConcat = randomNumeric + randomSpecUppLowConcat

    let j
    for (j=0; j<passwordLength; j++) {
      randomFinal += randomNumSpecUppLowConcat[Math.floor(Math.random() * randomNumSpecUppLowConcat.length)]
    }
    validatePass()
  } 
  if (passNumeric === "NO") {
    randomFinal = randomNumeric + randomSpecUppLowConcat
    validatePass()
  } 
}

function validatePass() {
  const validatePass = new RegExp('abcdefghijklmnopqrstuvwxyz')
  console.log(validatePass.test(randomFinal))
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
