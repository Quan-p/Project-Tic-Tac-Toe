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
    cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, {once: true})
    })

    const X_CLASS = 'x';
    const CIRCLE_CLASS ='circle';
    
    function handleClick(e) {
        console.log('clicked');
        // const cell = e.target;
        // const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
        // placeMark(cell, currentClass)
    }

    return {
        handleClick,

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

