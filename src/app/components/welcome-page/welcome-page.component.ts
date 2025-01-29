import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  menuOpen: boolean = false;
  currentSlide: string = ''; // Tracks the current visible slide
  currentComponent: any = null; // Tracks the currently loaded component
  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
