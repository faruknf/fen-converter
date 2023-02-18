## FEN Converter

"FEN is the abbreviation of Forsyth-Edwards Notation, and it is the standard notation to describe positions of a chess game."

**https://www.chess.com/terms/fen-chess**

### Input

"rnbqkbnr/pp1ppppp/8/2p4R/4P3/8/PPPP1PPP/RNBQKBN1 w Qkq c6 0 2"

### Output

```javascript 
{
  board: {
    a8: 'r',
    b8: 'n',
    c8: 'b',
    d8: 'q',
    e8: 'k',
    f8: 'b',
    g8: 'n',
    h8: 'r',
    a7: 'p',
    .
    .
    .
    f1: 'B',
    g1: 'N',
    h1: null
  },
  activeColor: 'w',
  castling: 'Qkq',
  enPassant: 'c6',
  halfMoveClock: 0,
  fullMove: 2
}
```
