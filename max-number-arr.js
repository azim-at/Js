let arr = [22, 33, 41, 20, 1];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i]
    }
}
console.log(max);