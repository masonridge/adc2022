import { readFile, readFileSync } from 'fs';
import path from 'path';

export function day02() {
  /*
  ROCK -1
  A
  X

  PAPER -2
  B
  Y

  SCISSOR -3
  C
  Z

  OUTCOME
  0 - LOSE
  3 - DRAW
  6 - WIN


  */

  runStrat();
  runStrat2();
}

const gameScore = (oCh: string, pCh: string) => {
  let result = 0;
  if (oCh === 'A') {
    // opponent choses rock
    switch (pCh) {
      case 'X':
        result = 3; // rock
        break;
      case 'Y':
        result = 6; // paper
        break;
      default:
        result = 0;
    }
  } else if (oCh === 'B') {
    // opponent choses paper
    switch (pCh) {
      case 'X':
        result = 0; // rock
        break;
      case 'Y':
        result = 3; // paper
        break;
      default:
        result = 6;
        break;
    }
  } else if (oCh === 'C') {
    // opponent choses scissor
    switch (pCh) {
      case 'X':
        result = 6; // rock
        break;
      case 'Y':
        result = 0; // paper
        break;
      default:
        result = 3;
    }
  }
  return result;
};

const choiceScore = (pCh: string) => {
  let result = 0;
  switch (pCh) {
    case 'X':
      result = 1;
      break;
    case 'Y':
      result = 2;
      break;

    default:
      result = 3;
      break;
  }
  return result;
};

const playGame = (oCh: string, pCh: string) => {
  const scoreFromGame = gameScore(oCh, pCh);
  const scoreFromChoice = choiceScore(pCh);
  return scoreFromGame + scoreFromChoice;
};

const runStrat = () => {
  const filePath = path.join(__dirname, './day.txt');
  const readLines = readFileSync(filePath, 'utf-8');
  const games = readLines.split('\n');
  // console.log(games);
  let score = 0;
  for (const game of games) {
    console.log({ i1: game[0], i2: game[2] });
    score += playGame(game[0], game[2]);
  }
  console.log({ score });
  // console.log(playGame('B', 'X'));
};
/*
X-Lose
Y- Draw
Z-Win

LOSE
o       y
---------
A       Z
B       X
C       Y

TIE
o       y
---------
A       X
B       Y
C       Z

WIN
o       y
---------
A       Y
B       Z
C       X

A (X)-Rock
B (Y)- Paper
C (Z)-Scissors


*/
const getPlayerChoice = (oCh: string, desiredOutCome: string) => {
  // lose
  if (desiredOutCome === 'X') {
    if (oCh === 'A') {
      return 'Z';
    } else if (oCh === 'B') {
      return 'X';
    } else if (oCh === 'C') {
      return 'Y';
    }
  }
  // tie
  if (desiredOutCome === 'Y') {
    if (oCh === 'A') {
      return 'X';
    } else if (oCh === 'B') {
      return 'Y';
    } else if (oCh === 'C') {
      return 'Z';
    }
  }
  // tie
  if (desiredOutCome === 'Z') {
    if (oCh === 'A') {
      return 'Y';
    } else if (oCh === 'B') {
      return 'Z';
    } else if (oCh === 'C') {
      return 'X';
    }
  }
};

const playGame2 = (oCh: string, dOc: string) => {
  const pCh = getPlayerChoice(oCh, dOc);
  if (!pCh) throw new Error('Invalid Entry');
  const scoreFromGame = gameScore(oCh, pCh);
  const scoreFromChoice = choiceScore(pCh);
  return scoreFromGame + scoreFromChoice;
};

const runStrat2 = () => {
  const filePath = path.join(__dirname, './day.txt');
  const readLines = readFileSync(filePath, 'utf-8');
  const games = readLines.split('\n');
  // console.log(games);
  let score = 0;
  for (const game of games) {
    console.log({ i1: game[0], i2: game[2] });
    score += playGame2(game[0], game[2]);
  }
  console.log({ score });
  // console.log(playGame('B', 'X'));
};
