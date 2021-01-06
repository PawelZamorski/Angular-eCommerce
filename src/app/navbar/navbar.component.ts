import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  active: number = 1;
  
  // Create a property to track whether the menu is open.
  // Start with the menu collapsed so that it does not appear initially when the page loads on a small screen!
  public isMenuCollapsed = true;

  constructor() {  }

}
