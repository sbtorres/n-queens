/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var board = new Board({'n': n});
  var solution = undefined; 
  var counter = 0;

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      board.togglePiece(i, j);
      if(board.hasAnyRooksConflicts()){
        board.togglePiece(i, j);
      } else {
        counter++;
      }
    }
  }

  if(counter === n) {
    solution = board.rows();
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
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
    }
  findSolution(board, 0);

  console.log('Number of solutions for ' + num + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(num) {
  if (num === 0 || num === 2 || num === 3) {
    return new Board({n: num});
  }
  
  var solution = undefined;
  
  var board = new Board({n: num});

    var findSolution = function(board, row) {
      for (let i = 0; i < board.attributes[row].length; i++) {
        board.togglePiece(row, i);
        if (!board.hasAnyQueensConflicts()) {
          if (row === num - 1) {
            solution = board;
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
    }
  findSolution(board, 0);

  console.log('Single solution for ' + num + ' queens:', JSON.stringify(solution.rows()));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', solutionCount);
  return solutionCount;
};