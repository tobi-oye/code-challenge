const reachTheEnd = (matrix, ROW) => {
  matrix = matrix.map((elem) => elem.split(""));
  let COL = matrix[0].length;
  let visited = new Array(ROW);
  for (let i = 0; i < ROW; i++) {
    visited[i] = new Array(COL).fill(false);
  }

  const isSafe = (matrix, row, col, visited) => {
    return (
      row >= 0 &&
      row < ROW &&
      col >= 0 &&
      col < COL &&
      matrix[row][col] === "." &&
      !visited[row][col]
    );
  };

  const DFS = (matrix, row, col, visited) => {
    let rowNbr = [-1, 0, 0, 1],
      colNbr = [0, -1, 1, 0];

    visited[row][col] = true;
    for (let k = 0; k < 4; k++) {
      if (isSafe(matrix, row + rowNbr[k], col + colNbr[k], visited)) {
        count++;
        DFS(matrix, row + rowNbr[k], col + colNbr[k], visited);
      }
    }
  };

  let result = 0;
  let count;
  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      if (matrix[i][j] === "." && !visited[i][j]) {
        count = 1;
        DFS(matrix, i, j, visited);

        result = Math.max(result, count);
      }
    }
  }

  return result;
};

const arr = ["..##", "#..#", "##.."];
console.log(reachTheEnd(arr, 3));
