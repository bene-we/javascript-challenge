import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Fridge } from '../models';
import { FridgeItem } from '../models/fridge-item.model';
import { fridgeItems } from './fridge-items';

@Injectable({
  providedIn: 'root'
})
export class FridgeService {
  // Keep a private map of fridge items
  private _fridgeItems: Map<string, FridgeItem>;

  // Provide the fridge items as an Observable
  // to allow updating the list asynchronously in the template
  private fridgeItems$: BehaviorSubject<Map<string, FridgeItem>>;

  constructor() {
    // ToDo: Implement functionality to persist the lists
    // (LocalStorage, Database, File, Firebase, ...)

    // Load sample fridge items from file
    this._fridgeItems = fridgeItems;

    // Create the first value as BehaviorSubject
    this.fridgeItems$ = new BehaviorSubject(this._fridgeItems);

    setTimeout(() => {
      this.addFridgeItem(new FridgeItem('Cheese', 1, new Fridge('Fridge 1')));
    }, 5000);

    setTimeout(() => {
      this.addFridgeItem(new FridgeItem('Cheese', 3, new Fridge('Fridge 1')));
    }, 10000);

    setTimeout(() => {
      this.markAsUsed('Cheese');
    }, 15000);
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

    if (this._fridgeItems.has(fi.name)) {
      // Item with this name already exists, add amount
      const existingFridgeItem: FridgeItem = this._fridgeItems.get(fi.name)!;
      const newFridgeItem = new FridgeItem(existingFridgeItem.name, existingFridgeItem.amount + fi.amount, existingFridgeItem.fridge);
      this._fridgeItems.set(fi.name, newFridgeItem);
    } else {
      // Item does not exist, add it to the list
      this._fridgeItems.set(fi.name, fi)
    }
    // The changes are emitted automatically
  }

  /*
   * Mark an item on the fridge list as used up
   */
  markAsUsed(item: string) {
    if (this._fridgeItems.has(item)) {
      const existingFridgeItem: FridgeItem = this._fridgeItems.get(item)!;
      if (existingFridgeItem.amount > 1) {
        // There exists more than one, decreate it's amount
        existingFridgeItem.amount--;
        this._fridgeItems.set(item, existingFridgeItem);
      } else {
        // There exists just one item, delete it
        this._fridgeItems.delete(item);
      }
    }
  }

}
