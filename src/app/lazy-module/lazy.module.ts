import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AdministrationModule } from '../admin-module/administration.module';

import { LazyComponent } from './lazy.component';
import { SublazyComponent } from './sublazy/sublazy.component';

const ROUTES = [
  { path: '',
    component: LazyComponent,
    children: [
      {
        path: 'subroute',
        component: SublazyComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [
    LazyComponent,
    SublazyComponent,
  ],
  imports: [
    AdministrationModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class LazyModule {
  constructor(router: Router) {
    console.log('LazyModule routes', router.config);
  }
}

