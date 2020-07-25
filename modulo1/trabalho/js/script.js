window.addEventListener("load", start);

var inputRed = null;
var inputGreen = null;
var inputBlue = null;

var inputTextRed = null;
var inputTextGreen = null;
var inputTextBlue = null;

var back = null;

function start() {
  inputRed = document.querySelector("#inputRed");
  inputGreen = document.querySelector("#inputGreen");
  inputBlue = document.querySelector("#inputBlue");

  inputTextRed = document.querySelector("#inputTextRed");
  inputTextGreen = document.querySelector("#inputTextGreen");
  inputTextBlue = document.querySelector("#inputTextBlue");

  back = document.querySelector("#divColor");

  actionInputs();
}

function actionInputs() {
  inputRed.addEventListener("input", inputCharge);
  inputGreen.addEventListener("input", inputCharge);
  inputBlue.addEventListener("input", inputCharge);

  function inputCharge() {
    redColor = inputRed.value;
    greenColor = inputGreen.value;
    blueColor = inputBlue.value;
    console.log(redColor);
    console.log(greenColor);
    console.log(blueColor);

    updateBackground(redColor, greenColor, blueColor);
  }
}

function updateBackground(colorRed, colorGreen, colorBlue) {
  back.style.backgroundColor =
    "rgb(" + colorRed + "," + colorGreen + "," + colorBlue + ")";
  updateTextBox(colorRed, colorGreen, colorBlue);
}
function updateTextBox(colorRed, colorGreen, colorBlue) {
  inputTextRed.value = colorRed.toString();
  inputTextGreen.value = colorGreen;
  inputTextBlue.value = colorBlue;
}
