import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Auth, Login, Session, User } from '../_data_objects/data_objects';
import { ControlsMap } from '../_interface/controls_map';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public isLoggedIn: boolean = false;


  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.currentUserSubject = new BehaviorSubject<User>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public signInWithEmailAndPassword(loginValue: ControlsMap<AbstractControl>): Observable<{ session_id: string, user: User }> {
    // Password hash

    // const login: Login = new Login(loginValue.email.value, loginValue.password.value);
    const login: Login = { email: 'multiflex.rent@gmail.com', password_hash: 'test' };

    const auth: Auth = { login: login };

    return this.http.post<{ session_id: string, user: User }>('http://localhost:4200/api/user', { auth: auth })
      .pipe(
        tap(
          data => {
            if (data) {
              this.isLoggedIn = true;
              const session: Session = { session_id: data.session_id, user_id: data.user.user_id };
              this.cookieService.set('session', JSON.stringify(session));
              this.currentUserSubject.next(data.user);
            }
            return data;
          },
          error => {
            if (error.error.statusCode == 401) {
              return throwError('Email oder Passwort falsch');
            } else {
              return throwError('Hier ist etwas schief gelaufen');
            }

          }
        ));
  }


  public logout(): void {
    this.cookieService.delete('session');
    this.isLoggedIn = false;
    this.currentUserSubject.next(null);
  }
}
