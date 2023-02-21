import { readFile, readFileSync } from 'fs';
import path from 'path';

export function day06() {
  // runp1();
  runp2();
}

const runp1 = () => {
  const filePath = path.join(__dirname, './day.txt');
  const file = readFileSync(filePath, 'utf-8');
  parseInput(file);
};

const parseInput = (input: string) => {
  for (let i = 3; i < input.length; i++) {
    let c1 = input[i - 3];
    let c2 = input[i - 2];
    let c3 = input[i - 1];
    let c4 = input[i];

    let isUnique = isUniqueCharacters([c1, c2, c3, c4]);
    // console.log({ isUnique });
    if (isUnique) {
      console.log(`unique at ${i + 1}`);
      break;
    }
  }
  return;
};
const isUniqueCharacters = (args: string[]): boolean => {
  // https://stackoverflow.com/questions/7376598/in-javascript-how-do-i-check-if-an-array-has-duplicate-values
  return new Set(args).size === args.length;
  // console.log(new Set(args).size);
  // console.log(args.length);
  // console.log(args);
  // const m = new Map();
  // for (const val of args) {
  //   if (m.has(val)) {
  //     return false;
  //   }
  //   m.set(val, true);
  // }
  // return true;
};

const runp2 = () => {
  const filePath = path.join(__dirname, './day.txt');
  const file = readFileSync(filePath, 'utf-8');
  parseInput2(file, 14);
};

const parseInput2 = (input: string, markerLen: number) => {
  for (let i = 0; i < input.length; i++) {
    //get 14 chars
    const marker = input.substring(i, i + markerLen);
    if (i > 2100) {
      console.log([...marker], marker);
    }
    let isUnique = isUniqueCharacters([...marker]);
    if (isUnique) {
      console.log(`unique at ${i + markerLen}`);
      break;
    }
  }
  return;
};
