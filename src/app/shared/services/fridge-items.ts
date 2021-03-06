/* Provide an initial list of fridge items */

import { FridgeItem } from "../models";

export const fridgeItems: FridgeItem[] = [
  {
    item: {
      name: 'Bread',
      amount: 1,
    },
    fridge: {
      name: 'Fridge 1',
    }
  },
  {
    item: {
      name: 'Tomatoe',
      amount: 2,
    },
    fridge: {
      name: 'Fridge 2',
    }
  }
]
