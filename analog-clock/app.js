const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hourDiv = document.getElementById('hour');

var min;
var hour;
let ptns = 0;
const confirmTime = document.querySelector(".confirm");

let seconds = setInterval(updateClock, 1000);

function updateClock() {

    let date = new Date();
    let sec = date.getSeconds() / 60;
    let min = (date.getMinutes() + sec) / 60;
    let hour = (date.getHours() + min) / 12;

    secDiv.style.transform = "rotate(" + (sec * 360) + "deg)"
    minDiv.style.transform = "rotate(" + (min * 360) + "deg)"
    hourDiv.style.transform = "rotate(" + (hour * 360) + "deg)"

}

updateClock();

function randomClock() {
    confirmTime.style.visibility = "visible";
    document.getElementById('verify').innerHTML = "";
    clearInterval(seconds);
    let sec = 0;
    min = Math.floor(Math.random() * 60) + 1;
    hour = Math.floor(Math.random() * 12) + 1;

    secDiv.style.transform = "rotate(" + (sec * 6) + "deg)"
    minDiv.style.transform = "rotate(" + (min * 6) + "deg)"
    hourDiv.style.transform = "rotate(" + (hour * 30) + "deg)"
}

document.addEventListener("DOMContentLoaded", () => {
    const randomTime = document.querySelector(".random-time");
    randomTime.addEventListener("click", () => randomClock());
});

function timeCheck() {
    let inputHour = document.getElementById('input-hour').value;
    let inputMin = document.getElementById('input-min').value;


    if (inputHour == hour && inputMin == min) {
        console.log("yes");
        document.getElementById('verify').innerHTML = "Brawo !!!";
        ptns = ptns + 1;
        document.getElementById('points').innerHTML = ptns;
        confirmTime.style.visibility = "hidden";

    } else {
        document.getElementById('verify').innerHTML = "Błąd";
        console.log("no");
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const confirmTime = document.querySelector(".confirm");
    confirmTime.addEventListener("click", () => timeCheck());
});