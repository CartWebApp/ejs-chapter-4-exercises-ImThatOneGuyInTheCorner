function range(start, end, step = 1) {
  let ran = []
  if(step <= 0) {
    for(i = start; i > (end - 1); i += step) {
      ran.push(i);
    }
  } else {
    for(i = start; i < (end + 1); i += step) {
      ran.push(i);
    }
  }
  return(ran);
}

function sum(numbers) {
  let done = 0;
  for(i = 0; i < numbers.length; i++) {
    done += numbers[i];
  }
  return done;
}






// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
