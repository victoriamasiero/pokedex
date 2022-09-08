import { Injectable } from '@angular/core';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User | null;

  constructor() { }

  login(username: string, password: string): User {
    this.user = {
      username
    }

    return this.user;
  }

  logout(): void {
    this.user = null;
  }

}
