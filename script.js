const gameBoard = (() => {
    const showBoard = () => {
        document.getElementById('game-container').style.display = 'grid';
        document.getElementById('gameButtons').style.display = 'none';
    }

    //allows outside modules to pull the board array
    return {
        showBoard
    };
})();

const playerCheck = (() => {
    var pOne = 'Player One';
    var pTwo = 'Player Two';
    
    function oneConfirm() {
        this.pOne = document.getElementById('p1Name').value;
        document.getElementById('leftName').textContent += this.pOne;
        document.getElementById('leftName').style.visibility = 'visible';
    }
    function twoConfirm() {
        this.pTwo = document.getElementById('p2Name').value;
        document.getElementById('rightName').textContent += this.pTwo;
        document.getElementById('rightName').style.visibility = 'visible';
    }

    return {
        oneConfirm,
        twoConfirm,
        pOne,
        pTwo
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
    function initGame() {
        circleTurn = false;
        cellElements.forEach(cell => {
            cell.addEventListener('click', handleClick, {once: true})
            cell.classList.remove(X_CLASS);
            cell.classList.remove(CIRCLE_CLASS);
        })
        setBoardHoverClass();
    }

    function startGame() {
        winningMessageElement.classList.remove('show');
        initGame();
        document.getElementById('game-container').style.display = 'grid';
    }

    function endGame(draw) {
        if (draw) {
            winningMessageTextElement.innerText = 'Draw!'
        }
        else {
            winningMessageTextElement.innerText = `${circleTurn ? playerCheck.pTwo : playerCheck.pOne} Wins!`
        }
        winningMessageElement.classList.add('show');
    }

    function isDraw() {
        return [...cellElements].every(cell => {
            return cell.classList.contains(X_CLASS) || 
            cell.classList.contains(CIRCLE_CLASS);
        })
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
        } else if (isDraw()) {
            endGame(true)
        } else {
            swapTurns();
            setBoardHoverClass();
        }
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
        startGame,
        initGame
    }
})();

gameController.initGame(); 

// const players = {
//     //cells selected by the players
//     player1Selections: [],
//     player2Selections: [],
//    0 //tracking points, could possibly be done with a different counter
//     points1: [],
//     points2: []

