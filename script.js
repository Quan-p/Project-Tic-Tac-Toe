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
    cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true})
    })

    const X_CLASS = 'x';
    const CIRCLE_CLASS ='circle';
    let circleTurn;

    function placeMark(cell, currentClass) {
        cell.classList.add(currentClass)
    }

    function swapTurns() {
        circleTurn = !circleTurn;
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
        placeMark(cell, currentClass)
        swapTurns();
        setBoardHoverClass();
    }

    return {
        handleClick
    }
})(); 


//gameBoard.showBoard()
// const players = {
//     //cells selected by the players
//     player1Selections: [],
//     player2Selections: [],
//     //tracking points, could possibly be done with a different counter
//     points1: [],
//     points2: []

