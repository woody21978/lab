window.onload = () => {
  let calendar = document.querySelector('.calendar'),
    title = document.querySelector('h1'),
    nameDay = document.querySelectorAll('.day p');
    numberDay = document.querySelectorAll('.day-number p'),
    dayOff = document.querySelectorAll('.weekend-day'),
    btntext = document.querySelector('.accordion span'),
    spanNumber = document.querySelectorAll('.day-number p span'),
    checkbox = document.querySelector('.checkbox');
    console.log(spanNumber);
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      calendar.classList.add('dark-calendar');
      title.classList.add('dark-title');
      for(i = 0; i < nameDay.length; i++) {
        nameDay[i].classList.add('dark-day')
        if (i === 5 || i === 6) {
          nameDay[i].classList.add('dark-weekends');
        }
      }
      for(j = 0; j < numberDay.length; j++) {
        numberDay[j].classList.add('dark-day-number');
        if (j === 0 || j > 31) {
          numberDay[j].classList.add('dark-next-month');
        }
      }
      for(k = 0; k < dayOff.length; k++) {
        dayOff[k].classList.add('dark-weekend-day');
      }
      btntext.innerHTML = 'Dark';
    } else {
      calendar.classList.remove('dark-calendar');
      title.classList.remove('dark-title');
      for(k = 0; k < dayOff.length; k++) {
        dayOff[k].classList.remove('dark-weekend-day');
      }
      for(i = 0; i < nameDay.length; i++) {
        nameDay[i].classList.remove('dark-day')
        if (i === 5 || i === 6) {
          nameDay[i].classList.remove('dark-weekends');
        }
      }
      for(j = 0; j < numberDay.length; j++) {
        numberDay[j].classList.remove('dark-day-number');
        if (j === 0 || j > 30) {
          numberDay[j].classList.remove('dark-next-month');
        }
        // if (j === 5 || j === 6 || j === 12 || j === 13 || j === 19 || j === 20 || j === 26 || j === 27) {
        //   numberDay[j].style.color = '#98928f';
        // }
      }
      btntext.innerHTML = 'Light';
    } 
  });
  function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let diff = tomorrow - now;
    console.log(Math.round(diff / 1000));
    // spanNumber[19].className = 'current';
    // spanNumber[19-1].classList.remove('current');
    setInterval(function(){
      let day = now.getDate();
      spanNumber[day-1].classList.remove('current');
      spanNumber[day].className = 'current';
    }, Math.round(diff / 1000));
  }
  getSecondsToTomorrow();
}