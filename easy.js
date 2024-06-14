function map(arr, fn) {
  const result = [];
  for (const element of arr) {
    result.push(fn(element));
  }
  return result;
}

// Usage
const arr = [1, 2, 3];
const plusone = function (n) {
  return n + 1;
};
const newArray = map(arr, plusone);

console.log(newArray); // Output: [2, 3, 4]
