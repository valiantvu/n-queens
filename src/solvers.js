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
  var solution;
  var board = new Board({n: n});
  for (var i = 0; i < n; i++){
    board.togglePiece(i, i);
  }
  solution = board.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  var options = [];
  // create an array of possibilities for the current row
  for (var i = 0; i < n; i++){
    var option = _.range(n).map(function(val, index){
      if (index === i){
        val = 1;
      } else {
        val = 0;
      }
      return val;
    });
    options.push(option);
  }

  // recursive function
  var rookSolutions = function(count){

    if (n === 1){
      var board = new Board(options);
      if (!board.hasAnyRooksConflicts()){
        solutionCount++;
      }
    }

    if (count === 1){
      return options.map(function(x) { return [x];});
    }

    // decrement count
    count--;
    // if count is greater than 0
    if (count > 0){
      // call recursive function passing in count
      // store results
      var results = rookSolutions(count);
      var allBoardArrs = [];
      // loop through possibilities
      for (var i = 0; i < options.length; i++){
        // loop through results
        for (var b = 0; b < results.length; b++){
          var nextBoard = false;
          for (var r = 0; r < results[b].length; r++){
            if (results[b][r][i]){
              nextBoard = true;
              break;
            }
          }
          if (nextBoard) {
            continue;
          }
          // create a new array with the current possibility and the current result
          var boardArr = [];
          boardArr.push(options[i]);
          boardArr = boardArr.concat(results[b]);
          allBoardArrs.push(boardArr);
        }
      }
      return allBoardArrs;
    }
  };

  solutionCount = rookSolutions(n).length;

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
