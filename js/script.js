
const display = document.querySelector('.clock');

const clock = setInterval(writeClock, 1000);
writeClock();

function writeClock(){
  const now = new Date();

  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  if(hour < 10) hour = '0'+hour;
  if(min < 10) min = '0'+min;
  if(sec < 10) sec = '0'+sec;

  display.innerHTML = `${hour}:${min}:${sec}`;

}
