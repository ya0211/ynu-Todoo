function getDateArray() {
  let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let date = new Date();
  let year = date.getFullYear();
  let month;
  let day;
  let fullDate;
  let dateArray = [];
  for (let i = 0; i < 7; i++) {
    month = formatLeadingZeroNumber(date.getMonth()+1, 2)
    day = formatLeadingZeroNumber(date.getDate(), 2)
    fullDate = year + '-' + month + "-" + day;
    dateArray.push({ 'week': week[date.getDay()], 'day': date.getDate(), 'date': fullDate });
    date.setDate(date.getDate()+1);
  }
  return dateArray
}

function formatLeadingZeroNumber(n, digitNum = 2) {
  n = n.toString()
  const needNum = Math.max(digitNum - n.length, 0)
  return new Array(needNum).fill(0).join('') + n
}

module.exports = {
  getDateArray,
  formatLeadingZeroNumber
}