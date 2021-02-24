import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';

// Import components
import { DiscoveryComponent } from './discovery/discovery.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './_guards/authentication.guard';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [AuthenticationGuard],
    component: LoginComponent
  },
  {
    path: 'discovery',
    canActivate: [AuthenticationGuard],
    component: DiscoveryComponent,
  },
  {
    path: 'account',
    canActivate: [AuthenticationGuard],
    component: AccountComponent,
  },
  {
    path: '',
    canActivate: [AuthenticationGuard],
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
