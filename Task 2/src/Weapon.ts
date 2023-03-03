import { Item } from "./Item";

export abstract class Weapon extends Item {
  static MODIFIER_CHANGE_RATE: number = 0.05;
  protected isBroken = false;
  protected baseDamage: number;
  protected damageModifier: number = 0;
  protected durabilityModifier: number = 0;
  private baseDurability: number;

  constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  use() {
    if (this.baseDurability > 0) {
      this.durabilityModifier -= Weapon.MODIFIER_CHANGE_RATE;
    }

    let initialUseMessage = `You use the ${this.name}, dealing ${Weapon.MODIFIER_CHANGE_RATE} points of damage.`;

    if (this.isBroken) {
      return `You can't use the ${this.name}, it is broken.`;
    }

    if (this.getEffectiveDurability() <= 0) {
      this.isBroken = true;
      initialUseMessage += `\nThe ${this.name} breaks.`;
    }

    return initialUseMessage;
  }

  polish() {}

  toString() {
    return `${this.name} − Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(
      2
    )}, Damage: ${this.getEffectiveDamage().toFixed(2)}, Durability: ${(this.getEffectiveDurability() * 100).toFixed(
      2
    )}%`;
  }

  getEffectiveDamage() {
    return this.baseDamage + this.damageModifier;
  }

  getEffectiveDurability(durabilityModifier?: number) {
    return durabilityModifier !== undefined
      ? this.baseDurability + durabilityModifier
      : this.baseDurability + this.durabilityModifier;
  }
}
