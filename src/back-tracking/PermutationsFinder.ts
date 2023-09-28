class PermutationsFinder<T> {
  private set: Array<T>;
  private result: Array<Array<T>> = [];
  private x: number[] = [];
  private used: Set<number> = new Set();

  constructor(set: Array<T>) {
    this.set = set;
  }

  public findPermutations(): Array<Array<T>> {
    this.exec(0);
    return this.result;
  }

  private exec(i: number): void {
    for (let j = 0; j < this.set.length; j++) {
      if (!this.used.has(j)) {
        this.x[i] = j;
        this.used.add(j);
        if (i === this.set.length - 1) {
          this.result.push(this.x.map((e) => this.set[e]));
        } else {
          this.exec(i + 1);
        }
        this.used.delete(j);
      }
    }
  }
}

export default PermutationsFinder;

let finder = new PermutationsFinder([1, 2, 3, 4, 5]);
let permutations = finder.findPermutations();
console.log(permutations);
