import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminformComponent } from '../admin-module/adminform/adminform.component';
import { AdministrationComponent } from '../admin-module/administration.component';
import { AdministrationModule } from '../admin-module/administration.module';

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
  declarations: [],
  imports: [
    AdministrationModule,
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class AdminRoutedModule { }
