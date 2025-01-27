function updateClock(){
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hoursDeg = (hours * 30) + (0.5 * minutes);
    const minutesDeg = (minutes * 6) + (0.1 * seconds);
    const secondsDeg = seconds * 6;


    document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`;
    document.getElementById('minute-hand').style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`;
    document.getElementById('second-hand').style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`;
}
setInterval(updateClock, 1000);
updateClock();
