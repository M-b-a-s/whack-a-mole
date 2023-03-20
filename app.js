// DOm Elements
const score = document.getElementById("score"),
  timeLeft = document.getElementById("time-left"),
  squares = document.querySelectorAll(".square"),
  startGame = document.querySelector(".start-btn");
  
// global variables
let result = 0;
let gameTime = 60;
let hitPosition;
let timerId = null;

function molePosition() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  }); //removes the mole class from the squares

  let randomPosition = squares[Math.floor(Math.random() * 9)]; //generates random squares

  randomPosition.classList.add("mole");

  hitPosition = randomPosition.id;

  console.log(hitPosition);
}

function moveMole() {
  timerId = setInterval(molePosition, 1000);
}

squares.forEach((square) => {
    square.addEventListener("click", () => {
      if (hitPosition === square.id) {
        result++;
        score.textContent = result;
      }
    });
  });

startGame.addEventListener("click", () => {
  

  moveMole();

  function countDown() {
    gameTime--;
    timeLeft.textContent = gameTime;
    if (gameTime === 0) {
      clearInterval(countDownTimerId);
      clearInterval(timerId);
      alert("GAME OVER! Your score is " + result);
      result = 0;
      score.textContent = result;
      gameTime = 60;
    }
  }

  let countDownTimerId = setInterval(countDown, 1000);
});