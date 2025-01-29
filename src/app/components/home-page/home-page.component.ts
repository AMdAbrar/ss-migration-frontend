import { Component, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { AboutPageComponent } from '../about-page/about-page.component';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  private authStatusSub: Subscription | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Subscribe to AuthService to track login status
    this.authStatusSub = this.authService.loggedInStatus$.subscribe(status => {
      this.isLoggedIn = status;  
    });

    // Initialize login state when the page loads
    this.isLoggedIn = this.authService.getIsLoggedIn();
  }
  preventLogout(): void {
    this.isLoggedIn = this.authService.getIsLoggedIn(); // Ensure state is not lost
  }
  ngOnDestroy(): void {
    if (this.authStatusSub) {
      this.authStatusSub.unsubscribe();
    }
  }

  toggleLoginLogout(): void {
    if (this.isLoggedIn) {
      console.log('Logging out');
      this.authService.logout();
      this.router.navigate(['/']); 
    } else {
      console.log('Redirecting to login page');
      this.router.navigate(['/login']);
    }
  }
}