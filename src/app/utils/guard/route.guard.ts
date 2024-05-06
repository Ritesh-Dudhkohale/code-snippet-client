import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { inject } from '@angular/core';

export const routeGuard: CanActivateFn = (route, state) => {
  let auth = inject(AuthService);
  let router = inject(Router);

  if (auth.isLoggedIn()) {
    router.navigateByUrl('/login');
    return false;
  }
  const fullname = JSON.parse(localStorage.getItem('Current User') as string);
  auth.currentUser.set(fullname);
  return true;
};
