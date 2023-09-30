class LongestIncreasingSubsequence {
  private set: number[];
  private lengths: number[];

  constructor(set: number[]) {
    this.set = set;
    this.lengths = set.map(() => 1);
  }

  public calc(): number {
    for (let i = 0; i < this.set.length; i++) {
      for (let j = 0; j < i; j++) {
        if (this.set[i] > this.set[j]) {
          this.lengths[i] = Math.max(this.lengths[i], this.lengths[j] + 1);
        }
      }
    }

    return Math.max.apply(null, this.lengths);
  }
}

export default LongestIncreasingSubsequence;

let instance = new LongestIncreasingSubsequence([1, 2, 3, 8, 2, 5]);
let result = instance.calc();
console.log(result);
