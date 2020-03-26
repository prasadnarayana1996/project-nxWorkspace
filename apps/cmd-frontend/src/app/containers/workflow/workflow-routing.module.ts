import { AuthGuard } from './../auth-routing/auth-guard/auth-guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkflowItemComponent } from './workflow-item/workflow-item.component';


const routes: Routes = [
  {
    path:'',
    component:WorkflowItemComponent,
    canActivate:[AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkflowRoutingModule { }
