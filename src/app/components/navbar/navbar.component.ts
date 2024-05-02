import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { json } from 'express';
import { UsernamePipe } from '../../utils/pipes/username.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,UsernamePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  currentUser!: string;

  ngOnInit() {
    this.currentUser = (this.auth.currentUser() as any).fullname;
  }

  logout() {
    this.auth.logoutService();
    this.router.navigateByUrl('/login');
  }
}
