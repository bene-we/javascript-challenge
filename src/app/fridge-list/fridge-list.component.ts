import { Component, OnInit } from '@angular/core';
import { FridgeItem, FridgeService } from '../shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fridge-list',
  templateUrl: './fridge-list.component.html',
  styleUrls: ['./fridge-list.component.scss']
})
export class FridgeListComponent implements OnInit {
  fridgeItems$: Observable<FridgeItem[]>;

  constructor(private _fridgeService: FridgeService) {
    this.fridgeItems$ = this._fridgeService.fridgeItems;
  }

  ngOnInit(): void {
  }

}
