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

//Game logic here
const gameController = (() => {

    const cellElements = document.querySelectorAll('[data-cell]');
    const board = document.getElementById('game-container');
    const winningMessageElement = document.getElementById('winScreen');
    const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
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

    function endGame(draw) {
        if (draw) {

        }
        else {
            winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
        }
        winningMessageElement.classList.add('show');
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
        const cell = e.target;
        const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
        placeMark(cell, currentClass);
        if (winCheck(currentClass)) {
            endGame(false);
        }
        swapTurns();
        setBoardHoverClass();
        
    }

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

    function winCheck(currentClass) {
        return WINNING_COMBINATIONS.some(combination => {
            return combination.every(index => {
                return cellElements[index].classList.contains(currentClass)
            })
        })
    }

    
    return {
        handleClick,
        firstHover
    }
})();

gameController.firstHover();


//gameBoard.showBoard()
// const players = {
//     //cells selected by the players
//     player1Selections: [],
//     player2Selections: [],
//     //tracking points, could possibly be done with a different counter
//     points1: [],
//     points2: []

