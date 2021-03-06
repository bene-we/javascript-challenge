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
  }

  get fridgeItems() {
    return this.fridgeItems$.asObservable();
  }

}
