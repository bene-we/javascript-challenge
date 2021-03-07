import { Fridge } from "./fridge.model";
import { Item } from "./item.model";

/*
 * Item class for the list of items in the fridge
 */
export class FridgeItem extends Item {
  constructor(name: string, amount: number, public fridge: Fridge) {
    super(name, amount);
  };
}
