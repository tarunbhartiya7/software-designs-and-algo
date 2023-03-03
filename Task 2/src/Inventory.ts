import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
  private items: Item[] = [];

  constructor() {}

  sort(comparator?: ItemComparator) {
    return this.items.sort((a, b) => a.value - b.value);
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  toString() {
    return this.items.map((ele) => ele.toString()).join(", ");
  }
}
