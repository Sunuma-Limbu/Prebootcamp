// YOUR CODE BELOW

const ticTacToe = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],

    move(char, rowNum, colNum) {
        if (this.board[rowNum][colNum] === null) {
            this.board[rowNum][colNum] = char;
        }

        console.log(this.board);
        return this.board;
    },

    clear() {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

        return this.board;
    }
};