import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;
  isAuthenticated = false;

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  verifyLogin(email: string, password: string) {
    this.userService.getAllUsers().subscribe({
      next: data => {
        data.forEach(user => {
          if (user.email === email && user.userPassword === password) {
            this.isAuthenticated = true;
            this.router.navigate(['/users/get-all-users']);
          }
        });
      }
    });
  }

  isAuthentificated(): boolean {
    // return this.isAuthenticated;
    return true;
  }

  login() {
    this.loggedIn = true;
  }

  loggout() {
    this.loggedIn = false;
  }
}
