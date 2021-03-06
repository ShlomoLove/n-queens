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
  let board = new Board ({n})
  var solution; 

  let recurseCheck = (row = 0) => {
    if (row < n ) {
      for (let col = 0; col < n; col++) {
        board.togglePiece(row, col);
        if (!board.hasColConflictAt(col)) {
          recurseCheck(row + 1)
        } else {
          board.togglePiece(row, col);
        }
      }
    }
    solution = board.rows()
    return 
  }
  recurseCheck();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution ? solution : board.rows()
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other

// window.countNRooksSolutions = function(n) {
//   if (n === 1) {
//     return 1
//   }
//   for (let i = n - 1; i >= 1; i--) {
//     n *= i; 
//   }
//   return n; 
// };

// window.countNRooksSolutions = function(n) {
//   var solutionCount = 0;
//   let board = new Board ({n})
  
//   let recurseCount = (row = 0) => {
//     if (row < n) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
//       for (let col = 0; col < n; col++) {
//         board.togglePiece(row, col);
//         if (board.hasAnyRooksConflicts()) {
//          board.togglePiece(row, col)
//         } else {
//         if (row === n-1) {
//           solutionCount += 1;
//           board.togglePiece(row, col)
//         } else {
//           recurseCount (row + 1)
//           board.togglePiece (row, col )
//           }
//         }
//       }
//     }  
//   }
//   recurseCount (); 
//   console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
//   return solutionCount;
// };

window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  let board = new Board ({n})
  
  let recurseCount = (row = 0) => {
    if (row < n) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
      for (let col = 0; col < n; col++) {
        board.togglePiece(row, col);
        if (!board.hasColConflictAt(col)) {
          if (row === n-1) {
            solutionCount += 1;
            board.togglePiece(row, col)
            return;
          } else {
            recurseCount(row + 1)
          }
        }
        board.togglePiece(row, col)
      }
    }
  }
  recurseCount (); 
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  let board = new Board ({n})
  let solution;
  
  let recurse = (row = 0) => {
    if (row < n) {
      for (let col = 0; col < n; col++) {
        board.togglePiece(row, col);
        if (!board.hasAnyQueensConflicts()) {
          recurse (row + 1)
        }
        board.togglePiece(row, col)
      }
    } else {
      solution = board.rows().map (row => row.slice());
      return 
    }
  }
  recurse(); 
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution ? solution : board.rows().map (x => x.slice()) ;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  let board = new Board ({n})

  if (n === 0 || n === 1) {
    return 1; 
  }

  if (n === 3 || n === 2) {
    return 0;
  }

  let recurseCount = (row = 0) => {
    if (row < n) {
      for (let col = 0; col < n; col++) {
        board.togglePiece(row, col);
        if (!board.hasAnyQueensConflicts()) {
          if (row === n-1){
            solutionCount += 1;
            board.togglePiece(row, col);
          } else {
            recurseCount (row + 1)
            board.togglePiece(row, col);
          } 
        } else {
          board.togglePiece (row, col)
        }
      }
    }
  }
  recurseCount();
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};