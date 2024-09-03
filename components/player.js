import {Gameboard} from "./gameboard.js"

class Player{
    constructor(type, id){
        this.id = id;
        this.type = type === true ? "human" : "computer";
        this.board = new Gameboard();
    }
}

export {Player};