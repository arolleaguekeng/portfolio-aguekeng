import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(
    private router: Router
  ) { }

  // To open Project Page
  openProjectsPage(){
    this.router.navigate([`projects`])
  }

  // To open works Page
  openWorksPage(){
    this.router.navigate(['/works'])
  }

  // To open Services page.
  openServicesPage(){
    this.router.navigate([`/services`])
  }

  // To open Home page
  openHomePage(){
    this.router.navigate([`home`])
  }
}
