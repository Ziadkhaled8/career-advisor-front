import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLoggedIn = false;

  constructor(private router: Router) {
    if (typeof window !== 'undefined') {
      this.isLoggedIn = !!localStorage.getItem('jwt');
    }
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('jwt');
      localStorage.removeItem('email');
      this.router.navigate(['/login']);
    }
  }
}
