const images = ["tokyo1", "tokyo2", "tokyo3"];
const body = document.querySelector("body");

function backgroundChange(){
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    const image = new Image();
    image.src = `img/${chosenImage}.jpeg`;
    image.classList.add("bgImage");
    body.appendChild(image); 
}

backgroundChange();
setInterval(backgroundChange, 10000);