import { AuthGuard } from './../auth-routing/auth-guard/auth-guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TinItemComponent } from './tin-item/tin-item.component';


const routes: Routes = [
  {
    path:'',
    component:TinItemComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TinRoutingModule { }
