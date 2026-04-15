// YOUR CODE BELOW

const removeColumns = (originalGrid, numColumns) => {
    let newGrid = []

    for (let i = 0; i < originalGrid.length; i++) {
        const currentRow = originalGrid[i]
        const end = Math.max(0, currentRow.length - numColumns)
        newGrid.push(currentRow.slice(0, end))
    }

    return newGrid
}