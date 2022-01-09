/**
 Do not return anything, modify board in-place instead.
 */

function solve(board: string[][]): boolean {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        const validValues = new Set([
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
        ]);
        // Remove all invalid values (not matching the conditions)

        // check column
        for (let c = 0; c < 9; c++) {
          const cell = board[i][c];
          if (cell !== ".") {
            validValues.delete(cell);
          }
        }
        // check row
        for (let r = 0; r < 9; r++) {
          const cell = board[r][j];
          if (cell !== ".") {
            validValues.delete(cell);
          }
        }

        // calculate positions of the current 3x3 board
        const row = Math.floor(i / 3) * 3;
        const col = Math.floor(j / 3) * 3;
        for (let r = row; r < row + 3; r++) {
          for (let c = col; c < col + 3; c++) {
            const cell = board[r][c];
            if (cell !== ".") {
              validValues.delete(cell);
            }
          }
        }

        const values = Array.from(validValues);
        for (const value of values) {
          board[i][j] = value;
          if (solve(board)) {
            return true;
          } else {
            board[i][j] = ".";
          }
        }
        return false;
      }
    }
  }
  return true;
}
export function solveSudoku(board: string[][]): void {
  solve(board);
}
