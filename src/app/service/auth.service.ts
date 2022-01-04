import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userList: userData[] = [
    {
      username: 'user1',
      password: 'password',
      tenantId: [1, 4, 5, 6, 7]
    },
    {
      username: 'user2',
      password: 'password2',
      tenantId: [2, 3, 8, 12],
    },
  ];
  savedUser!: userData;

  constructor() { }

  login(formValue: { username: string, password: string }): Observable<{ result: boolean, data: userData | null }> {

    if (formValue.username === 'user1' && formValue.password === 'password') {
      const data = this.userList.find(d => d.username === 'user1');
      this.savedUser = <userData>data;
      return of(
        {
          result: true,
          data: <userData>data
        }
      );
    }
    else if (formValue.username === 'user1' && formValue.password === 'password2') {
      const data = this.userList.find(d => d.username === 'user2');
      this.savedUser = <userData>data;
      return of(
        {
          result: true,
          data: <userData>data
        }
      );
    }
    return of(
      {
        result: false,
        data: null
      }
    );
  }

  getUserDetails() {
    if (this.savedUser) {
      return;
    }

    // call api
    // this.savedUser =
  }
}

export interface userData {
  username: string;
  password: string;
  tenantId: number[];
}
