import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TinRoutingModule } from './tin-routing.module';
import { TinItemComponent } from './tin-item/tin-item.component';


@NgModule({
  declarations: [TinItemComponent],
  imports: [
    CommonModule,
    TinRoutingModule
  ]
})
export class TinModule { }
