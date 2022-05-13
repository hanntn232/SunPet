import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public isLogin: boolean = false;

  constructor(private _service: UserService,
    private _router: Router) { }

  ngOnInit(): void {
    var token = localStorage.getItem("token");
    this.isLogin = this._service.kiemTraDangNhap(token);
  }
  logOut(){
    this._service.logOut();
    this._router.navigate(['/home']);
    window.location.reload();
  }
}
