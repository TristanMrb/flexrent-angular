import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
  }

  public login(): void {
    this.authenticationService.signInWithEmailAndPassword(null).subscribe(
      (data) => {
        this.router.navigate(['/discovery']);
      }
    );
  }

  public logout(): void {
    this.authenticationService.logout();
  }

}
