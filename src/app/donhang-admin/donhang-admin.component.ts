import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donhang-admin',
  templateUrl: './donhang-admin.component.html',
  styleUrls: ['./donhang-admin.component.css']
})
export class DonhangAdminComponent implements OnInit {

 dieukienloc = ["Chờ xác nhận", "Chờ đóng gói", "Chờ giao hàng", "Đã giao hàng", "Đã huỷ"];

  errorFlag = false;

  constructor() { }

  ngOnInit(): void {
  }

  validateCourse(value:any){
    this.errorFlag = value == 'none' ? true : false;
  }


}
