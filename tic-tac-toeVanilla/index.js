const container = document.querySelector(".bodyContainer");
const gameHeading = document.querySelector(".turn");
const restartButton = document.querySelector(".restartButton");



let currentPlayer = 1;
let numMovesDone = 0;
let numberOfRows = 3; 
let numberOfColumns = 3;
let boardState = generateEmptyBoardState();


createGrids();


const gameSquares = document.querySelectorAll(".box");
restartButton.addEventListener("click", restartGame);

gameSquares.forEach((gameSquare, index) => {
    gameSquare.addEventListener("click", () => {
        // determine which row and column it is in
        const row = Math.floor(index / numberOfRows);
        const column = index % numberOfColumns;
        makeMove(gameSquare, row, column);
    })
})


function generateEmptyBoardState() {
    return new Array(numberOfRows)
        .fill()
        .map(() => new Array(numberOfRows).fill());
};

function createGrids() {
    for (let i = 0; i < numberOfRows ; i++) {
        for (let j = 0 ; j < numberOfColumns ; j++) {
            const box = document.createElement("div");
            box.classList.add("box");
            container.appendChild(box);
        }
    }
};


function makeMove(gameSquare, row, column) {
    gameSquare.textContent = currentPlayer === 1? 'X' : 'O';
    gameSquare.disabled = true;
    numMovesDone++;
    boardState[row][column] = currentPlayer;


    if (didPlayerWin(currentPlayer)) {
        gameHeading.textContent = `Player ${ currentPlayer } won!`;
        endGame();
    } else if (numMovesDone >= numberOfColumns * numberOfRows) {
        gameHeading.textContent = "Tie!";
        endGame();
    } else {
        currentPlayer = currentPlayer === 1 ? 2: 1;
        setCurrentPlayerHeader();
    }
};

function didPlayerWin (currentPlayer) {
    const rows = [0, 1, 2];
    const wonHorizontal = rows.some(row => {
        return (
            boardState[row][0] === currentPlayer &&
            boardState[row][1] === currentPlayer &&
            boardState[row][2] === currentPlayer
        );
    });
    const columns = [0, 1, 2];
    const wonVertical = columns.some(column => {
        return (
            boardState[0][column] === currentPlayer &&
            boardState[1][column] === currentPlayer &&
            boardState[2][column] === currentPlayer
        );
    });


    const wonTopLeftToBottomRight = (
        boardState[0][0] === currentPlayer &&
        boardState[1][1] === currentPlayer && 
        boardState[2][2] === currentPlayer
    );

    const wonTopRightToBottomLeft = (
        boardState[0][2] === currentPlayer && 
        boardState[1][1] === currentPlayer && 
        boardState[2][0] === currentPlayer
    );

    return ( 
        wonHorizontal ||
        wonVertical ||
        wonTopLeftToBottomRight ||
        wonTopRightToBottomLeft );
};

function setCurrentPlayerHeader() {
    gameHeading.textContent = `Player ${ currentPlayer }'s turn`;
}

function endGame() {
    restartButton.style.display = "block";
    restartButton.disabled = false;
    gameSquares.forEach(gameSquare => {
        gameSquare.disabled = true;
    });

};


function restartGame() {
    boardState = generateEmptyBoardState();
    currentPlayer = 1 ;
    numMovesDone = 0 ;
    setCurrentPlayerHeader();
    gameSquares.forEach(gameSquare => {
        gameSquare.textContent = "";
        gameSquare.disabled = false;
    });

    restartButton.style.display = "none";
    
}






