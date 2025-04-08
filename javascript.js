const container = document.querySelector(".container");


function generatePixels(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {    
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            if (i === (size-1)/2 && j === (size-1)/2) {pixel.id = "entered";}
            row.appendChild(pixel);
        }
        container.appendChild(row); 
    }
}


function changeGrid(size) {
    let rows = document.querySelectorAll(".row");
    rows.forEach((row) => {container.removeChild(row)});
    generatePixels(size);
    pixelNumber = size;
}

generatePixels(13);