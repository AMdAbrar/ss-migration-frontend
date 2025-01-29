import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getIsLoggedIn(): boolean {
    throw new Error('Method not implemented.');
  }
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  loggedInStatus$ = this.isLoggedIn.asObservable();

  login() {
    this.isLoggedIn.next(true);  // Set login status to true
  }

  logout() {
    this.isLoggedIn.next(false); // Set login status to false
  }}
