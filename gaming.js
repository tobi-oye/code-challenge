/**
 * sort the array,
 * create count variable = 0, levelUpRankingArray
 * if sorted.length is greater than 1  and first element is not equal to zero
 *      increment count
 *      push count into levelUpRanking array
 * traverse the array
 * if value of current index is not equal value of previous index
 *      increment count
 *      push to levelUpRankingArray
 * if value of current index is equal to value of previous index
 *      push count to level up array
 * if value of current index is equal to zero
 *      continue
 *
 * after looping
 * find the last index of k in level up array
 * return the index + 1
 *
 *
 * if sorted elem is less than 1 and first element is equal to zero
 *      return zero
 */

const numPlayer = (scores, k) => {
  let sortedArray = scores.sort((a, b) => b - a);
  let count = 0,
    levelUpArray = [];
  if (sortedArray.length < 1 && sortedArray[0] === 0) {
    return 0;
  }
  if (sortedArray.length > 1 && sortedArray[0] !== 0) {
    count = count + 1;
    levelUpArray.push(count);
  }
  for (let i = 1; i < scores.length; i++) {
    if (sortedArray[i] !== sortedArray[i - 1]) {
      count = count + 1;
      levelUpArray.push(count);
    }
    if (sortedArray[i] === sortedArray[i - 1]) {
      levelUpArray.push(count);
    }
    if (sortedArray[i] === 0) {
      continue;
    }
  }
  let kthElementValue = levelUpArray[k - 1];
  let indexOfKthRank = levelUpArray.lastIndexOf(kthElementValue);
  return indexOfKthRank + 1;
};

let k = 4,
  n = 5,
  scores = [2, 2, 3, 4, 5];
//   scores = [20, 40, 60, 80, 100];
//   scores = [100, 50, 50, 25];

console.log(numPlayer(scores, k));
