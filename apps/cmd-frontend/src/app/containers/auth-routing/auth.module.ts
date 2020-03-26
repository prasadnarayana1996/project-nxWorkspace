import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    
  ],
  declarations: [SigninComponent]
})
export class AuthModule { }
