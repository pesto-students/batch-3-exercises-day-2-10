
function parseMs(ms) {
  let ms = 
  let seconds = ms/1000;
  let minutes  = seconds/60;
  let hours = minutes/60;
  let days = hours/24;

  return {
    days:days
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    milliseconds: 400,
  };
}

export {
  parseMs,
};
