import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  loggedInStatus$ = this.isLoggedInSubject.asObservable();

  login() {
    this.isLoggedInSubject.next(true);  // Set login status to true
    console.log('User logged in');
  }

  logout() {
    this.isLoggedInSubject.next(false); // Set login status to false
    console.log('User logged out');
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedInSubject.value; // Return current state
  }
}
