import { AuthGuard } from './../auth-routing/auth-guard/auth-guard';
import { ExpirationsItemComponent } from './expirations-item/expirations-item.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component:ExpirationsItemComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpirationsRoutingModule { }
