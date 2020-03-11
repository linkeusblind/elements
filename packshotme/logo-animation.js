const logo = document.querySelectorAll('#logo path');

for(let i = 0; i<logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

const circle = document.querySelectorAll('#logo circle');

for(let i = 0; i<circle.length; i++){
    console.log(`Circle ${i} is ${circle[i].getTotalLength()}`);
}