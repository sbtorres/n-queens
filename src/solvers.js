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
  // declare a counter variable
  var counter = 0;
  // create for loop from 0 to n that will increment the rows
  for (var i = 0; i < n; i++) {
    // create for loop from 0 to n that will increment the columns
    for (var j = 0; j < n; j++) {
      // change 0,0 to 1 (have a rook in spot)
      board.togglePiece(i, j);
      // check if there are any row conflicts
      // check if there are any col conflicts
      if(board.hasAnyRooksConflicts()){
        // if either is true, 
        // you cannot put a rook there, so change 1 back to 0 at current location
        board.togglePiece(i, j);
      } else {
        // if both are false,
        // increment counter
        counter++;
      }
    }
  }
  // if counter === n
  // return solution 
  if(counter === n) {
    solution = board.rows();
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  // create a board
  var board = new Board({'n': n});
  // toggle the first piece
  // initialize a counter = 1

        // if hasAnyRooksConflicts 
          // counter--
          // return
        // if counter === n
          // solutionCount++
          // return
        // else :
          // for loop incrementing row for i < n and i = 1
            // for loop incrementing column for j < n and j = 0
              // toggle next piece 
              // counter++
              // recursively call this function on the new board
          // counter --
          // increment solutionCount if 

  // call recursive function for first board;
  //   
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
