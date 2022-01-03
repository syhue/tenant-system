import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(formValue: {username: string, password: string}): Observable<boolean> {

    if ((formValue.username === 'user1' && formValue.password === 'password') || (formValue.username === 'user1' && formValue.password === 'password2')) {
      return of(true);
    }
    return of(false);
  }
}
