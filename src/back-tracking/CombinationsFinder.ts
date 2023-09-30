class CombinationsFinder<T> {
  private set: Array<T>;
  private k: number;
  private result: Array<Array<T>> = [];
  private x: number[] = [];

  constructor(set: Array<T>, k: number) {
    this.set = set;
    this.k = k;
  }

  public calc(): Array<Array<T>> {
    this.exec(0);
    return this.result;
  }

  private exec(i: number): void {
    for (
      let j = this.x[i - 1] + 1 || 0;
      j <= this.set.length - this.k + i;
      j++
    ) {
      this.x[i] = j;
      if (i === this.k - 1) {
        this.result.push(this.x.map((e) => this.set[e]));
      } else {
        this.exec(i + 1);
      }
    }
  }
}

export default CombinationsFinder;

let instance = new CombinationsFinder([1, 2, 3, 4, 5], 3);
let result = instance.calc();
console.log(result);
