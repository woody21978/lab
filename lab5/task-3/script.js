const arr = [1, [2, 3, 4, "7"], [], null, NaN, "dfsf", 5, 6];
function flatArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    if (Array.isArray(elem) === true) {
      for (let j = 0; j < elem.length; j++) {
        let el = elem[j];
        if (el === parseInt(el)) result.push(el);
      }
    } else if (elem === parseInt(elem)) {
      result.push(elem);
    }
  }
  return result;
}

console.log(flatArray(arr));