import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { AppLinksComponent } from './components/app-links/app-links.component';
import { InternalLinksComponent } from './components/internal-links/internal-links.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'app', component: AppLinksComponent },
  { path: 'main', component: InternalLinksComponent },
  { path: 'home', component: HomePageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

