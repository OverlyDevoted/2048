import { onBoardChange, setRandomTiles, getEmptyBoard } from "./gameLogic.js";

//settings
const maxStartTiles = 4;

const cells = document.getElementsByClassName("cell");

const drawBoard = (board) => {
    board.forEach((row, i) => {
        row.forEach((val, j) => {
            cells[i * 4 + j].textContent = val;
        })
    })
}

onBoardChange(drawBoard);

//setup
getEmptyBoard();

const newGameBtn = document.getElementById("new-game-btn");
newGameBtn.addEventListener(("click"), (e) => {
    getEmptyBoard()
    setRandomTiles(Math.floor(Math.random() * maxStartTiles));
});

setRandomTiles(Math.floor(Math.random() * maxStartTiles));