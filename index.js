function fenToObj(fen) {
  const [pieces, activeColor, castling, enPassant, halfMoveClock, fullMove] =
    fen.split(" ");

  const chars = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const rows = pieces.split("/");
  const board = {};

  for (let row = 0; row < 8; row++) {
    // Keep track of how many empty squares have been encountered in the current row
    let skip = 0;

    for (let col = 0; col < rows[row].length; col++) {
      // Check if current square has a piece
      if (isNaN(rows[row][col])) {
        // Assign current piece to square
        board[chars[col + skip] + numbers[7 - row]] = rows[row][col];
      } else {
        // If square is empty
        for (let i = 0; i < parseInt(rows[row][col]); i++) {
          // Set null if the square have no piece
          board[chars[col + i + skip] + numbers[7 - row]] = null;
        }
        // move current column by incrementing skip value
        skip += parseInt(rows[row][col]) - 1;
      }
    }
  }

  return {
    board,
    activeColor,
    castling,
    enPassant,
    halfMoveClock: parseInt(halfMoveClock),
    fullMove: parseInt(fullMove),
  };
}

const fen = "rnbqkbnr/pp1ppppp/8/2p4R/4P3/8/PPPP1PPP/RNBQKBN1 w Qkq c6 0 2";
console.log(fenToObj(fen));
