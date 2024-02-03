// Comments are the only way I can function now

function deepEqual(value, reference) {
  // Iterate for each operator
  for(i = 0; i < Object.keys(value).length; i++) {
    // Grab that key 😎
    let key = Object.keys(value)[i];
    if (typeof reference[key] == 'object') {
      // Recursionize through until you get that bottom of the barrel type values
      return(deepEqual(value[key], reference[key]));
    }
    else if(value[key] === reference[key]) {
      // Now that I know that both objects are not objects but values we compare em'
      return(true);
    }
    else {
      return(false);
    }
    // Hot diggity dog.. I can go to sleep now!! 🥳🛌zzz
  }
}






// tests
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
