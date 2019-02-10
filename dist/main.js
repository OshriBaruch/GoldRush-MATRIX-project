const renderer = new Renderer()
let board;
const getIconFuch = () => {
    $(".D").find("i").remove(); $(".D").wrapInner(`<i class="far"></i>`);
    $(".1").find("i").remove(); $(".1").wrapInner(`<i class="far fa-grin-squint fa-2x"></i>`);
    $(".2").find("i").remove(); $(".2").wrapInner(`<i class="far fa-laugh-beam fa-2x"></i>`);
    $(".C").find("i").remove(); $(".C").wrapInner(`<i class="fas fa-circle"></i>`);
    $(".B").find("i").remove(); $(".B").wrapInner(`<i id="B"></i>`);
}
const startGame = () => {
    board.getRandomBlock(); board.getRandomCoins();
    renderer.renderBoard(board.matrix)
    renderer.renderScore({ player1: board.player1.Score, player2: board.player2.Score })
    getIconFuch()
}
const getMatrixSize = () => {
    let rows = $("#rows-input").val() || 10
    let columns = $("#columns-input").val() || 10
    board = new GoldRush(rows, columns)
    document.documentElement.style.setProperty("--rowNum", rows);
    document.documentElement.style.setProperty("--colNum", columns);
    startGame()
}
getMatrixSize()
const calculatingTheWinner = () => {
    board.player1.Score > board.player2.Score ? alert("Player 1 is thw WINNER") : null
    board.player1.Score < board.player2.Score ? alert("Player 2 is thw WINNER") : null
    board.player1.Score == board.player2.Score ? alert("You two are the VICTORS") : null
}
const checkWahtsClicked = (player, direction) => {
    board.movePlayer(player, `${direction}`);
    renderer.renderBoard(board.matrix)
    renderer.renderScore({ player1: board.player1.Score, player2: board.player2.Score })
    getIconFuch()
    setTimeout(() => {
        board.findCoordinate("C") ? null : alert("GAME OVER") + calculatingTheWinner() + getMatrixSize()
    })
}
$(document).keypress(function (str) {
    str.which == 119 ? checkWahtsClicked(1, "up") : null;
    str.which == 115 ? checkWahtsClicked(1, "down") : null;
    str.which == 97 ? checkWahtsClicked(1, "left") : null;
    str.which == 100 ? checkWahtsClicked(1, "rigth") : null;
    str.which == 105 ? checkWahtsClicked(2, "up") : null;
    str.which == 107 ? checkWahtsClicked(2, "down") : null;
    str.which == 106 ? checkWahtsClicked(2, "left") : null;
    str.which == 108 ? checkWahtsClicked(2, "rigth") : null;
})