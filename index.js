/*set interval matlab karte raho */
setInterval(() => {
    d = new Date();
    hrs = d.getHours();
    mins = d.getMinutes();
    secs = d.getSeconds();

    hrRotation = 30*hrs + mins/2;
    minRotation = 6*mins;
    secRotation = 6*secs;

    hour.style.transform = `rotate(${hrRotation}deg)`;
    minute.style.transform = `rotate(${minRotation}deg)`;
    second.style.transform = `rotate(${secRotation}deg)`;
}, 1000);