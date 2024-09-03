import { Player } from "./components/player.js"
import { fillBoard } from "./components/domhandler.js"

function startGame(){
    let player1 = new Player(true, 1);
    let player2 = new Player(false, 2);
    addShips(player1);
    addShips(player2); 
}

function populateBoards(){
    fillBoard("leftBoard");
    fillBoard("rightBoard");
}

function addShips(player){
    let sizes = [2,3,3,4,5];
    for(let i = 0; i < 5; i++){
        let placed = false;
        while(!placed){
            let randomx = Math.floor(Math.random()*10);
            let randomy = Math.floor(Math.random()*10);
            placed =  player.board.placeShip(randomx,randomy,sizes[i]);
        }
    }  
}

populateBoards();
startGame();