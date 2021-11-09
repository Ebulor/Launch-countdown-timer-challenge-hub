const countdown = () =>{
    const date = new Date ('August 4, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = date - now;

    const seconds = 1000;
    const minute = seconds * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const dayText = Math.floor(gap / day);
    const hourText = Math.floor((gap % day) / hour);    
    const minuteText = Math.floor((gap % hour) / minute);
    const secondsText = Math.floor((gap % minute) / seconds);

    document.querySelector(".day").innerText = dayText;
    document.querySelector(".hour").innerText = hourText;
    document.querySelector(".minute").innerText = minuteText;
    document.querySelector(".seconds").innerText = secondsText;

        
}
setInterval(countdown, 1000);