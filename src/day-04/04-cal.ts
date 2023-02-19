import { readFile, readFileSync } from 'fs';
import path from 'path';

export function day04() {
  runp1();
  // runp2();
}

const runp1 = () => {
  const filePath = path.join(__dirname, './day.txt');
  const readLines = readFileSync(filePath, 'utf-8');
  const lines = readLines.split('\n');
  // console.log(games);
  let completeOverlap = 0;
  let partialOverlap = 0;
  for (const line of lines) {
    // 2-88,13-89
    const firstIntervalSeparator = line.indexOf('-');
    const secondIntervalSeparator = line.indexOf(
      '-',
      firstIntervalSeparator + 1
    );
    const pairSeparator = line.indexOf(',');
    const s1 = parseInt(line.substring(0, firstIntervalSeparator), 10);
    const s2 = parseInt(
      line.substring(pairSeparator + 1, secondIntervalSeparator),
      10
    );
    const e1 = parseInt(
      line.substring(firstIntervalSeparator + 1, pairSeparator),
      10
    );
    const e2 = parseInt(line.substring(secondIntervalSeparator + 1), 10);
    if (isCompleteOverlap(s1, e1, s2, e2)) completeOverlap += 1;
    if (isPartialOverlap(s1, e1, s2, e2)) partialOverlap += 1;

    // console.log({
    //   firstIntervalSeparator,
    //   secondIntervalSeparator,
    //   pairSeparator,
    // });
    // console.log({
    //   s1,
    //   e1,
    //   s2,
    //   e2,
    // });
  }
  console.log({ completeOverlap, partialOverlap });
};
// 1  2  3  4  5  6  7  8  9
//    s1             e1
//          s2    e2

//    s2             e2
//          s1    e1
const isCompleteOverlap = (
  s1: number,
  e1: number,
  s2: number,
  e2: number
): boolean => {
  if (s1 <= s2 && e1 >= e2) return true;
  if (s2 <= s1 && e2 >= e1) return true;

  return false;
};
const isPartialOverlap = (
  s1: number,
  e1: number,
  s2: number,
  e2: number
): boolean => {
  if ((s2 >= s1 && s2 <= e1) || (s1 >= s2 && s1 <= e2)) return true;

  return false;
};
