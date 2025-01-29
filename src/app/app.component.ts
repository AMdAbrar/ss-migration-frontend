import { Component, HostListener, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { InternalLinksComponent } from './components/internal-links/internal-links.component';
import { AppLinksComponent } from './components/app-links/app-links.component';
import { AuthService } from './components/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    isLoggedIn: boolean = false;
    menuOpen: boolean = false;
    currentSlide: string = ''; // Tracks the current visible slide
    currentComponent: any = null; // Tracks the currently loaded component
    constructor(private authService: AuthService, private router: Router) { }
    @ViewChild('dynamicContainer', { read: ViewContainerRef })
    dynamicContainer!: ViewContainerRef;
    // ngOnInit(): void {
    //   // Subscribe to the login status
    //   this.authService.isLoggedIn.subscribe((status: boolean) => {
    //     this.isLoggedIn = status;
    //   });
    // }
    // Toggles the menu open/close state

    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
    // Listens for clicks outside the menu
    @HostListener('document:click', ['$event'])
    closeMenuOnOutsideClick(event: MouseEvent) {
      const target = event.target as HTMLElement;

      // Check if the click is outside the menu and hamburger button
      if (!target.closest('.nav-right') && !target.closest('.hamburger')) {
        this.menuOpen = false;
      }
    }
    loadComponent(component: Type<any>): void {
      // Clear previous component
      this.dynamicContainer.clear();

      // Dynamically create the component
      const componentRef = this.dynamicContainer.createComponent(component);

      // Save the created component instance
      this.currentComponent = componentRef.instance;

      console.log('Loaded component:', component.name);
    }

    showSlide(slide: string): void {
      console.log('Slide selected:', slide);
      this.currentSlide = slide;
      this.menuOpen = false; // Close menu automatically


      // Ensure the slide is being set properly
      console.log('Current Slide:', this.currentSlide);

      // Clear the container before loading a new component
      this.dynamicContainer.clear();

      if (slide === 'internetGDrive') {
        console.log('Loading MainpageComponent');
        this.loadComponent(InternalLinksComponent);
        // this.isLoggedIn=false
      }

      if (slide === 'appsLinks') {
        console.log('Loading AppLinksComponent');
        this.loadComponent(AppLinksComponent);

      }
      if (slide === 'about') {
        console.log('Loading ABUTComponent');
        this.loadComponent(AboutPageComponent);

      }
    }
    backToMenu(): void {
      this.currentSlide = ''; // Reset to the main menu
      this.dynamicContainer.clear(); // Clear dynamically loaded components
      this.currentComponent = null;
    }
    // Call this method when the login or logout button is clicked
    // Method to toggle login/logout
    toggleLoginLogout(): void {
      if (this.isLoggedIn) {
        this.authService.logout();  // Log out
      } else {
        this.router.navigate(['/login']);  // Navigate to login page
      }
    }
}
