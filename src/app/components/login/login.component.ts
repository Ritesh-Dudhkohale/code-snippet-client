import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  login() {
    const email = this.loginForm.value.email as string;
    const password = this.loginForm.value.password as string;

    this.authService.loginService({ email, password }).subscribe({
      next: (response: any) => {
        // const accessToken = response.data.accessToken; // Adjust according to your server response
        // if (accessToken) {
        //   // Set the cookie
        //   document.cookie = `accessToken=${accessToken}; path=/;`; // Adjust the cookie name and path as needed
        this.router.navigate(['/home']);
        // }
      },
      error: (err) => {
        alert(err.error.message);
        console.error('Login error:', err.error); // Handle login error, such as displaying an error message to the user
      },
    });
  }
}
