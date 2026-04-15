// YOUR CODE BELOW

const makeGrid = (numColumns, numRows) => {
    let grid = []

    for (let i = 0; i < numRows; i++) {
        let row = []

        for (let j = 1; j <= numColumns; j++) {
            row.push(j)
        }

        grid.push(row)
    }

    return grid;
}