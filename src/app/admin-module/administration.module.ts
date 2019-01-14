import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AdminformComponent } from './adminform/adminform.component';
import { AdministrationComponent } from './administration.component';
import { AdministrationService } from './services/administration.service';

@NgModule({
  declarations: [
    AdministrationComponent,
    AdminformComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class AdministrationModule {
  constructor() {
  }
}
