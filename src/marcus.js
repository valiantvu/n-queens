var countNQueens = function (n) {
  var count = 0;
  var all = (1 << n) - 1;

  var nQueens = function(minC, colC, majC) {
    if (colC === all) {
      count++;
      return;
    }
    var poss =  ~(minC | colC | majC) & all;

    while (poss) {
      var bit = poss & -poss;
      poss = poss^bit;
      nQueens( (minC | bit) << 1, colC | bit, (majC | bit) >> 1);
    }
  };

  nQueens();

  return count;
};



// var countNQueens = function (n) {
//   var count = 0;

//   var nQueens = function(row, colC, minC, majC) {
//     row = row || 0;
//     colC = colC || {};
//     minC = minC || {};
//     majC = majC || {};

//     if (row === n) {
//       count++;
//       return;
//     }
//     for (var i = 0; i < n; i++) {
//       if (!colC[i] && !minC[i + row] && !majC[i - row]) {
//         colC[i] = true;
//         minC[i + row] = true;
//         majC[i - row] = true;
//         nQueens(row + 1, colC, minC, majC);
//         colC[i] = false;
//         minC[i + row] = false;
//         majC[i - row] = false;
//       }
//     }
//   };

//   nQueens();

//   return count;
// };
