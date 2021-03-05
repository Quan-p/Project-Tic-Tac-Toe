const gameBoard = (() => {
    const board = [];
    const showBoard = () => {
        document.getElementById('game-container').style.display = "grid";
    }
    //allows outside modules to pull the board array
    const getBoard = () => {
        return board;
    }

    return {
        getBoard,
        showBoard,
    };
})();
//gameBoard.showBoard()
const players = {
    //cells selected by the players
    player1Selections: [],
    player2Selections: [],
    //tracking points, could possibly be done with a different counter
    points1: [],
    points2: []
}