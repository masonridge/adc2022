import { readFile, readFileSync } from 'fs';
import path from 'path';

// readFile('./day-1.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//   const lines = data.split('\n');
//   // console.log(lines);

//   const elfMap: Map<number, number> = new Map();
//   let runningSum = 0;
//   let index = 1;
//   for (const line of lines) {
//     if (line === '\r') {
//       elfMap.set(index, runningSum);
//       index++;
//       runningSum = 0;
//       continue;
//     }
//     runningSum += parseInt(line, 10);
//   }

//   //max cal
//   let max = 0;
//   let maxIdx = 1;
//   for (const [idx, sum] of elfMap) {
//     if (sum > max) {
//       max = sum;
//       maxIdx = idx;
//     }
//   }
//   console.log({ max, maxIdx });
//   // Part 2

//   const values = elfMap.values();
//   const sortedValues = [...values].sort((a, b) => b - a);
//   const top3 = sortedValues.slice(0, 3);
//   let sum3 = 0;
//   top3.forEach((element) => {
//     sum3 += element;
//   });
//   console.log(top3);
//   console.log(sum3);
// });

export function day01p1() {
  const filePath = path.join(__dirname, './day-1.txt');
  const readLines = readFileSync(filePath, 'utf-8');

  const lines = readLines.split('\n');
  // console.log(lines);

  const elfMap: Map<number, number> = new Map();
  let runningSum = 0;
  let index = 1;
  for (const line of lines) {
    if (line === '\r') {
      elfMap.set(index, runningSum);
      index++;
      runningSum = 0;
      continue;
    }
    runningSum += parseInt(line, 10);
  }

  //max cal
  let max = 0;
  let maxIdx = 1;
  for (const [idx, sum] of elfMap) {
    if (sum > max) {
      max = sum;
      maxIdx = idx;
    }
  }
  // console.log({ max, maxIdx });
  // Part 2

  const values = elfMap.values();
  const sortedValues = [...values].sort((a, b) => b - a);
  const top3 = sortedValues.slice(0, 3);
  let top3Sum = 0;
  top3.forEach((element) => {
    top3Sum += element;
  });
  return {
    max,
    maxIdx,
    top3Sum,
  };
}
