import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';

// Import components
import { DiscoveryComponent } from './discovery/discovery.component';

const routes: Routes = [
  {
    path: 'discovery',
    component: DiscoveryComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: '',
    component: DiscoveryComponent,
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
