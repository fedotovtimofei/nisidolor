const model = {
  x: [
    { value: 1, time: '2022-01-01' },
    { value: 2, time: '2022-01-02' },
    { value: 3, time: '2022-01-03' }
  ]
};

const mergedAxes = mergeChildAxis(model, 'x');

console.log(mergedAxes); // Output: [
//   { value: 1, time: '2022-01-01' },
//   { value: 2, time: '2022-01-02' },
//   { value: 3, time: '2022-01-03' }
// ]
