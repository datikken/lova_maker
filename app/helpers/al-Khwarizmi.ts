class Arithmetic {
  value: number;

  constructor() {
    this.value = 0;
  }
  total(...args) {
    this.value = args.reduce((sum, current) => sum + current, 0);
    return this;
  }
  addition(value) {
    this.value += value;
    return this;
  }
  subtraction(value) {
    this.value -= value;
    return this;
  }
}
