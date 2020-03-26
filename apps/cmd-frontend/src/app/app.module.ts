import { AuthGuard } from './containers/auth-routing/auth-guard/auth-guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { SideNavComponent } from './shared/layout/side-nav/side-nav.component';
import { HeaderComponent } from './shared/layout/header/header.component';
@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    SideNavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
