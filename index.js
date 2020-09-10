const daysLeft = document.getElementById("days");
const hoursLeft = document.getElementById("hours");
const minutesLeft = document.getElementById("minutes");
const secondsLeft = document.getElementById("seconds");
let countDownDate = new Date("Nov 12, 2020 00:00:00").getTime();
let x = setInterval(function (){

    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysLeft.innerHTML = days + "Days";
    hoursLeft.innerHTML = hours + "Hours";
    minutesLeft.innerHTML = minutes + "Minutes";
    secondsLeft.innerHTML = seconds + "Seconds";

    if(distance < 0){

        clearInterval(x);
        launchTime.innerHTML = "Lili's har åpnet! VELKOMMEN!!";
    }
}, 1000);