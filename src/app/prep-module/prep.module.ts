import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PrepComponent } from './prep.component';

import { SubprepComponent } from './subprep/subprep.component';

const routes: Routes = [
  {
    path: '',
    component: PrepComponent,
    children: [
      {
        path: 'preparations',
        component: SubprepComponent,
        children: [
          {
            path: 'administration',
            pathMatch: 'prefix',
            loadChildren: '../admin-routed/admin-routed.module#AdminRoutedModule',
            outlet: 'adminForm',
          },
        ]
      },
    ],
  },
];

@NgModule({
  declarations: [PrepComponent, SubprepComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class PrepModule {
  constructor(router: Router) {
    console.warn('PrepModule routes', router.config);
  }
}
