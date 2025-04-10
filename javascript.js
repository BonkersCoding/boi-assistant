const container = document.querySelector(".container");
const right = document.querySelector(".right");
const roomZoom = document.querySelector(".square");
const option = document.querySelector(".options");
const notEntered = document.querySelector("#not-entered");
let zoomPixel;
let targetPixel;


function generatePixels(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {    
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            if (i === (size-1)/2 && j === (size-1)/2) {
                targetPixel = pixel;
                targetPixel.style.backgroundColor = "whitesmoke";
                targetPixel.classList.toggle("selected");
            }
            row.appendChild(pixel);
        }
        container.appendChild(row); 
    }
}
/* CHANGE GRID SIZE
function changeGrid(size) {
    let rows = document.querySelectorAll(".row");
    rows.forEach((row) => {container.removeChild(row)});
    generatePixels(size);
    pixelNumber = size;
}
*/
container.addEventListener('click', (e)=>{
    if(e.target.closest(".pixel")) { 
    targetPixel.classList.toggle("selected");
    targetPixel = e.target;
    targetPixel.classList.add("selected");
    let color = targetPixel.style.backgroundColor;
    if (color == "") {
        notEntered.click();
    }
    addZoom(targetPixel); }
})

right.addEventListener('click', (e)=>{
    let targetBtn = e.target;
    let type = targetBtn.nodeName;
    if(type === "IMG") {
        addIcon(targetBtn);
        addZoom(targetPixel);
    }
}) 

option.addEventListener('click', (e)=>{
    let targetBtn = e.target;
    let type = targetBtn.nodeName;
    if(type === "BUTTON") {
        changeColor(targetBtn);
    }
})

roomZoom.addEventListener('click', (e)=>{
    let targetBtn = e.target;
    let type = targetBtn.nodeName;
    if(type === "IMG") {
        targetPixel.removeChild(targetBtn);
    }

})

function addIcon(target) {
    let location = target.src;
    let icon = document.createElement("img");
    icon.src = location; 
    targetPixel.appendChild(icon);
}

function addZoom(pixel) {
    while (roomZoom.hasChildNodes()) {
        roomZoom.removeChild(roomZoom.firstChild);
    }
    zoomPixel = pixel.cloneNode(true);
    zoomPixel.style.backgroundColor = "whitesmoke";
    roomZoom.appendChild(zoomPixel);
    
}

function changeColor(option) {  
    let choice = option.id;
    switch (choice) {
     case `not-entered`:
         targetPixel.style.backgroundColor = "#747474";
         break;
     case "entered":
         targetPixel.style.backgroundColor = "whitesmoke";
         break;
     case "red":
         targetPixel.style.backgroundColor = "#dd4444";
         break;        
     case "delete":
         targetPixel.style.backgroundColor = "#2d2d2d";
         break;
     default: break;
    }
}

generatePixels(17);