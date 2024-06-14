// Step 1: Define the generator function
const generatorFunction = function* () {
  return 42;
};

// Step 2: Create a function to make the generator cancellable
function cancellable(generator) {
  let isCancelled = false;
  let resolvePromise;

  const promise = new Promise((resolve, reject) => {
    resolvePromise = resolve;
    const iterator = generator();

    function step() {
      if (isCancelled) {
        reject(new Error("Cancelled"));
      } else {
        const { value, done } = iterator.next();
        if (done) {
          resolve(value);
        }
      }
    }

    step();
  });

  const cancel = () => {
    isCancelled = true;
  };

  return [cancel, promise];
}

// Usage
const generator = generatorFunction();
const [cancel, promise] = cancellable(generator);
setTimeout(cancel, 100);

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

// Output: {"resolved": 42}
// The promise resolves immediately because the generator function immediately returns 42.
