function reverseArray(arr) {
  let done = []
  for(i = 0; i < arr.length; i++) {
    done.unshift(arr[i]);
  }
  return(done);
}

function reverseArrayInPlace(arr) {
  let temp = '';
  for(i = 0; i < arr.length/2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length-i-1];
    arr[arr.length-i-1] = temp;
  }
  return(arr);
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]