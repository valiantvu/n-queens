
// var attack = function(i, j, board) {
//   return board[i] === board[j] || Math.abs((board[j] - board[i]) / (j - i)) === 1;
// };

var diagonalAttack = function(i, j, board) {
  return Math.abs((j - board[i]) / (board.length - i)) === 1;
};

var nQueensSolutions = function(n) {
  var count = 0;
  if (n === 1) {
     return 1;
  }
  var solve = function(n, board, options) {

    if (board && board.length === n) {
      count++;
      return;
    }

    if (options === undefined) {
      options = [];
      for (var i = 0; i < n; i++)
        options[i] = true;

      // figure this out for odd n
      limit = n % 2 === 0 ? n / 2 : n/2 - 1;


      for (var i = 0; i < limit; i++) {
        board = [i];
        options[i] = false;
        solve(n, board, options);
        options[i] = true;
      }

      if (n % 2 === 1) {
        count *= 2;
        i = Math.floor(n/2);
        board = [i];
        options[i] = false;
        solve(n, board, options);
      }

      n % 2 === 0 && (count *= 2);
      return;

    }

    for (var j = 0; j < options.length; j++) {

      if (!options[j]) {
        continue;
      }

      var skipKey = false;
      for (var ind = 0; ind < board.length; ind++) {
        if (diagonalAttack(ind, j, board)) {
          skipKey = true;
          break;
        }
      }

      if (skipKey) {
        continue;
      }

      options[j] = false;

      solve(n, board.concat(j), options);

      options[j] = true;

    }

  };

  solve(n);

  return count;

};

var tic = function() {
  _start = new Date();
};
var toc = function() {
  console.log((new Date() - _start) / 1000);
};
