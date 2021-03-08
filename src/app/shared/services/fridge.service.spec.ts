import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { FridgeItem } from '../models';

import { FridgeService } from './fridge.service';

describe('FridgeService', () => {
  let service: FridgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FridgeService]
    });
    service = TestBed.inject(FridgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Fridge List', () => {
    let fi: Observable<Map<string, FridgeItem>>;

    beforeEach(() => {
      fi = service.fridgeItems;
    });

    it('should contain sample items', (done) => {
      fi.subscribe(
        (result: Map<string, FridgeItem>) => {
          expect(result.size).toEqual(2);
          expect(result.get('Tomatoe')?.amount).toEqual(2);
          done();
        }
      )
    });
  });

});
