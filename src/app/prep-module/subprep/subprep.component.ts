import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subprep',
  templateUrl: './subprep.component.html',
  styleUrls: ['./subprep.component.css']
})
export class SubprepComponent implements OnInit {

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    console.warn('Subprep routes', this.router.config);
  }

  cancelAdminOutlet() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { adminForm: null }}]);
  }
}
