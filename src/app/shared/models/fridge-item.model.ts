import { Fridge } from "./fridge.model";
import { Item } from "./item.model";

/*
 * Interface for the list of items in the fridge
 */
export interface FridgeItem {
  item: Item;
  fridge: Fridge;
}
