import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { user } from '../../utils/models/user.model';
import { BehaviorSubject, catchError, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  readonly currentUser = signal('');
  private isAuthenticated = new BehaviorSubject<boolean>(false);

  private base_url = 'https://code-snippet-server.onrender.com/api/users';

  registerService(registerData: user) {
    return this.http.post(this.base_url + '/register', registerData);
  }

  loginService(logindata: { email: string; password: string }) {
    return this.http.post(this.base_url + '/login', logindata).pipe(
      switchMap((res: any) => {
        localStorage.setItem('Access Token', res.data.accessToken);
        this.isAuthenticated.next(true);
        return this.loadCurrentUser();
      })
    );
  }
  
  loadCurrentUser() {
    return this.http.get(this.base_url + '/current-user').pipe(
      tap((res: any) => {
        this.currentUser.set(res.data);
      }),
      catchError((err) => {
        console.log('Error while fetching current user', err);
        return of(null); // Return a placeholder value or handle the error as needed
      })
    );
  }

  logoutService() {
    this.isAuthenticated.next(false);
    localStorage.removeItem('Access Token');
  }
}
