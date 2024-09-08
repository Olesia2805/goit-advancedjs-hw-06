/*
  There is a function getPromise() that returns a promise that is allowed in an array containing strings and numbers.
  Extend this function using generics so that it returns the correct type.
*/

function getPromise(): Promise<(string | number)[]> {
    const promise: Promise<Array<string | number>> = new Promise((resolve) => {
        resolve(['Text', 50]);
    });
    return promise;
}

getPromise()
.then((data) => {
  console.log(data);
});

export {};
