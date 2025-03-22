import { Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';

export const pokemonRoutes: Routes = [
  {
    path: '',
    component: ListPageComponent,
  },
  {
    path: ':id',
    component: DetailPageComponent,
  },
];

export default pokemonRoutes;
