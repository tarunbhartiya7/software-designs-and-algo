import { Weapon } from "./Weapon";

export class Bow extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super("bow", baseDamage, baseDurability, value, weight);
  }

  polish() {
    if (this.getEffectiveDurability() < 1) {
      this.durabilityModifier += Weapon.MODIFIER_CHANGE_RATE;
    }
  }
}
