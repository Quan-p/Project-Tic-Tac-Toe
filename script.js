const gameBoard = (() => {
    const board = [];
    //allows outside modules to pull the board array
    const getBoard = () => {
        return board;
    }
})();

const players = {
    //cells selected by the players
    player1Selections: [],
    player2Selections: [],
    //tracking points, could possibly be done with a different counter
    points1: [],
    points2: []
}