import { Component, OnInit } from '@angular/core';
import { Administration } from '../model/administration';
import { AdministrationService } from '../services/administration.service';

@Component({
  selector: 'app-adminform',
  templateUrl: './adminform.component.html',
  styleUrls: ['./adminform.component.css']
})
export class AdminformComponent implements OnInit {
  private _administrations: Administration[];

  adminSelected: number;

  constructor(
    private adminService: AdministrationService,
  ) { }

  ngOnInit() {
    this.adminService.retrieveAdministration().subscribe(admins => {
      this._administrations = admins;
    });
  }

  onAdminSelection(adminId: number) {
    this.adminSelected = adminId;
  }

  get administrations(): Administration[] {
    return this._administrations;
  }
}
