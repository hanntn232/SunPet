import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.css']
})
export class HomeheaderComponent implements OnInit {

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
  }

}
