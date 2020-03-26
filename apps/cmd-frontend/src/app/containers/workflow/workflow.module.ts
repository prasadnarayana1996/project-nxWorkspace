import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkflowRoutingModule } from './workflow-routing.module';
import { WorkflowItemComponent } from './workflow-item/workflow-item.component';


@NgModule({
  declarations: [WorkflowItemComponent],
  imports: [
    CommonModule,
    WorkflowRoutingModule
  ]
})
export class WorkflowModule { }
