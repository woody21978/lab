var text = document.querySelector('.text').textContent;
var myText = document.getElementsByClassName('text');
var searchStr = document.getElementsByClassName('search')
var newStr = document.getElementsByClassName('new')

function replaceText() {
  var myRegExp = new RegExp(searchStr[0].value, 'gi');
  var index = text.search(myRegExp);
  if (index >= 0 && searchStr[0].value != '') {
    // text.innerHTML = text.replace(myRegExp, newStr[0].value);
    text = text.replace(myRegExp, newStr[0].value);
    myText[0].innerHTML = text;

  } else {
    alert('Ничего не найдено!!!');
  }
}
// window.onload = () => {
//   let text = document.querySelector('.text').textContent,
//     btn = document.querySelector('.btn');
//   console.log(text);
//   btn.addEventListener('click', () => {
//     let searchStr = document.querySelector('.search').value,
//       newStr = document.querySelector('.new').value,
//       myRegExp = new RegExp(searchStr, 'gi');
//     var index = text.search(myRegExp);
//       // if (index >= 0 && searchStr != '') {
//         text.innerHTML = text.replace(searchStr, newStr);
//       console.log(searchStr + ' : ' + newStr + ' : ' + index);
//       // }
//   });
// }
window.onload = () => {
  let arr = [undefined, null, false, true, NaN],
    btn_work2 = document.querySelector('.btn2'),
    result_block = document.querySelector('.output'),
    result = document.querySelector('.result'),
    result_length = document.querySelector('.length span');
  btn_work2.addEventListener('click', () => {
    let arr_length = document.querySelector('.work-2').value,
      arr_one = [],
      arr_two = [],
      number = [],
      num = 0;
    for (k = 0; k <= 10; k++) {
      //Заполняю массив случайными цифрами
      number[k] = Math.floor(Math.random() * 10);
    }
    for (i = 0; i < arr_length; i++) {
      //Получаю индексы элементов этих массивов для будущего обращения к ним по индексу
      let rand_arr = Math.floor(Math.random() * arr.length),
        rand_number = Math.floor(Math.random() * number.length);
      if (i % 2 === 0) {
        arr_one[i] = arr[rand_arr];
      } else {
        arr_one[i] = number[rand_number];
      }
    }
    for (j = 0; j < arr_length; j++) {
      let rand_arr = Math.floor(Math.random() * arr.length),
        rand_number = Math.floor(Math.random() * number.length);
      if (j % 2 === 0) {
        arr_two[j] = arr[rand_arr];
      } else {
        arr_two[j] = number[rand_number];
      }
    }
    let str_one = arr_one.map(x => '' + x).join(' '),
      str_two = arr_two.map(x => '' + x).join(' ');

    function isArrayEqual() {
      if (str_one === str_two) {
        result.innerHTML = 'true';
        return true;
      } else {
        result.innerHTML = 'false';
        return false;
      }
    }
    isArrayEqual(str_one, str_two);
    result_length.innerHTML = arr_length;
    result_block.innerHTML = 'Массив 1: ' + str_one + ' | Массив 2: ' + str_two;
  });
  let arr_1 = [1,2,[3,4],5];
  function flatArray() {
    for (i = 0; i < arr_1.length; i++) {
      if (arr_1[i] === Object) {
        let new_arr = arr_1[i].join('');
        console.log(new_arr);
      }
    }
  }
  flatArray(arr_1);
}