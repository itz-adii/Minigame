const numberInput = document.getElementById("numberInput");
const guessBtn = document.getElementById("guessBtn");
const displayMsg = document.getElementById("displayMsg");
const replayBtn = document.getElementById("replayBtn");
const generatedNumber = generateNumber();

function generateNumber() {
  return Math.round(Math.random() * 100);
}

function checkUserNumber(generatedNumber, userNumber) {
  if (userNumber === generatedNumber) {
    updateTag("Yayy, You guessed the number!", "green");
    alert("Yayy, You guessed the number!");
  } else if (userNumber > generatedNumber) {
    updateTag("The entered number is greater", "red");
  } else {
    updateTag("The entered number is smaller", "tomato");
  }
}

function updateTag(message, color) {
  displayMsg.innerText = message;
  displayMsg.style.color = color;
}

guessBtn.addEventListener("click", () => {
  const userNumber = parseInt(numberInput.value, 10);
  if (isNaN(userNumber)) {
    updateTag("Enter a valid number");
  } else if (userNumber < 0 || userNumber > 99) {
    alert("Enter a number in range 0 to 99");
    updateTag("Enter a number in range 0 to 99", "lightseagreen");
  } else {
    checkUserNumber(generatedNumber, userNumber);
  }
});

replayBtn.addEventListener("click", () => {
  location.reload();
});
