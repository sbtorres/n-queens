window.findNRooksSolution = function(n) {
  var board = new Board({'n': n});
  var solution = undefined; 
  var counter = 0;

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      board.togglePiece(i, j);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(i, j);
      } else {
        counter++;
      }
    }
  }

  if (counter === n) {
    solution = board.rows();
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

window.countNRooksSolutions = function(num) {
  var solutionCount = 0;
  
  var board = new Board({n: num});

  var findSolution = function(board, row) {
    for (let i = 0; i < board.attributes[row].length; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyRooksConflicts()) {
        if (row === num - 1) {
          solutionCount++;
          board.togglePiece(row, i);
          return;
        }
        findSolution(board, row + 1);
      }
      board.togglePiece(row, i);
    }
  };

  findSolution(board, 0);

  console.log('Number of solutions for ' + num + ' rooks:', solutionCount);
  return solutionCount;
};

window.findNQueensSolution = function(num) {
  if (num === 0 || num === 2 || num === 3) {
    var unsolvableBoard = new Board({n: num});
    var solution = unsolvableBoard.rows();
    console.log('Single solution for ' + num + ' queens:', JSON.stringify(solution));
    return solution;
  }
  
  var solution = undefined;
  var board = new Board({n: num});

  var findSolution = function(board, row) {
    for (let i = 0; i < board.attributes[row].length; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        if (row === num - 1) {
          solution = board.rows();
          break;
        }
        findSolution(board, row + 1);
      }
      if (solution === undefined) {
        board.togglePiece(row, i);
      } else {
        break;
      }
    }
  };

  findSolution(board, 0);

  console.log('Single solution for ' + num + ' queens:', JSON.stringify(solution));
  return solution;
};

window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
