const arr = [1, 2, 3, 4, 5];

const getMinMaxSum = () => {
let minimum = Math.min(...arr);
let maximum = Math.max(...arr);

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
console.log(`${minimum},${maximum},${sum}`)

}

getMinMaxSum(arr)
