
function daysInMonth(year, month) {
  var days = new Date(year,month,0);
  return days.getDate();
}

export {
  daysInMonth,
};
