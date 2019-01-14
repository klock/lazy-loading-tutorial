import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AdminformComponent } from './adminform/adminform.component';
import { AdministrationComponent } from './administration.component';
const ROUTES = [
  { path: '',
    component: AdministrationComponent,
    children: [
      {
        path: 'administrationForm',
        component: AdminformComponent,
      }
    ]
  }
];

@NgModule({
  declarations: [
    AdministrationComponent,
    AdminformComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class AdministrationModule {
  constructor(router: Router) {
    console.log('AdministrationModule routes', router.config);
  }
}
