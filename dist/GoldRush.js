class GoldRush extends Matrix {
    constructor(numRows, numColumns) {
        super()
        this.numRows = numRows - 1
        this.numColumns = numColumns - 1

        this.loadBoard(numRows, numColumns)

        this.player1 = {
            location: this.alter(0, 0, "1"),
            Score: 0
        }

        this.player2 = {
            location: this.alter(this.numRows, this.numColumns, "2"),
            Score: 0
        }

    }
    loadBoard(numRows, numColumns) {
        this.generateMatrix(numRows, numColumns)
    }
    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) { line += (this.matrix[i][j] + "\t") }
            console.log(line)
        }
    }
    getRandomCoins() {
        let sumCoins = Math.floor(Math.random() * this.numRows * this.numColumns)
        for (let j = 0; j < sumCoins; j++) {
            let row = Math.floor(Math.random() * (this.numRows + 1))
            let columns = Math.floor(Math.random() * (this.numColumns + 1))
            if ((this.get(row, columns) != "1") &&
                (this.get(row, columns) != "2") &&
                (this.get(row, columns) != "C") &&
                (this.get(row, columns) != "B")) {
                this.alter(row, columns, "C")
            }
        }
    }
    getRandomBlock() {
        let sumBlock = Math.floor(Math.random() * this.numRows * this.numColumns / 2)

        for (let j = 0; j < sumBlock; j++) {

            let row = Math.floor(Math.random() * (this.numRows))
            let columns = Math.floor(Math.random() * (this.numColumns))

            row == 0 ? row += 1 : null; columns == 0 ? columns += 1 : null
            row == this.numRows ? row -= 1 : null; columns == this.numRows ? columns -= 1 : null
            
            this.get(row, columns) != "1" + this.get(row, columns) != "2" +
                this.get(row, columns) != "C" + this.get(row, columns) != "B" ?
                    this.get(row + 1, columns) != "1" + this.get(row, columns + 1) != "1" +
                    this.get(row - 1, columns) != "1" + this.get(row, columns - 1) != "1" +

                    this.get(row + 1, columns) != "2" + this.get(row, columns + 1) != "2" +
                    this.get(row - 1, columns) != "2" + this.get(row, columns - 1) != "2" +

                    this.get(row + 1, columns) != "C" + this.get(row, columns + 1) != "C" +
                    this.get(row - 1, columns) != "C" + this.get(row, columns - 1) != "C" +

                    this.get(row + 1, columns) != "B" + this.get(row, columns + 1) != "B" +
                    this.get(row - 1, columns) != "B" + this.get(row, columns - 1) != "B" ?

                    this.alter(row, columns, "B")

                    : null
                : null
        }
    }
    movePlayer(playernum, direction) {
        let player = this[`player${playernum}`].location
        let location = this.findCoordinate(player)
        const renderCheck = (dir, limits, newX, newY) => {
            if ((direction == dir) && (limits)) {
                if ((this.get(newX, newY) == '1') ||
                    (this.get(newX, newY) == '2') ||
                    (this.get(newX, newY) == 'B')) {
                    console.log(`NOT INSERT!!! => x:${newX}, y:${newY} in use`); return
                }
                this.get(newX, newY) == "C" ? this[`player${playernum}`].Score++ : null
                this.alter(newX, newY, playernum);
                this.alter(location.x, location.y, 'D')
            }
        }
        direction == "up" ? renderCheck('up', location.x > 0, location.x - 1, location.y) : null
        direction == "down" ? renderCheck("down", location.x < this.numRows, location.x + 1, location.y) : null
        direction == "left" ? renderCheck("left", location.y > 0, location.x, location.y - 1) : null
        direction == "rigth" ? renderCheck("rigth", location.y < this.numColumns, location.x, location.y + 1) : null
    }
}