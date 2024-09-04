import { Player } from "./components/player.js"
import { fillBoard, displayShip } from "./components/domhandler.js"

let playerTurn = true;

function startGame(){
    let player1 = new Player(true, 1);
    let player2 = new Player(false, 2);
    addShips(player1);
    addShips(player2); 
    addListeners(player2);
    
}

function addListeners(player){
    //add box listeners for enemy board
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let box = document.getElementById("rightBoard " + j + "," + i);
            box.addEventListener("click", () => {
                if(!playerTurn){
                    return;
                }
                let attack = player.board.receiveAttack(j,i);
                if(attack === null){
                    return;
                }
                if(attack === false){
                    box.classList.add("miss");
                }
                if(attack === true){
                    box.classList.add("hit");
                }
                if(attack === "sunk"){
                    box.classList.add("hit");
                    box.innerHTML = "💀";
                }
                if(attack === "game over"){
                    box.classList.add("hit");
                    document.getElementById("vsp").innerHTML = "GAME OVER";       
                }                
            });
        }
    }    
}

function populateBoards(){
    fillBoard("leftBoard");
    fillBoard("rightBoard");
}

function addShips(player){
    let sizes = [2,3,3,4,5];
    for(let i = 0; i < 5; i++){
        let placed = false;
        let randomx, randomy, pointingUp;
        while(!placed){
            randomx = Math.floor(Math.random()*10);
            randomy = Math.floor(Math.random()*10);
            pointingUp = Math.floor(Math.random()*2) > 0 ? true : false;
            placed = player.board.placeShip(randomx,randomy,sizes[i], pointingUp);
        }
        if (player.type === "human") displayShip(randomx, randomy, sizes[i], player, pointingUp);
    }  
}

populateBoards();
startGame();