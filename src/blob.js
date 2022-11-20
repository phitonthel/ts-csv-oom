const { Blob } = require('node:buffer');

const arr = Array(1000).fill(1)

const blob = new Blob(arr);

console.log(blob);