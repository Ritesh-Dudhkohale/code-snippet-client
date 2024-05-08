import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { user } from '../../utils/models/user.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  registerForm = this.formBuilder.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  register() {
    this.authService
      .registerService({ ...(this.registerForm.value as user) })
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigateByUrl('/login')
        },
        error: (err) => {
          alert(err.message);
          console.log(err);
        },
      });
  }
}
