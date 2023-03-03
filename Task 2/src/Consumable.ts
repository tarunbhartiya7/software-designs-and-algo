import { Item } from "./Item";

export abstract class Consumable extends Item {
  isConsumed: boolean = false;
  private isSpoiled: boolean;

  constructor(name: string, value: number, weight: number, isSpoiled?: boolean) {
    super(name, value, weight);
    this.isSpoiled = isSpoiled ?? false;
  }

  use() {
    if (this.isConsumed) {
      return `There's nothing left of the ${this.name} to consume.`;
    }

    let initialMessage = `You consumed the ${this.name}.`;
    this.isConsumed = true;

    if (this.isSpoiled) {
      return `${initialMessage}\nYou feel sick.`;
    }

    return initialMessage;
  }
}
