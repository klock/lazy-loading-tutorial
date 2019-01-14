import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const ROUTES = [
  {
    path: 'lazy',
    pathMatch: 'prefix',
    loadChildren: './lazy-module/lazy.module#LazyModule',
  },
  {
    path: 'administration',
    pathMatch: 'prefix',
    loadChildren: './admin-routed/admin-routed.module#AdminRoutedModule',
  },
  {
    path: 'nursePreparationList',
    pathMatch: 'prefix',
    loadChildren: './prep-module/prep.module#PrepModule',
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {
      enableTracing: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
