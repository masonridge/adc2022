import { readFile, readFileSync } from 'fs';
import path from 'path';

export function day03() {
  // runp1();
  runp2();
}

const runp1 = () => {
  const filePath = path.join(__dirname, './day.txt');
  const readLines = readFileSync(filePath, 'utf-8');
  const lines = readLines.split('\n');
  // console.log(games);
  let prioritySum = 0;
  for (const line of lines) {
    // split each rucksack into 2.
    const firstHalf = getFirstHalf(line);
    const secondHalf = getSecondHalf(line);
    // console.log({ firstHalf, secondHalf });

    // find shared char
    const sharedChar = getSharedChar(firstHalf, secondHalf);

    // find priority of shared char
    const priority = getSharedCharPriority(sharedChar);
    // add priority to sum of priorities
    prioritySum += priority;
  }
  console.log({ prioritySum });
};

const getFirstHalf = (rucSac: string) => {
  return rucSac.slice(0, rucSac.length / 2);
};
const getSecondHalf = (rucSac: string) => {
  return rucSac.slice(rucSac.length / 2);
};
const getSharedCharPriority = (char: string) => {
  const allChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (allChar.includes(char)) {
    return allChar.indexOf(char) + 1;
  }
  throw new Error(`Char ${char} not found`);
};
const getSharedChar = (s1: string, s2: string) => {
  for (const char of s1) {
    if (s2.includes(char)) {
      return char;
    }
  }
  throw new Error(`Match not found`);
};

const runp2 = () => {
  const filePath = path.join(__dirname, './day.txt');
  const readLines = readFileSync(filePath, 'utf-8');
  const lines = readLines.split('\n');
  // console.log(games);
  let prioritySum = 0;
  // get every three lines
  for (let i = 2; i < lines.length; i += 3) {
    const firstLine = lines[i - 2];
    const secondLine = lines[i - 1];
    const thirdLine = lines[i];
    //find match between three rucksacks
    const matchChar = matchCharInThreeSacks(firstLine, secondLine, thirdLine);
    //get priority of the shared char
    const priority = getSharedCharPriority(matchChar);
    //add priorities
    prioritySum += priority;
  }

  console.log({ prioritySum });
};

const matchCharInThreeSacks = (
  sack1: string,
  sack2: string,
  sack3: string
): string => {
  for (const char of sack1) {
    if (sack2.includes(char) && sack3.includes(char)) {
      return char;
    }
  }
  throw new Error(`No match found`);
};
