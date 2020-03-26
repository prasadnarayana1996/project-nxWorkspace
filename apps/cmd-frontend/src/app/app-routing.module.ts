import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { AuthGuard } from './containers/auth-routing/auth-guard/auth-guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./containers/auth-routing/auth.module').then(m => m.AuthModule)
  },
  {
  path:'',
  component:MainLayoutComponent,
  canActivate:[AuthGuard],
  children:[
    { 
      path: 'workflow', 
      loadChildren: () => import('./containers/workflow/workflow.module').then(m => m.WorkflowModule) 
    },
    { 
      path: 'provider', 
      loadChildren: () => import('./containers/provider/provider.module').then(m => m.ProviderModule) 
    }, 
    { 
      path: 'tin', 
      loadChildren: () => import('./containers/tin/tin.module').then(m => m.TinModule) 
    },
    { 
      path: 'expirations', 
      loadChildren: () => import('./containers/expirations/expirations.module').then(m => m.ExpirationsModule) 
    }
    ]
  },
  {
    path:'**',
    redirectTo:'',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
