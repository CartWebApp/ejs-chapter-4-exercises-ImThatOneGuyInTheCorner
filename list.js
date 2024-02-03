function arrayToList(arr) {
  let obj;
  while(arr.length > 0){
    let val = arr.pop();
    if(obj){
      obj = { value: val, rest: obj };
    }else{
      obj = {value:val,rest:null};
    }
  }
  return obj;
}

function listToArray(list, arr = []) {
  arr.push(list.value);
  list = list.rest;
  if(list.rest == null) {
    arr.push(list.value);
    list = list.rest;
    return arr;
  } else {
    return(listToArray(list, arr));
  }
}

function prepend(uno, dos) {
  let pleaseMrFastWhyAreYouDoingThisToUsINeedPhysicalAndMentalHelp = {value: uno, rest: dos};
  return(pleaseMrFastWhyAreYouDoingThisToUsINeedPhysicalAndMentalHelp);
}

function nth(list, slot) {
  if(slot==0) {
    return(list.value);
  } else {
    return(nth(list.rest, slot-1));
  }
}


// tests
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// // → 20
