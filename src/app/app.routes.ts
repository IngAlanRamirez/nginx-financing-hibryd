import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then((m) => m.AuthPage),
  },
  {
    path: 'purchases',
    loadComponent: () =>
      import('./purchases/purchases.page').then((m) => m.PurchasesPage),
  },
  {
    path: 'simulator',
    loadComponent: () =>
      import('./simulator/simulator.page').then((m) => m.SimulatorPage),
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];
