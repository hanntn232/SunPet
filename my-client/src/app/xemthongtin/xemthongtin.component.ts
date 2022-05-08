import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-xemthongtin',
  templateUrl: './xemthongtin.component.html',
  styleUrls: ['./xemthongtin.component.css']
})
export class XemthongtinComponent implements OnInit {
  Users: any;
  userActive: any;
  errMsg: any;
  constructor(private _service: UserService) { }

  ngOnInit(): void {
    this._service.getAllUsers().subscribe({
      next: (data) => this.Users = data,
      error: (err) => this.errMsg = err
    });

    this.userActive = this.Users[0];
  }

}
