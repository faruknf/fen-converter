const { isFen } = require("./isFen");

function convert(fen) {
  try {
    const rows = isFen(fen);
    if (rows) {
      const board = [];
      let colIndex = 0;
      let cols = ["a", "b", "c", "d", "e", "f", "g", "h"];

      for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        for (let j = 0; j < rows[rowIndex].length; j++) {
          if (!isNaN(rows[rowIndex][j])) {
            for (let z = 0; z < parseInt(rows[rowIndex][j]); z++) {
              let coordinate = cols[colIndex + z] + (8 - rowIndex).toString();
              board.push({ coordinate, piece: null, color: null });
            }
            colIndex += parseInt(rows[rowIndex][j]);
          } else {
            let coordinate = cols[colIndex] + (8 - rowIndex).toString();
            board.push({
              coordinate,
              piece: setPiece(rows[rowIndex][j]),
              color:
                rows[rowIndex][j].toLowerCase() == rows[rowIndex][j]
                  ? "black"
                  : "white",
            });
            colIndex = colIndex + 1;
          }
        }
        colIndex = 0;
      }

      return board;
    } else {
      throw new Error("Invalid fen");
    }
  } catch (error) {
    console.log(error.message);
  }
}

function setPiece(character) {
  character = character.toLowerCase();
  if (character == "r") {
    return "rook";
  } else if (character == "n") {
    return "knight";
  } else if (character == "b") {
    return "bishop";
  } else if (character == "q") {
    return "queen";
  } else if (character == "k") {
    return "king";
  } else {
    return "pawn";
  }
}

module.exports = convert;
