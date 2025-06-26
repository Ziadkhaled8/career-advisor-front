import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    const { email, password } = this.loginForm.value;


    this.authService.login({ email, password }).subscribe({
      next: (res) => {
        this.isLoading = true;
        if (typeof window !== 'undefined') {
          localStorage.setItem('email', email);
          localStorage.setItem('jwt', res.token);
        }
        this.router.navigate(['/dashboard']);
      },
      error: () =>{ 
        this.isLoading = false;
        alert('Login failed')}
    });

  }
}
