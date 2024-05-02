import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateSnippetComponent } from './components/create-snippet/create-snippet.component';
import { UdpateSnippetComponent } from './components/udpate-snippet/udpate-snippet.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'create-snippet', component: CreateSnippetComponent },
      { path: 'update-snippet/:id', component: UdpateSnippetComponent },
    ],
  },

  { path: '**', redirectTo: '' },
];
