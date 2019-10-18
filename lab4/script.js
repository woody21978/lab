window.onload = () => {
  let itemList = document.querySelectorAll('p'),
    num = 0,
    test = [];
  document.addEventListener('keydown', function(event) {
    console.log(event.keyCode);
    if (event.keyCode == '40') {
      let active = document.querySelector('p.active');
      active.classList.remove('active');
      num++;
      itemList[num].classList.add('active');
      itemList[num-1].classList.remove('active');
      console.log("Successful keyCode = 40");
    } else if (event.keyCode == '38') {
      num--;
      itemList[num+1].classList.remove('active');
      itemList[num].classList.add('active');
      console.log("Successful keyCode = 38");
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