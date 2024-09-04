
export function fillBoard(divName){
    const board = document.getElementById(divName);
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let box = document.createElement("div");
            box.classList.add("gridsquare");
            box.id = divName + " " + j + "," + i
            board.appendChild(box);
        }
    }
}

export function displayShip(x,y,size, player, pointing){
    let boardName = player.id === 1 ? "leftBoard" : "rightBoard";
    if(pointing){
        for(let i = 0; i < size; i++){
            let box = document.getElementById(boardName + " " + x + "," + (y+i));
            if(i === 0) box.classList.add("top");
            if(i === size - 1) box.classList.add("bottom");
            box.innerHTML = "•"; 
            box.classList.add("ship");
            box.classList.add("vertical");
        }
    } else {
        for(let i = 0; i < size; i++){
            let box = document.getElementById(boardName + " " + (x+i) + "," + y);
            if(i === 0) box.classList.add("top");
            if(i === size - 1) box.classList.add("bottom");
            box.innerHTML = "•"; 
            box.classList.add("ship");
            box.classList.add("horizontal");
        }
    }
}