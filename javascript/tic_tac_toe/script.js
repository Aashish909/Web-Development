const tictac = document.querySelector(".container");

let currentPlayer = "X";
let winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

tictac = addEventListener("click", (e) => {
  // console.log(e.target);

  if (e.target.className !== "container") {
    if (e.target.innerText === "") {
      e.target.textContent = currentPlayer;
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }

  // if (currentPlayer === "X") {
  //   currentPlayer = "O";
  // } else {
  //   currentPlayer = "X";
  // }
});
