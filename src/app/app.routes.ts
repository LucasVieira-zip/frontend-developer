import { Routes } from '@angular/router';
import { ListPageComponent } from './pokemon/pages/list-page/list-page.component';
import { DetailPageComponent } from './pokemon/pages/detail-page/detail-page.component';

export const routes: Routes = [
  {
    path: 'pokemon',
    loadChildren: () => import('./pokemon/pokemon.routes'),
  },
  {
    path: '**',
    redirectTo: 'pokemon',
  },
];
