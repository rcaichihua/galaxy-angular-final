import { Routes } from '@angular/router';
import { NotFoundView } from './core/views/not-found/not-found.view';
import { AuthHttp } from './features/auth/http/auth.http';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    providers: [provideHttpClient(), AuthHttp],
    loadChildren: () => import('./features/auth/auth.routes'),
  },
  { path: '**', component: NotFoundView },
];
