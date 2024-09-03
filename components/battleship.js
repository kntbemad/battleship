export class Ship {
  constructor(size) {
    if (typeof size !== "number") {
      console.log("invalid ship size");
      return undefined;
    }
    this.size = size;
    this.sunk = false;
    this.hitCount = 0;
  }

  get state() {
    return this.sunk === false ? "alive" : "sunk";
  }

  hit() {
    this.hitCount++;
    return this.shipSunk();
  }

  shipSunk() {
    if (this.hitCount >= this.size) {
      this.sunk = true;
      console.log("ship has been sunk!");
    }
    return this.sunk; 
  } 
}
