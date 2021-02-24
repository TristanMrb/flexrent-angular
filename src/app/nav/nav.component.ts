import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  items: MenuItem[];

  activeItem: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Discovery', icon: 'pi pi-fw pi-home', routerLink: ['/discovery'] },
      { label: 'Kategorien', icon: 'pi pi-fw pi-th-large' },
      { label: 'Mietgegenstände', icon: 'pi pi-fw pi-shopping-cart' },
      { label: 'Account', icon: 'pi pi-fw pi-user', routerLink: ['/account'] }
    ];

    this.activeItem = this.items[0];
  }

}
