// 1
const replaceString = (text, searchStr, newStr) => {
  if (!text || !searchStr || !newStr) {
    return false;
  }

  // замена всех вхождений
  const newText = text.split(searchStr).join(newStr);

  if (newText === text) {
    return false;
  }

  return newText;
}

console.log(replaceString('Loream inpsum string inpsum', 'inpsum', 'New String'));

// 2
const isArrayEqual = (array1, array2) => {
  if (!array1 || !array2) {
    return false;
  }
  return JSON.stringify(array1) === JSON.stringify(array2);
}

if (isArrayEqual([9, 3], [9, 1])) {
  console.log('массивы совпадают');
} else {
  console.log('массивы не совпадают');
}

const flatArray = inputArray => {
  if (typeof inputArray != 'object') {
    return false;
  }

  let result = [];

  inputArray.forEach(item => {
    if (typeof item == 'object') { // если это массив
      item.forEach(itemArr => {
        result.push(itemArr);
      })
    } else {
      if (typeof item == 'number') {
        result.push(item);
      }
    }
  })

  return result;
}

console.log(flatArray([0, [7, 9, 6], 7, 1, 5]));