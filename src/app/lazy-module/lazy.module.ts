import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

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
    RouterModule.forChild(ROUTES),
  ]
})
export class LazyModule {
  constructor(router: Router) {
    console.log('LazyModule routes', router.config);
  }
}

