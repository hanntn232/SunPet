import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isLogin: boolean = false;

  constructor(private _service: UserService) { }

  ngOnInit(): void {
    var token = localStorage.getItem("token");
    this.isLogin = this._service.kiemTraDangNhap(token);
  }

}
