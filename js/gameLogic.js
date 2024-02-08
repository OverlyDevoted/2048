// board variable
/* 
00 01 02 03
10 11 12 13
20 21 22 23
30 31 32 33
 */
let boardChangeCallback = () => { }
let board = []
export const getEmptyBoard = () => {
    board = new Array(4).fill(0).map(() => new Array(4).fill(0));
}
getEmptyBoard();

export const onBoardChange = (callback) => {
    boardChangeCallback = callback;
}
// spawn random tile at available
const getFreeTiles = () => {
    const free = []
    board.forEach((row, i) => {
        row.forEach((val, j) => {
            if (val == 0)
                free.push({ i: i, j: j })
        })
    })
    return free;
}

const getRandomFreeTile = () => {
    const free = getFreeTiles()
    const randomCellIdx = Math.floor(Math.random() * free.length);
    return free[randomCellIdx];
}

const setRandomFreeTile = () => {
    const { i, j } = getRandomFreeTile();
    board[i][j] = 2;
}

export const setRandomTiles = (count) => {
    for (let i = 0; i < count; i++) {
        setRandomFreeTile()
    }
    boardChangeCallback(board);
}





// make move in a direction
// check win
// check lose