const countdown = () => {
  const date = new Date("September 13, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = date - now;

  const seconds = 1000;
  const minute = seconds * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let dayText = Math.floor(gap / day);
  let hourText = Math.floor((gap % day) / hour);
  let minuteText = Math.floor((gap % hour) / minute);
  let secondsText = Math.floor((gap % minute) / seconds);
  if (dayText < 10) {
    dayText = "0" + dayText;
  }
  if (hourText < 10) {
    hourText = "0" + hourText;
  }
  if (minuteText < 10) {
    minuteText = "0" + minuteText;
  }
  if (secondsText < 10) {
    secondsText = "0" + secondsText;
  }

  document.querySelector(".day").innerText = dayText;
  document.querySelector(".hour").innerText = hourText;
  document.querySelector(".minute").innerText = minuteText;
  document.querySelector(".seconds").innerText = secondsText;
};
setInterval(countdown, 1000);
