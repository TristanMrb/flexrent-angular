import { Component } from '@angular/core';
import { User } from './_data_objects/data_objects';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flexrent';

  public currentUser: User;

  public constructor(private authenticationService: AuthenticationService,) {
    this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
  }



}
