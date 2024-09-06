import { Player } from "./components/player.js"
import { fillBoard, displayShip } from "./components/domhandler.js"

let playerTurn = true;

let player1;
let player2;

function startGame(){
    populateBoards();
    player1 = new Player(true, 1);
    player2 = new Player(false, 2);
    addShips(player1);
    addShips(player2); 
    addListeners(player1, player2);
}

function addListeners(player1, player2){
    //add box listeners for enemy board
    for(let i = 0; i < 10; i++){
        for(let j = 0; j < 10; j++){
            let box = document.getElementById("rightBoard " + j + "," + i);
            box.addEventListener("click", () => {
                if(!playerTurn){
                    return;
                }
                let attack = player2.board.receiveAttack(j,i);
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
                    box.innerHTML = "💀";
                    document.getElementById("vsp").innerHTML = "GAME OVER";       
                }  
                playerTurn = false;
                if(player2.board.gameOver !== true){
                    setTimeout(() => {
                        console.log("enemy turn");
                        enemyAttack(player1);
                        playerTurn = true;
                    }, 2000)
                }

            });
        }
    }   
    
}

function resetButton(){
    let resetBtn = document.getElementById("resetbtn");
    resetBtn.addEventListener("click", () => {
        resetGame();
    });
}

function resetGame(){
    document.getElementById("leftBoard").replaceChildren();
    document.getElementById("rightBoard").replaceChildren();
    startGame();
}

function enemyAttack(player){
   //CPU turn
    let randomx, randomy;
    let hit = false;
    while(!hit){
        console.log("help")
        randomx = Math.floor(Math.random()*10);
        randomy = Math.floor(Math.random()*10);
        console.log(randomx, randomy);
        let result = player.board.receiveAttack(randomx, randomy);
        if(result === null){
            hit = false;
        }
        if(result === false){
            hit = true;
            let cell = document.getElementById("leftBoard " + randomx + "," + randomy);
            player.board.board[randomx][randomy][1] = true;
            cell.classList.add("miss");
        }
        if(result === true){
            hit = true;
            let cell = document.getElementById("leftBoard " + randomx + "," + randomy);
            player.board.board[randomx][randomy][1] = true;
            cell.classList.add("hit");
        }
        if(result === "sunk"){
            hit = true;
            let cell = document.getElementById("leftBoard " + randomx + "," + randomy);
            player.board.board[randomx][randomy][1] = true;
            cell.innerHTML = "💀";
            cell.classList.add("hit");
        }
        if(result === "game over"){
            hit = true;
            let cell = document.getElementById("leftBoard " + randomx + "," + randomy);
            player.board.board[randomx][randomy][1] = true;
            cell.classList.add("hit");
            cell.innerHTML = "💀";
            document.getElementById("vsp").innerHTML = "GAME OVER";       
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

resetButton(); 
startGame();