const secDiv = document.getElementById('sec');
const minDiv = document.getElementById('min');
const hourDiv = document.getElementById('hour');
const face = document.getElementById('face');
const verify = document.getElementById('verify');
const style = document.head.appendChild(document.createElement("style"));

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
    document.getElementById('input-hour').value = '';
    document.getElementById('input-min').value = '';

    style.innerHTML = "";


    confirmTime.style.visibility = "visible";
    face.style.background = "yellow";




    clearInterval(seconds);
    let sec = 0;
    min = Math.floor(Math.random() * 59);
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
        face.style.background = "#31fc03";
        ptns = ptns + 1;
        document.getElementById('points').innerHTML = ptns;
        confirmTime.style.visibility = "hidden";
        style.innerHTML = ".face::before{top: 35px;width: 40px;height: 20px;}}";


    } else {
        face.style.background = "red";
        
        style.innerHTML = ".face::before{top: 40px;width: 30px;height: 5px;background: darkred;border-top-left-radius: 50px;border-top-right-radius: 50px;transform: rotate(-10deg);}}";
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const confirmTime = document.querySelector(".confirm");
    confirmTime.addEventListener("click", () => timeCheck());
});