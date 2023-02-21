import { readFile, readFileSync } from 'fs';
import path from 'path';

export function day05() {
  // runp1();
  runp2();
}

const runp1 = () => {
  const filePath = path.join(__dirname, './day.txt');
  const readLines = readFileSync(filePath, 'utf-8');
  const rows = readLines.split('\n');
  // console.log(rows);

  //
  type Crate = {
    [key: string]: Array<string>;
  };
  const cols: Crate = {
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [],
  };

  for (const row of rows) {
    for (let i = 1; i < 10; i++) {
      const strIndex = getStringIndexForCol(i);
      if (row[strIndex] !== ' ') {
        cols[i].unshift(row[strIndex]);
      }
    }
  }

  console.log({ cols });

  const filePathMoves = path.join(__dirname, './moves.txt');
  const readLinesMove = readFileSync(filePathMoves, 'utf-8');
  const moves = readLinesMove.split('\n');
  for (const move of moves) {
    const moveArray = move
      .split(' ')
      .filter((e) => !isNaN(Number(e)))
      .map(Number);

    const numMoves = moveArray[0];
    const fromCol = moveArray[1];
    const toCol = moveArray[2];

    // exec the move
    for (let i = 0; i < numMoves; i++) {
      let item = cols[fromCol].pop();
      if (item) {
        cols[toCol].push(item);
      }
    }
  }
  // get top crate from each col and store it in result string
  let result = '';
  for (const col in cols) {
    if (Object.prototype.hasOwnProperty.call(cols, col)) {
      const stack = cols[col];
      const topCrate = stack[stack.length - 1];
      result += topCrate;
    }
  }
  console.log({ result });
};

/*
                [B]     [L]     [S]
[R] [H] [D] [R] [F] [C] [V] [Q] [T]
012345678901234567890123456789012345
 ^   ^   ^   ^   ^   ^   ^   ^   ^
 1   5   9   13  17  21  25  29  33
   4   4   4
*/
const getStringIndexForCol = (col: number): number => {
  console.log(col * 4 - 3);

  return col * 4 - 3;
};

const runp2 = () => {
  const filePath = path.join(__dirname, './day.txt');
  const readLines = readFileSync(filePath, 'utf-8');
  const rows = readLines.split('\n');
  // console.log(rows);

  //
  type Crate = {
    [key: string]: Array<string>;
  };
  const cols: Crate = {
    '1': [],
    '2': [],
    '3': [],
    '4': [],
    '5': [],
    '6': [],
    '7': [],
    '8': [],
    '9': [],
  };

  for (const row of rows) {
    for (let i = 1; i < 10; i++) {
      const strIndex = getStringIndexForCol(i);
      if (row[strIndex] !== ' ') {
        cols[i].unshift(row[strIndex]);
      }
    }
  }

  // console.log('initial', { cols });

  const filePathMoves = path.join(__dirname, './moves.txt');
  const readLinesMove = readFileSync(filePathMoves, 'utf-8');
  const moves = readLinesMove.split('\n');
  for (const move of moves) {
    const moveArray = move
      .split(' ')
      .filter((e) => !isNaN(Number(e)))
      .map(Number);

    const numMoves = moveArray[0];
    const fromCol = moveArray[1];
    const toCol = moveArray[2];

    // exec the move PART ONE
    // for (let i = 0; i < numMoves; i++) {
    //   let item = cols[fromCol].pop();
    //   if (item) {
    //     cols[toCol].push(item);
    //   }
    // }

    // exec the move PART TWO
    let stack = cols[fromCol];
    let removedCrates = stack.splice(stack.length - numMoves, numMoves);
    console.log({ removedCrates });

    cols[toCol].push(...removedCrates);
  }
  // console.log('move', { cols });

  // get top crate from each col and store it in result string
  let result = '';
  for (const col in cols) {
    if (Object.prototype.hasOwnProperty.call(cols, col)) {
      const stack = cols[col];
      let topCrate = stack[stack.length - 1];
      if (!topCrate) topCrate = ' ';
      result += topCrate;
    }
  }
  console.log({ cols });
  console.log({ result });
};
