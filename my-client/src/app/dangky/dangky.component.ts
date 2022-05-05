import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { customValidator, passValidator } from '../validators/dangky.validators';


@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {
  regForm: any;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this._formBuilder.group({
      ho: ['', Validators.required],
      ten: ['', Validators.required],
      sdt: ['', [Validators.required, Validators.minLength(10), customValidator(/^[0][0-9]{9}/g)]],
      diaChi: ['', Validators.required],
      matKhau: ['', [Validators.required, Validators.minLength(5)]],
      nhapLaiMatKhau: ['', [Validators.required,Validators.minLength(5)]]
    },{validators: [passValidator]})
  }

  get ho(){
    return this.regForm.controls['ho']
  }
  get ten(){
    return this.regForm.controls['ten']
  }
  get sdt(){
    return this.regForm.controls['sdt']
  }
  get diaChi(){
    return this.regForm.controls['diaChi']
  }
  get matKhau(){
    return this.regForm.controls['matKhau']
  }
  get nhapLaiMatKhau(){
    return this.regForm.controls['nhapLaiMatKhau']
  }
}


