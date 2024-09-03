
export function fillBoard(divName){
    const board = document.getElementById(divName);
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let box = document.createElement("div");
            box.classList.add("gridsquare");
            board.appendChild(box);
        }
    }
}