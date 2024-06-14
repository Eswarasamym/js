function* inorderTraversal(arr) {
  for (const element of arr) {
    if (Array.isArray(element)) {
      yield* inorderTraversal(element); // Recursively traverse nested arrays
    } else {
      yield element; // Yield non-array elements
    }
  }
}

// Usage
const arr = [[[6]], [1, 3], []];
const generator = inorderTraversal(arr);
console.log(generator.next().value); // 6
console.log(generator.next().value); // 1
console.log(generator.next().value); // 3
console.log(generator.next().done); // true
