import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-xemthongtin',
  templateUrl: './xemthongtin.component.html',
  styleUrls: ['./xemthongtin.component.css']
})
export class XemthongtinComponent implements OnInit {
  Users: any;
  public user = new User();
  errMsg: any;
  constructor(private _service: UserService) { }

  ngOnInit(): void {
    this._service.getAllUsers().subscribe({
      next: (data) => this.Users = data,
      error: (err) => this.errMsg = err
    });

    this.getUserBytoken();
  }

  getUserBytoken() {
    var token = localStorage.getItem('token');
    var user = new User();
    this._service.getAllUsers().subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        if (data[i].token == token) {
          user.ho = data[i].ho,
            user.ten = data[i].ten,
            user.sdt = data[i].sdt,
            user.matKhau = data[i].matKhau,
            user.role = data[i].role,
            user.token = data[i].token,
            user._id = data[i]._id,
            user.diaChi = data[i].diaChi
          this.user = user;
          console.log(this.user)
          // console.log(user.token);
          // console.log(token)
        }
      }
    }
    )
  }

}
