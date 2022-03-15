## FEN Converter

"FEN is the abbreviation of Forsyth-Edwards Notation, and it is the standard notation to describe positions of a chess game."->https://www.chess.com/terms/fen-chess

### Input

rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2

### Output

```javascript 
[
  { coordinate: 'a8', piece: 'rook', color: 'black' },
  { coordinate: 'b8', piece: 'knight', color: 'black' },
  { coordinate: 'c8', piece: 'bishop', color: 'black' },
  { coordinate: 'd8', piece: 'queen', color: 'black' },
  { coordinate: 'e8', piece: 'king', color: 'black' },
  { coordinate: 'f8', piece: 'bishop', color: 'black' },
  { coordinate: 'g8', piece: 'knight', color: 'black' },
  { coordinate: 'h8', piece: 'rook', color: 'black' },
  { coordinate: 'a7', piece: 'pawn', color: 'black' },
  { coordinate: 'b7', piece: 'pawn', color: 'black' },
  { coordinate: 'c7', piece: null, color: null },
  { coordinate: 'd7', piece: 'pawn', color: 'black' },
  { coordinate: 'e7', piece: 'pawn', color: 'black' },
  { coordinate: 'f7', piece: 'pawn', color: 'black' },
  { coordinate: 'g7', piece: 'pawn', color: 'black' },
  { coordinate: 'h7', piece: 'pawn', color: 'black' },
  { coordinate: 'a6', piece: null, color: null },
  { coordinate: 'b6', piece: null, color: null },
  { coordinate: 'c6', piece: null, color: null },
  { coordinate: 'd6', piece: null, color: null },
  { coordinate: 'e6', piece: null, color: null },
  { coordinate: 'f6', piece: null, color: null },
  { coordinate: 'g6', piece: null, color: null },
  { coordinate: 'h6', piece: null, color: null },
  { coordinate: 'a5', piece: null, color: null },
  { coordinate: 'b5', piece: null, color: null },
  { coordinate: 'c5', piece: 'pawn', color: 'black' },
  { coordinate: 'd5', piece: null, color: null },
  { coordinate: 'e5', piece: null, color: null },
  { coordinate: 'f5', piece: null, color: null },
  { coordinate: 'g5', piece: null, color: null },
  { coordinate: 'h5', piece: null, color: null },
  { coordinate: 'a4', piece: null, color: null },
  { coordinate: 'b4', piece: null, color: null },
  { coordinate: 'c4', piece: null, color: null },
  { coordinate: 'd4', piece: null, color: null },
  { coordinate: 'e4', piece: 'pawn', color: 'white' },
  { coordinate: 'f4', piece: null, color: null },
  { coordinate: 'g4', piece: null, color: null },
  { coordinate: 'h4', piece: null, color: null },
  { coordinate: 'a3', piece: null, color: null },
  { coordinate: 'b3', piece: null, color: null },
  { coordinate: 'c3', piece: null, color: null },
  { coordinate: 'd3', piece: null, color: null },
  { coordinate: 'e3', piece: null, color: null },
  { coordinate: 'f3', piece: null, color: null },
  { coordinate: 'g3', piece: null, color: null },
  { coordinate: 'h3', piece: null, color: null },
  { coordinate: 'a2', piece: 'pawn', color: 'white' },
  { coordinate: 'b2', piece: 'pawn', color: 'white' },
  { coordinate: 'c2', piece: 'pawn', color: 'white' },
  { coordinate: 'd2', piece: 'pawn', color: 'white' },
  { coordinate: 'e2', piece: null, color: null },
  { coordinate: 'f2', piece: 'pawn', color: 'white' },
  { coordinate: 'g2', piece: 'pawn', color: 'white' },
  { coordinate: 'h2', piece: 'pawn', color: 'white' },
  { coordinate: 'a1', piece: 'rook', color: 'white' },
  { coordinate: 'b1', piece: 'knight', color: 'white' },
  { coordinate: 'c1', piece: 'bishop', color: 'white' },
  { coordinate: 'd1', piece: 'queen', color: 'white' },
  { coordinate: 'e1', piece: 'king', color: 'white' },
  { coordinate: 'f1', piece: 'bishop', color: 'white' },
  { coordinate: 'g1', piece: 'knight', color: 'white' },
  { coordinate: 'h1', piece: 'rook', color: 'white' }
]
```
