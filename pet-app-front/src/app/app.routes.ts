import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('./pets/pages/login/login') },
  { path: 'register', loadComponent: () => import('./features/auth/components/register/register')},
  {
    path: 'home',
    loadComponent: () => import('./shared/layout/layout'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pets/pages/dashboard/dashboard')
      },
      {
        path: 'search',
        loadComponent: () => import('./pets/pages/search-page/search-page')
      },
      {
        path: 'chat',
        loadComponent: () => import('./pets/pages/chat/chat')
      }
    ]
  },
  {
    path: '**',
    redirectTo: '' 
  }
];
