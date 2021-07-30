/**
 * There are many cars parked in the parking lot. The parking space is a long straight line, with one parking space per meter. Many cars are currently parked, and you want to shelter from the rain by building a roof. It is required that at least the roofs of k cars are covered by the roofs. What is the minimum length to cover the roofs of k cars?
This function has the following parameters:

cars: an integer array of length, representing the parking space for parking cars
k: Integer, indicating the number of cars that must be covered by the roof
 */

const parkingLot = (cars, k) => {
  /**
   * pseudocod
   *
   * create a min count variable and initialDiff variable
   * find the difference between first item and kth item -1
   * make minCount equal to the initialdiff
   *
   * traverse the array, find the count of values from the second index (i.e i = 1) to kth index
   * check if k is true
   * find the difference between i and k +1
   * check if the difference is less than minval
   * if true, set minVal to equal the difference
   *
   */

  let sortedCars = cars.sort((a, b) => {
    return a - b;
  });
  let minCount = sortedCars[k - 1] - sortedCars[0] + 1;
  for (let i = 1; i < sortedCars.length; i++) {
    if (sortedCars[k]) {
      let diff = sortedCars[k] - sortedCars[i] + 1;
      if (diff < minCount) {
        minCount = diff;
      }
    }
    k++;
  }
  return minCount;
};

console.log(parkingLot([2, 10, 8, 17, 25, 28, 54, 962, 500, 128, 716], 11));

console.log(parkingLot([4, 2, 3, 0, 6, 9], 3));

console.log(parkingLot([0, 3, 7], 3));

console.log(parkingLot([2, 9, 7, 6, 8, 4, 3, 5], 4));

console.log(parkingLot([95, 64, 43, 16, 31, 58, 93, 92, 49, 25, 62, 5, 40], 5));

console.log(
  parkingLot(
    [
      26, 96, 13, 47, 15, 12, 42, 60, 2, 3, 49, 65, 19, 55, 75, 8, 9, 92, 81, 0,
      30, 64, 85, 69, 82, 97, 41, 83, 21, 80, 87, 66, 99, 61, 7, 1, 16, 94, 44,
      77, 39, 25, 90, 11, 31, 38, 27, 98, 88, 54, 51, 52, 63, 70, 79, 17, 84,
      56, 86, 43, 53, 58, 5, 76, 10, 62, 68, 57, 93, 6, 95, 50, 45, 33, 40, 29,
      89, 48, 20, 22, 35, 23, 59, 4, 32, 37, 91, 78, 67, 14, 28, 36, 73, 34,
    ],
    9
  )
);

console.log(
  parkingLot(
    [
      75, 15, 3, 60, 86, 37, 63, 27, 11, 66, 24, 10, 28, 7, 78, 90, 76, 54, 64,
      77, 94, 40, 44, 91, 46, 43, 42, 97, 47, 96, 34, 62, 80, 99, 8, 59, 74, 85,
      16, 61, 95, 20, 41,
    ],
    5
  )
);

console.log(
  parkingLot(
    [
      5, 16, 34, 3, 12, 39, 55, 63, 57, 36, 66, 95, 6, 10, 59, 4, 90, 2, 43, 70,
      92, 1, 33, 77, 56, 41, 28, 25, 80, 75, 83,
    ],
    9
  )
);

console.log(
  parkingLot(
    [
      20, 10, 99, 66, 48, 30, 57, 98, 1, 7, 74, 26, 22, 53, 55, 82, 46, 93, 16,
      36, 64, 14, 72, 24, 84, 29, 44, 94, 81, 63, 95, 11, 45, 80, 52, 90, 58,
      13, 9, 42, 43, 17, 60, 67, 85, 91, 88, 31, 47, 51, 75, 23, 28, 54, 12, 78,
    ],
    23
  )
);
