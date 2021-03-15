const gameBoard = (() => {
    //const board = [];
    // const showBoard = () => {
    //     document.getElementById('game-container').style.display = "grid";
    // }

    //allows outside modules to pull the board array
   

    return {
        //showBoard,
    };
})();

const placeMark = (() => {
    const cellElements = document.querySelectorAll('[data-cell]');
    const board = document.getElementById('game-container');
    

    const X_CLASS = 'x';
    const CIRCLE_CLASS ='circle';
    let circleTurn;

    function placeMark(cell, currentClass) {
        cell.classList.add(currentClass)
    }

    function swapTurns() {
        circleTurn = !circleTurn;
    }
//start game
    function firstHover() {
        circleTurn = false;
        cellElements.forEach(cell => {
            cell.addEventListener('click', handleClick, {once: true})
        })
        setBoardHoverClass();
    }

    function setBoardHoverClass() {
        board.classList.remove(X_CLASS);
        board.classList.remove(CIRCLE_CLASS);
        if (circleTurn) {
            board.classList.add(CIRCLE_CLASS)
        } else {
            board.classList.add(X_CLASS)
        }
    }
    
    function handleClick(e) {
        console.log('clicked');
        const cell = e.target;
        const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
        placeMark(cell, currentClass);
        swapTurns();
        setBoardHoverClass();
        if (checkWin(currentClass)) {
            console.log('winner');
        }
    }

    return {
        handleClick,
        firstHover
    }
})(); 
//Game logic here
const gameController = (() => {
    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    function checkWin {

    }

    return {
        checkWin
    }
})();

placeMark.firstHover();

//gameBoard.showBoard()
// const players = {
//     //cells selected by the players
//     player1Selections: [],
//     player2Selections: [],
//     //tracking points, could possibly be done with a different counter
//     points1: [],
//     points2: []

