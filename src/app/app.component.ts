import { Component } from '@angular/core'; 
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private auth: AuthService, private router: Router ) {
    // Redirect to the page from which the user was redirected 
    // when trying to access the page that are only accessible for logged in user.
    auth.user$.subscribe(user => {
      // Navigate to the page only if the user is logged in
      if (user) {
        let returnUrl = localStorage.getItem('returnUrl');
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
