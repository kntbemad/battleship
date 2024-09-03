import { Ship } from "./battleship.js"

class Gameboard{
    constructor(){
        this.board = this.#createBoard(10);
        this.shipCount = 0;
        this.sinkCount = 0;
        this.gameOver = false;
    }

    #createBoard(size){
        let array = [];
        for(let i = 0; i < size; i++){
            array.push([]); 
            for(let j = 0; j < size; j++){
                array[i].push([null, false]);
            }
        }
        return array;
    }

    placeShip(x,y, size){
        
        if(x >= this.board.length){
          return false; 
        }     
        if(y >= this.board[x].length){
          return false; 
        }
        if(y + size - 1 >= this.board[x].length){
          return false; 
        }

        for(let i = 0; i < size; i++){
          if(this.board[x][y+i][0] !== null){
            return false; 
          }
        }
        
        let ship = new Ship(size);
        for(let i = 0; i < size; i++){
          this.board[x][y+i] = [ship, false];
        }
        this.shipCount++;
        return true; 
    }

    receiveAttack(x, y){
      if(x >= this.board.length){
        return null; 
      }     
      if(y >= this.board[x].length){
        return null; 
      }
      if(this.board[x][y][1] === true){
        return null; 
      }  
      if(this.board[x][y][0] === null){
        return false;
      } else {
        this.board[x][y][1] = true;
        let sunk = this.board[x][y][0].hit();
        if(sunk){
          this.sinkCount++;
          this.gameOver = this.sinkCount >= this.shipCount ? true : false;
          console.log("Game over!");
          return "game over";
        }
        return true; 
      }
    }
}

export {Gameboard}