const { expect } = require("@jest/globals");
const {
  isFen,
  split,
  isValidCharacter,
  getRowCharacterLength,
} = require("../src/isFen");

test("The fen should be splitting to 6 parts", () => {
  expect(
    split("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1").length
  ).toBe(6);
});

test("The first part of the fen must either contain the words r,n,b,q,k  or number or /", () => {
  expect(isValidCharacter("n")).toBe(true);
  expect(isValidCharacter("/")).toBe(true);
  expect(isValidCharacter("K")).toBe(true);
  expect(isValidCharacter("f")).toBe(false);
  expect(isValidCharacter("2")).toBe(true);
});

test("The characters of each row must be 8 characters", () => {
  expect(getRowCharacterLength("b")).toBe(1);
  expect(getRowCharacterLength("7")).toBe(7);
});

test("The fen string must be proper to convert", () => {
  expect(
    isFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
  ).toBeTruthy();
});
