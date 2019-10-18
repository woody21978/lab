window.onload = () => {
  let content = document.querySelector('.content'),
    title = document.querySelector('h1'),
    nameDay = document.querySelectorAll('.day p');
    numberDay = document.querySelectorAll('.day-number p'),
    dayOff = document.querySelectorAll('.day-off'),
    btntext = document.querySelector('.accordion span'),
    spanNumber = document.querySelectorAll('.day-number p span'),
    checkbox = document.querySelector('.checkbox');
    console.log(spanNumber);
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      content.style.background = '#333';
      title.style.color = '#fff';
      for(i = 0; i < nameDay.length; i++) {
        nameDay[i].style.color = '#fff';
        if (i === 5 || i === 6) {
          nameDay[i].style.color = '#6b6868';
        }
      }
      for(j = 0; j < numberDay.length; j++) {
        numberDay[j].style.color = '#fff';
        if (j > 30) {
          numberDay[j].style.color = '#a2a0a0';
        }
      }
      for(k = 0; k < dayOff.length; k++) {
        dayOff[k].style.background = '#6b6868';
      }
      btntext.innerHTML = 'Dark';
    } else {
      content.style.background = '#fff';
      title.style.color = '#000';
      for(k = 0; k < dayOff.length; k++) {
        dayOff[k].style.background = '#f5f5f5';
        // dayOff[k].style.color = '#98928F !important';
      }
      for(i = 0; i < nameDay.length; i++) {
        nameDay[i].style.color = '#000';
        if (i === 5 || i === 6) {
          nameDay[i].style.color = '#C2C2C2';
        }
      }
      for(j = 0; j < numberDay.length; j++) {
        numberDay[j].style.color = '#000';
        if (j > 30) {
          numberDay[j].style.color = '#c2c2c2';
        }
        if (j === 5 || j === 6 || j === 12 || j === 13 || j === 19 || j === 20 || j === 26 || j === 27) {
          numberDay[j].style.color = '#98928f';
        }
      }
      btntext.innerHTML = 'Light';
    } 
  });
  function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let diff = tomorrow - now;
    console.log(Math.round(diff / 1000));
    // spanNumber[17].className = 'current';
    // spanNumber[19-2].classList.remove('current');
    // spanNumber[17+1].className = 'current';;
    setInterval(function(){
      let day = now.getDate();
      spanNumber[day-1].classList.remove('current');
      spanNumber[day].className = 'current';
    }, Math.round(diff / 1000));
  }
  getSecondsToTomorrow();
}