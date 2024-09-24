function showDice() {
  let showNum = document.getElementById("dice-num");
  let dice1Src = "./images/1.png";
  let dice2Src = "./images/2.png";
  let dice3Src = "./images/3.png";
  let dice4Src = "./images/4.png";
  let dice5Src = "./images/5.png";
  let dice6Src = "./images/6.png";
  let randomNum = Math.floor(Math.random() * 6) + 1;
  let image = document.getElementById("dice-image");
  showNum.innerHTML = `Dice Number  <i class="fas fa-dice"></i> : ${randomNum}`;
  if (randomNum == 1) {
    image.src = dice1Src;
  } else if (randomNum == 2) {
    image.src = dice2Src;
  } else if (randomNum == 3) {
    image.src = dice3Src;
  } else if (randomNum == 4) {
    image.src = dice4Src;
  } else if (randomNum == 5) {
    image.src = dice5Src;
  } else {
    image.src = dice6Src;
  }
}
