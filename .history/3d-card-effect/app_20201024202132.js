const card = document.querySelector('.card');
const container = document.querySelector('.container');

container.addEventListener('mousemove', (e) => {
    console.log(e.pageX, e.pageY);
    let xAxis = (window.innerWidth /2 - e.pageX / 25);
    let yAxis = (window.innerWidth /2 - e.pageY / 25);
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`
})