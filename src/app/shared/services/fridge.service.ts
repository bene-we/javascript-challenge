import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FridgeItem } from '../models/fridge-item.model';
import { fridgeItems } from './fridge-items';

@Injectable({
  providedIn: 'root'
})
export class FridgeService {
  // Keep a private list of fridge items
  private _fridgeItems: FridgeItem[];

  // Provide the fridge items as an Observable
  // to allow updating the list asynchronously in the template
  private fridgeItems$: BehaviorSubject<FridgeItem[]>;

  constructor() {
    // ToDo: Implement functionality to persist the lists
    // (LocalStorage, Database, File, Firebase, ...)

    // Load sample fridge items from file
    this._fridgeItems = fridgeItems;

    // Create the first value as BehaviorSubject
    this.fridgeItems$ = new BehaviorSubject(this._fridgeItems);

    setTimeout(() => {
      this.addFridgeItem({
        item: {
          name: 'Cheese',
          amount: 1,
        },
        fridge: {
          name: 'Fridge 2',
        }
      })
    }, 5000);

    setTimeout(() => {
      this.addFridgeItem({
        item: {
          name: 'Cheese',
          amount: 3,
        },
        fridge: {
          name: 'Fridge 2',
        }
      })
    }, 10000);
  }

  /*
   * Receive the list of fridge items
   */
  get fridgeItems() {
    return this.fridgeItems$.asObservable();
  }

  /*
   * Add an item to the current list
   */
  addFridgeItem(fi: FridgeItem) {
    // ToDo: Also check the other fridges for the same item to alert the user about it

    // Check if the item to add exists already
    const exists = this._fridgeItems.find(fridgeItem =>
      fridgeItem.item.name === fi.item.name &&
      fridgeItem.fridge.name === fi.fridge.name);
    if (exists) {
      // Item with this name in this fridge exists already,
      // add amount
      const index = this._fridgeItems.indexOf(exists);
      this._fridgeItems[index].item.amount += fi.item.amount;
    } else {
      // Item does not exist, add it to the list
      this._fridgeItems.push(fi);
    }
    // Emit the changes
    this.fridgeItems$.next(this._fridgeItems);
  }

}
