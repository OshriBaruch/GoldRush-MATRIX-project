class Matrix {
    constructor(rowNum, colNum) {
        this.matrix = this.generateMatrix(rowNum, colNum) || []
    }
    generateMatrix(numRows, numColumns) {
        for (let r = 0; r < numRows; r++) {
            this.matrix.push([])
            for (let c = 0; c < numColumns; c++) { this.matrix[r].push('D') }
        }
        return this.matrix
    }
    alter(rowNum, colNum, newVal) { 
        return this.matrix[rowNum][colNum] ? this.matrix[rowNum][colNum] = newVal : null 
    }
    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) { line += (this.matrix[i][j] + "\t") }
            console.log(line)
        }
    }
    get(rowNum, colNum) { 
        return this.matrix[rowNum][colNum] ? this.matrix[rowNum][colNum] : null 
    }
    printRow(rowNum) { 
        return this.matrix[rowNum] 
    }
    printColumn(colNum) {
        let column = [];
        for (let i = 0; i < this.matrix.length; i++) {
            column.push(this.matrix[i][colNum])
        }
        return column
    }
    findCoordinate(value) {
        for (let r = 0; r < this.matrix.length; r++) {
            for (let c = 0; c < this.matrix[r].length; c++) {
                if (value == this.matrix[r][c]) { return { x: r, y: c } }
            }
        }
        return false
    }
}