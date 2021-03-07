/* Provide an initial list of fridge items */

import { Fridge, FridgeItem } from "../models";

export const fridgeItems: Map<string, FridgeItem> = new Map([
  ['Bread', new FridgeItem('Bread', 1, new Fridge('Fridge 1'))],
  ['Tomatoe', new FridgeItem('Tomatoe', 2, new Fridge('Fridge 2'))],
]);
