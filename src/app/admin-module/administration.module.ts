import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminDisplayComponent } from './admin-display/admin-display.component';
import { AdminformComponent } from './adminform/adminform.component';
import { AdministrationComponent } from './administration.component';
import { AdministrationService } from './services/administration.service';





@NgModule({
  declarations: [
    AdministrationComponent,
    AdminformComponent,
    AdminDisplayComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports : [
    AdminformComponent,
    AdministrationComponent,
  ],
  providers: [
    AdministrationService,
    DatePipe,
  ],
})
export class AdministrationModule {
  constructor() {
  }
}
