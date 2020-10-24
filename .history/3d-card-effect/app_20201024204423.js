const card = document.querySelector('.card');
const container = document.querySelector('.container');

const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

container.addEventListener('mousemove', (e) => {
    console.log(e.pageX, e.pageY);
    let xAxis = ((window.innerWidth /2 - e.pageX) / 25);
    let yAxis = ((window.innerWidth /2 - e.pageY) / 25);
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

//Animate in
container.addEventListener('mouseenter', (e) => {
    card.style.transition = `none`;

    title.style.transform = "translateZ(100px)";
    sneaker.style.transform = "translateZ(150px) rotateZ(10deg)";
    purchase.style.transform = "translateZ(120px)";
    description.style.transform = "translateZ(80px)";
    sizes.style.transform = "translateZ(70px)";
})

//Animate Out

container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    purchase.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
})