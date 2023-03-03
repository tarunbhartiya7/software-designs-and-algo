interface Comparable<T> {
  compareTo(other: T): number;
}

export abstract class Item implements Comparable<Item> {
  static idCounter: number = 0;
  value: number;
  weight: number;
  readonly name: string;
  private readonly id: number;

  constructor(name: string, value: number, weight: number) {
    this.id = ++Item.idCounter;
    this.value = value;
    this.weight = weight;
    this.name = name;
  }

  static resetIdCounter() {
    Item.idCounter = 0;
  }

  use() {}

  compareTo(other: Item) {
    if (this.value > other.value) {
      return 1;
    } else if (this.value < other.value) {
      return -1;
    } else {
      if (this.name === other.name) return 0;
      return -1;
    }
  }

  toString() {
    return `${this.name} − Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(2)}`;
  }

  getId() {
    return this.id;
  }
}
