function isFen(fen) {
  const parts = split(fen)[0];

  const rows = parts.split("/");

  if (rows.length != 8) {
    return false;
  }

  for (let i = 0; i < rows.length; i++) {
    var counter = 0;
    for (let j = 0; j < rows[i].length; j++) {
      if (!isValidCharacter(rows[i][j])) {
        return false;
      }
      counter += getRowCharacterLength(rows[i][j]);
    }
    if (counter != 8) {
      return false;
    }
  }
  return rows;
}

function getRowCharacterLength(character) {
  let counter = 0;
  if (!isNaN(character)) {
    counter += parseInt(character);
  } else {
    counter += 1;
  }
  return counter;
}

function split(fen) {
  return fen.split(" ");
}

function isValidCharacter(character) {
  character = character.toLowerCase();
  if (
    character == "r" ||
    character == "p" ||
    character == "n" ||
    character == "b" ||
    character == "q" ||
    character == "k" ||
    character == "/" ||
    (!isNaN(character) && parseInt(character) <= 8 && parseInt(character) >= 1)
  ) {
    return true;
  }
  return false;
}

module.exports = { isFen, split, isValidCharacter, getRowCharacterLength };
