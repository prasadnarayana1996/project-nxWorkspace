import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpirationsRoutingModule } from './expirations-routing.module';
import { ExpirationsItemComponent } from './expirations-item/expirations-item.component';


@NgModule({
  declarations: [ExpirationsItemComponent],
  imports: [
    CommonModule,
    ExpirationsRoutingModule
  ]
})
export class ExpirationsModule { }
