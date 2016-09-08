import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsComponent }      from '../card/cards.component';

const appRoutes: Routes = [
  {
    path: 'cards',
    component: CardsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
