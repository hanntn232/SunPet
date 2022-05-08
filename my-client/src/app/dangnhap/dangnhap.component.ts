import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'; 
import { customValidator } from '../validators/dangky.validators';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  logForm: any;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
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
  onSubmit(){
    // this._authenticationService.login(this.logForm.sdt, this.logForm.matKhau);
    // console.log("Dui")
  }

}

