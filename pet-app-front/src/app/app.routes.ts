import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./pets/pages/dashboard/dashboard'),
    children: [
      {
        path: 'search',
        loadComponent: () => import('./pets/pages/search-page/search-page')
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard' 
  }
];
