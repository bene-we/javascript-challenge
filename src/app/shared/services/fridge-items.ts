/* Provide an initial list of fridge items */

import { Fridge, FridgeItem } from "../models";

export const fridgeItems: Map<string, FridgeItem> = new Map([
  ['Bread', new FridgeItem('Bread', 1, new Fridge('Fridge 1'))],
  ['Tomatoe1', new FridgeItem('Tomatoe', 2, new Fridge('Fridge 2'))],
  ['Tomatoe2', new FridgeItem('Tomatoe', 2, new Fridge('Fridge 2'))],
  ['Tomatoe3', new FridgeItem('Tomatoe', 2, new Fridge('Fridge 2'))],
  ['Tomatoe4', new FridgeItem('Tomatoe', 2, new Fridge('Fridge 2'))],
  ['Tomatoe5', new FridgeItem('Tomatoe', 2, new Fridge('Fridge 2'))],
  ['Tomatoe6', new FridgeItem('Tomatoe', 2, new Fridge('Fridge 2'))],
  ['Tomatoe7', new FridgeItem('Tomatoe', 2, new Fridge('Fridge 2'))],
  ['Tomatoe8', new FridgeItem('Tomatoe', 2, new Fridge('Fridge 2'))],
  ['Tomatoe9', new FridgeItem('Tomatoe', 2, new Fridge('Fridge 2'))],
  ['Tomatoe10', new FridgeItem('Tomatoe', 2, new Fridge('Fridge 2'))],
  ['Tomatoe11', new FridgeItem('Tomatoe', 2, new Fridge('Fridge 2'))],
  ['Tomatoe12', new FridgeItem('Tomatoe', 2, new Fridge('Fridge 2'))],
]);
