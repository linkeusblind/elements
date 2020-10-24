const card = document.querySelector('.card');
const container = document.querySelector('.container');

container.addEventListener('mousemove', (e) => {
    console.log(e.pageX, e.pageY);
    let xAxis = ((window.innerWidth /2 - e.pageX) / 25);
    let yAxis = ((window.innerWidth /2 - e.pageY) / 25);
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

//Animate in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = `none`;
})

//Animate Out

container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
})