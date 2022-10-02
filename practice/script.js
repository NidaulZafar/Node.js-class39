console.log('hello world!');

const isWeekend = (day) => {
  if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
    return true;
  } else {
    return false;
  }
}

console.log(`Tuesday is a ${isWeekend('Tuesday') ? 'weekday' : 'weekend'}`)
console.log(`Friday is a ${isWeekend('Friday') ? 'weekday' : 'weekend'}`)
console.log(`Saturday is a ${isWeekend('Saturday') ? 'weekday' : 'weekend'}`)
console.log(`Sunday is a ${isWeekend('Sunday') ? 'weekday' : 'weekend'}`)