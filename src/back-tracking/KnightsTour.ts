class KnightsTour<T> {
  private i: number;
  private j: number;
  private n: number;
  private count: number = 0;
  private moveX = [-2, -2, -1, -1, 1, 1, 2, 2];
  private moveY = [-1, 1, -2, 2, -2, 2, -1, 1];
  private result: Array<Array<number>> = [];
  private traveled: Array<Array<boolean>> = [];

  constructor(i: number, j: number, n: number) {
    this.i = i;
    this.j = j;
    this.n = n;
    this.result = Array.from({ length: n }, () => Array(n));
    this.traveled = Array.from({ length: n }, () => Array(n).fill(false));
  }

  public findPath(): Array<Array<number>> {
    this.exec(this.i, this.j);
    return this.result;
  }

  private exec(x: number, y: number): void {
    this.count++;
    this.traveled[x][y] = true;
    this.result[x][y] = this.count;

    for (let k = 0; k < 8; k++) {
      if (this.count === this.n ** 2) {
        return;
      }

      const newX = x + this.moveX[k];
      const newY = y + this.moveY[k];

      if (
        newX >= 0 &&
        newY >= 0 &&
        newX < this.n &&
        newY < this.n &&
        !this.traveled[newX][newY]
      ) {
        this.exec(newX, newY);
      }
    }
  }
}

export default KnightsTour;

let knightsTour = new KnightsTour(3, 3, 5);
let path = knightsTour.findPath();
console.log(path);
