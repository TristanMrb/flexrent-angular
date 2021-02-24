import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flexrent';

  public currentUser: any;

  public constructor() {
    this.currentUser = 1;
  }

}
