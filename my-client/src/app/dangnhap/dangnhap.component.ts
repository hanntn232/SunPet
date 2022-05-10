import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model2/user';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'; 
import { customValidator } from '../validators/dangky.validators';
import { Observable, Subject } from 'rxjs';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  public users: any;
  public user = new User();
  public errMsg: any;
  logForm: any;

  constructor(private _service: UserService, private _router: Router,private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this._service.getAllUsers().subscribe({
    //   next: data => {
    //     this.users = data;
    //     // console.log(data); 
    //     // console.log(this.users[0])
    //   },
    //   error: err => this.errMsg = err
    // })
    
    this.logForm = this._formBuilder.group({
      sdt: ['', [Validators.required, Validators.minLength(10), customValidator(/^[0][0-9]{9}/g)]],
      matKhau: ['',[Validators.required, Validators.minLength(5)]]
    })
  }
  get sdt(){
    return this.logForm.controls['sdt']
  }
  get matKhau(){
    return this.logForm.controls['matKhau']
  }
  // khoiTaoUser(){
  //   this._service.getAllUsers().subscribe({
  //     next: data => {
  //       this.users = data;
  //       // console.log(data); 
  //       // console.log(this.users[0])
  //     },
  //     error: err => this.errMsg = err
  //   })
  //   // if (this.JSONusers != null) {
  //   //   this.users = JSON.parse(this.JSONusers);
  //   //   console.log('Đã có user mảng')
  //   // }
  //   // else{
  //   //   console.log(JSON.stringify(this.JSONusers))
  //   // }
  // }
  kiemTraUser(sdt: any, matKhau: any, users: any){
    var i: number;
    var userTrungKhop = new User();
    for(i=0; i<users.length; i++){
      if(users[i].sdt == sdt && users[i].matKhau == matKhau){
        userTrungKhop.ho = users[i].ho,
        userTrungKhop.ten = users[i].ten,
        userTrungKhop.sdt = users[i].sdt,
        userTrungKhop.matKhau = users[i].matKhau,
        userTrungKhop.role = users[i].role,
        userTrungKhop.token = users[i].token,
        userTrungKhop._id = users[i]._id,
        userTrungKhop.diaChi = users[i].diaChi,
        localStorage.setItem("token", userTrungKhop.token)
        return userTrungKhop;
      }
    }
    return ("User not found")
  }

  dangNhap(form: NgForm){
    this._service.getAllUsers().subscribe({
      next: data => {
        this.users = data;
        var tonTaiUser: string | User;
        tonTaiUser = this.kiemTraUser(form.value.sdt, form.value.matKhau, this.users);
        tonTaiUser
        if(tonTaiUser != "User not found"){
          this._router.navigate(['/home']);
        }
        else{
          alert(tonTaiUser);
        }
      },
      error: err => this.errMsg = err
    })
  }
}

