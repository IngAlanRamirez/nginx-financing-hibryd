import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./pages/auth/auth.page').then((m) => m.AuthPage),
  },
  {
    path: 'pages/purchases',
    loadComponent: () =>
      import('./pages/purchases/purchases.page').then((m) => m.PurchasesPage),
  },
  {
    path: 'pages/simulator',
    loadComponent: () =>
      import('./pages/simulator/simulator.page').then((m) => m.SimulatorPage),
  },
  {
    path: 'pages/error',
    loadComponent: () =>
      import('./pages/error/error.page').then((m) => m.ErrorPage),
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];
