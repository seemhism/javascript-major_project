const day1 = document.getElementById("day");
const hour1 = document.getElementById("hour");
const minute1 = document.getElementById("minute");
const second1 = document.getElementById("second");



const newBirthday = "2 April 2023";


function countdown() {
    const newBirthDate = new Date(newBirthday);
    const currentDate = new Date();
    const totalseconds = (newBirthDate - currentDate) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600 % 24);
    const minutes = Math.floor(totalseconds / 60 ) % 60;
    const seconds = Math.floor(totalseconds % 60);
    // console.log(days, hours, minutes, seconds);
    
    day1.innerHTML = formatTime(days);
    hour1.innerHTML = formatTime(hours);
    minute1.innerHTML = formatTime(minutes);
    second1.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}
 /// initial call
countdown();

setInterval(countdown, 1000);