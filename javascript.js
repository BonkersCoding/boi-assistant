const container = document.querySelector(".container");
const bottom = document.querySelector(".bottom");
const roomZoom = document.querySelector(".square");
const option = document.querySelector(".options");
const notEntered = document.querySelector("#not-entered");
const rooms = document.querySelector(".room-type");
const pickups = document.querySelector(".pickup-type");
let zoomView;
let roomView;
let targetPixel;


function generatePixels(size) {   
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }    
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

rooms.addEventListener('click', (e)=>{
    let targetBtn = e.target;
    let type = targetBtn.nodeName;
    if(type === "IMG") {
        addIcon(targetBtn);
    }
}) 

pickups.addEventListener('click', (e)=>{
    let targetBtn = e.target;
    let type = targetBtn.nodeName;
    if(type === "IMG") {
        addIcon(targetBtn);
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
    zoomView = document.getElementById("zoom-view");
    let targetBtn = e.target;
    let type = targetBtn.nodeName;
    if(type === "IMG") {
        removeIcon(targetBtn);
        addZoom(targetPixel);
    }

})

function addIcon(target) {
    let location = target.src;
    let icon = document.createElement("img");
    icon.src = location; 
    targetPixel.appendChild(icon);  
    icon.classList.add("map-icon");
    addZoom();
    
}

function addZoom() {   
    while (roomZoom.hasChildNodes()) {
        roomZoom.removeChild(roomZoom.firstChild);
    }
    zoomView = targetPixel.cloneNode(true);
    zoomView.classList.toggle("selected");
    zoomView.style.border = "none";
    zoomView.style.backgroundColor = "whitesmoke";
    zoomView.id = "zoom-view";
    roomZoom.appendChild(zoomView);
    
}

function removeIcon(target) {
    
    zoomView.removeChild(target);
    roomView = zoomView.cloneNode(true);
    while (targetPixel.hasChildNodes()) {
        targetPixel.removeChild(targetPixel.firstChild);
    }
    while (roomView.hasChildNodes()) {
        targetPixel.appendChild(zoomView.firstChild);
        roomView.removeChild(roomView.firstChild);
    }
    addZoom(targetPixel);
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
     case "reset":
         targetPixel.style.backgroundColor = "#2d2d2d";
         while (targetPixel.hasChildNodes()) {
             targetPixel.removeChild(targetPixel.firstChild);
         } 
         while (roomZoom.hasChildNodes()) {
             roomZoom.removeChild(roomZoom.firstChild);
         }        
         break;        
         case "reset-map":
             generatePixels(13);       
             break;
    
     default: break;
    }
}

generatePixels(13);