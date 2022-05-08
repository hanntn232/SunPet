import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.css']
})
export class HomeheaderComponent implements OnInit {

  public isLogin: boolean = false;

  constructor(private _service: UserService) { }

  ngOnInit(): void {
    var token = localStorage.getItem("token");
    this.isLogin = this._service.kiemTraDangNhap(token);
  }

}
