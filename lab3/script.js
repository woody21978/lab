window.onload = () => {
  let calendar = document.querySelector('.calendar'),
    btntext = document.querySelector('.accordion span'),
    spanNumber = document.querySelectorAll('.day-number p span'),
    checkbox = document.querySelector('.checkbox');
    console.log(spanNumber);
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      calendar.classList.add('dark-calendar');
      btntext.innerHTML = 'Dark';
    } else {
      calendar.classList.remove('dark-calendar');
      btntext.innerHTML = 'Light';
    } 
  });
  // function getSecondsToTomorrow() {
  //   let now = new Date();
  //   let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  //   let diff = tomorrow - now;
  //   console.log(Math.round(diff / 1000));
  //   setInterval(function(){
  //     let day = now.getDate();
  //     spanNumber[day-1].classList.remove('current');
  //     spanNumber[day].className = 'current';
  //   }, Math.round(diff / 1000));
  // }
  // getSecondsToTomorrow();
}