import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Administration } from '../model/administration';

@Component({
  selector: 'app-admin-display',
  templateUrl: './admin-display.component.html',
  styleUrls: ['./admin-display.component.css']
})
export class AdminDisplayComponent implements OnInit {

  @Input() administration: Administration;
  @Output() adminClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onAdminClick() {
    this.adminClicked.emit(this.administration.id);
  }
}
