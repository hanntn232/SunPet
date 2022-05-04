import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {
  public users = [];
  public JSONusers: any;
  public errMsg: any;

  constructor(private _service: UserService) { }

  ngOnInit(): void {
    this._service.getAllUsers().subscribe({
      next: data => this.JSONusers = data,
      error: err => this.errMsg = err
    })

    if(this.JSONusers != null){
      this.users = JSON.parse(this.JSONusers);
      console.log('Đã có user mảng')
    }
  }

}
