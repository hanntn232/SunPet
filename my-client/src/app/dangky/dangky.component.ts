import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../model2/user';
import { UserService } from '../service/user.service';
import { customValidator, passValidator } from '../validators/dangky.validators';


@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {
  regForm: any;
  public signUpUser = new User();
  constructor(private _formBuilder: FormBuilder,
    private _service: UserService,
    private _router: Router,
    private _toast: ToastrService) { }

  ngOnInit(): void {
    this.regForm = this._formBuilder.group({
      ho: ['', Validators.required],
      ten: ['', Validators.required],
      sdt: ['', [Validators.required, Validators.minLength(10), customValidator(/^[0][0-9]{9}/g)]],
      diaChi: ['', Validators.required],
      matKhau: ['', [Validators.required, Validators.minLength(5)]],
      nhapLaiMatKhau: ['', [Validators.required, Validators.minLength(5)]]
    }, { validators: [passValidator] })
  }

  get ho() {
    return this.regForm.controls['ho']
  }
  get ten() {
    return this.regForm.controls['ten']
  }
  get sdt() {
    return this.regForm.controls['sdt']
  }
  get diaChi() {
    return this.regForm.controls['diaChi']
  }
  get matKhau() {
    return this.regForm.controls['matKhau']
  }
  get nhapLaiMatKhau() {
    return this.regForm.controls['nhapLaiMatKhau']
  }

  signUp() {
    this.signUpUser.role = "User";
    this.signUpUser.token = this.randomToken();
    console.log(this.signUpUser);
    this._service.getAllUsers().subscribe({
      next: data => {
        for (var i = 0; i < data.length; i++) {
          if (this.signUpUser.sdt == data[i].sdt) {
            this._toast.clear();
            this._toast.error("Số điện thoại đã tồn tại. Vui lòng chọn đăng nhập hoặc đăng ký với số điện thoại khác", "Đăng ký thất bại")
            return;
          }
        }
        this._service.postUser(this.signUpUser).subscribe(res => {
          if (res.message == "success") {
            this._toast.success("Đăng ký thành công", "")
            localStorage.setItem('token', this.signUpUser.token);
            this._router.navigate(['/home']);
          }
          else {
            this._toast.error("Có lỗi xảy ra trong quá trình đăng ký", "Đăng ký thất bại")
          }
        })
      }
    })

  }

  randomToken() {
    return Math.random().toString(36).slice(1, 15);
  }
  // randomID(){
  //   return Math.random().toString(36).slice(1, 10);
  // }
}


