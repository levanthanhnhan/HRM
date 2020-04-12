import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})

export class StaffComponent implements OnInit {

  listStaff: any;

  constructor(
    private _http: HttpClient,
    @Inject('BASE_URL') private _baseUrl: string) {
  }

  ngOnInit(): void {
    this.getAllStaff()
  }

  getAllStaff() {
    return this._http.get(this._baseUrl + "api/Staff").subscribe(res => {
      this.listStaff = res
    })
  }
}
