window.onload = () => {
  let itemList = document.querySelectorAll('p'),
    itemLeft = document.querySelectorAll('.left .item'),
    itemRight = document.querySelectorAll('.right .item'),
    num = 0,
    numRight = num,
    test = [];
    console.log(itemRight);
  document.addEventListener('keydown', function(event) {
    console.log(event.keyCode);
    if (event.keyCode == '40') {
      let active = document.querySelector('p.active');
      active.classList.remove('active');
      num++;
      if (num === itemList.length) {
        num = 0;
      } else if (num === 0) {
        num = itemList.length;
      }
      itemList[num].classList.add('active');
      itemList[num-1].classList.remove('active');
      console.log("Successful keyCode = 40");
    } else if (event.keyCode == '38') {
      if (num === 0) {
        num = itemList.length;
        itemList[0].classList.remove('active');
      }
      num--;
      itemList[num].classList.add('active');
      itemList[num+1].classList.remove('active');
      console.log("Successful keyCode = 38");
    } else if (event.keyCode == '39') {
      itemList[num].classList.remove('active');
      itemRight[num].classList.add('active');
    } else if (event.keyCode == '37') {
      itemRight[num].classList.remove('active');
      itemLeft[num].classList.add('active');
    }
  });
  for (i = 0; i < itemList.length; i++) {
    // itemList[i].addEventListener('click', () => {
    // let active = document.querySelector('p.active');
    // console.log(active);
    // // if (active) {
    // //   active.classList.remove('active');
    // // }
    // this.classList.add('active');
    // console.log(i);
    // });
    itemList[i].onclick = function () {
      let active = document.querySelector('p.active');
    console.log(active);
    if (active) {
      active.classList.remove('active');
    }
    this.classList.add('active');
    }
  }
}