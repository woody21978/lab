function time(one, two) {
  let oneTimeStart = one[0].split(":"),
    oneHoursStart = oneTimeStart[0],
    oneMinutesStart = oneTimeStart[1];
  let oneTimeEnd = one[1].split(":"),
    oneHoursEnd = oneTimeEnd[0],
    oneMinutesEnd = oneTimeEnd[1];
  let twoTimeStart = two[0].split(":"),
    twoHoursStart = twoTimeStart[0],
    twoMinutesStart = twoTimeStart[1];
  let twoTimeEnd = two[1].split(":"),
    twoHoursEnd = twoTimeEnd[0],
    twoMinutesEnd = twoTimeEnd[1];
  let oneRangeStart = new Date(),
    oneRangeEnd = new Date(),
    twoRangeStart = new Date(),
    twoRangeEnd = new Date();

  oneRangeStart.setHours(oneHoursStart, oneMinutesStart);
  oneRangeEnd.setHours(oneHoursEnd, oneMinutesEnd);
  twoRangeStart.setHours(twoHoursStart, twoMinutesStart);
  twoRangeEnd.setHours(twoHoursEnd, twoMinutesEnd);

  // if (oneRangeStart.getTime() > twoRangeStart.getTime() && oneRangeStart.getTime() < twoRangeEnd.getTime()) {
  //   console.log('Время ' + one[0] + ' входит в диапозон ' + two[0] + ' и ' + two[1]);
  // } else {
  //   console.log('Время ' + one[0] + ' не входит в диапозон ' + two[0] + ' и ' + two[1]);
  // }

  // if (twoRangeStart.getTime() >  oneRangeStart.getTime() && twoRangeStart.getTime() < oneRangeEnd.getTime()) {
  //   console.log('Время ' + two[0] + ' входит в диапозон ' + one[0] + ' и ' + one[1]);
  // } else {
  //   console.log('Время ' + two[0] + ' не входит в диапозон ' + one[0] + ' и ' + one[1]);
  // }

  // if (oneRangeEnd.getTime() > twoRangeStart.getTime() && oneRangeEnd.getTime() <  twoRangeEnd.getTime()) {
  //   console.log('Время ' + one[1] + ' входит в диапозон ' + two[0] + ' и ' + two[1]);
  // } else {
  //   console.log('Время ' + one[1] + ' не входит в диапозон ' + two[0] + ' и ' + two[1]);
  // }
  //  if (twoRangeEnd.getTime() > oneRangeStart.getTime() && twoRangeEnd.getTime() <  oneRangeEnd.getTime()) {
  //   console.log('Время ' + two[1] + ' входит в диапозон ' + one[0] + ' и ' + one[1]);
  // } else {
  //   console.log('Время ' + two[1] + ' не входит в диапозон ' + one[0] + ' и ' + one[1]);
  // }
  if (oneRangeEnd.getTime() <= twoRangeStart.getTime()) {
    return false;
  }
  if (oneRangeEnd.getTime() >= twoRangeStart.getTime()) {
    return true;
  }
}

console.log(time(['09:00','09:30'],['08:35','10:00']));
console.log(time(['06:00','07:30'],['08:35','10:00']));
console.log(time(['09:00','09:30'],['09:00','09:30']));

