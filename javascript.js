const container = document.querySelector(".container");
const right = document.querySelector(".right");
const roomZoom = document.querySelector(".square");
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
                pixel.classList.add("entered", "selected");
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
    targetPixel.classList.add("selected"); }
})

right.addEventListener('click', (e)=>{
    let targetBtn = e.target;
    let type = targetBtn.nodeName;
    if(type === "IMG") {
        addIcon(targetBtn);
    }
})   

function addIcon(target) {
    let icon = document.createElement("img");
    let iconName = target.id;
    let folder = icon.closest(".rooms") || icon.closest(".pickups");
    icon.src = `./imgs/${folder}/${iconName}.webp`    /*/imgs/rooms/vault.webp  ||  ./imgs/pickups/red-heart.webp" */
    targetPixel.appendChild(icon);
}

generatePixels(17);