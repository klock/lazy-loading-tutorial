import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lazy-component',
  template: `
    <h3>LAZY component</h3>
    <router-outlet></router-outlet>
  `
})
export class LazyComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    console.log(this.router);
  }
}
