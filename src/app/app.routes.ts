import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateSnippetComponent } from './components/create-snippet/create-snippet.component';
import { UdpateSnippetComponent } from './components/udpate-snippet/udpate-snippet.component';
import { routeGuard } from './utils/guard/route.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'create-snippet', component: CreateSnippetComponent },
  { path: 'update-snippet/:id', component: UdpateSnippetComponent },
  {
    path: 'home',
    component: HomeComponent,
    
    canActivate: [routeGuard],
  },

  { path: '**', redirectTo: '' },
];
