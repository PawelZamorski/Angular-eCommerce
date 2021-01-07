import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

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

  constructor(public auth: AuthService) {
  }

  logout() {
    this.auth.logout();
  }

}
