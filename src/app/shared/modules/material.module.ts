import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';


const matModules = [
  MatCardModule,
  MatTabsModule,
  MatListModule,
  MatChipsModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: matModules,
})
export class MaterialModule { }
