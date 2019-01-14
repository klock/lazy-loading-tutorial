import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sublazy',
  templateUrl: './sublazy.component.html',
  styleUrls: ['./sublazy.component.css']
})
export class SublazyComponent implements OnInit {

  constructor(private router: Router) {
    console.warn('sublazy routes', this.router.config);
  }

  ngOnInit() {
  }

}
