import { Component, OnInit } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { SanPhamGioHang } from '../model/giohang';
import { User } from '../model/user';
import { ProductDetailService } from '../service/product-detail.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dathang',
  templateUrl: './dathang.component.html',
  styleUrls: ['./dathang.component.css', '../giohang/giohang.component.css']
})
export class DathangComponent implements OnInit {
  public token = localStorage.getItem('token');
  public listOfCartProduct: SanPhamGioHang[] = [];
  public tongTien = 0;
  public mobile = false;
  Users: any;
  public user = new User();
  errMsg: any;
  public formatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' })
  public isShowPopUp = false;
  constructor(private _UserService: UserService,
    private _ProductService: ProductDetailService
  ) { }

  ngOnInit(): void {
    this.getUserBytoken();
    this.loadGioHang();
    this.tinhTongTien();
  }

  getUserBytoken() {
    var token = localStorage.getItem('token');
    var user = new User();
    this._UserService.getAllUsers().subscribe(data => {
      for (var i = 0; i < data.length; i++) {
        if (data[i].token == token) {
          user.ho = data[i].ho,
            user.ten = data[i].ten,
            user.sdt = data[i].sdt,
            user.matKhau = data[i].matKhau,
            user.role = data[i].role,
            user.token = data[i].token,
            user._id = data[i]._id,
            user.diaChi = data[i].diaChi
          this.user = user;
          console.log(this.user)
          // console.log(user.token);
          // console.log(token)
        }
      }
    }
    )
  }

  loadGioHang() {
    this._UserService.getAllUsers().subscribe({
      next: users => {
        var countUser = 0
        for (let i = 0; i < users.length; i++) {
          //Nếu token KH trùng khớp
          if (users[i].token == this.token) {
            countUser = 1;
            var customerID = users[i]._id;
            this._UserService.getAllCarts().subscribe({
              next: carts => {
                var countCart = 0;
                for (let i = 0; i < carts.length; i++) {
                  //Nếu ID khách hàng trùng khớp với customerID trong cart thì lấy cardID truy xuất đến dữ liệu cart của KH
                  if (carts[i].customerID == customerID) {
                    countCart = 1;
                    var cartID = carts[i]._id;
                    this._UserService.getCartById(cartID).subscribe({
                      next: cart => {
                        this._ProductService.getProductList().subscribe({
                          next: products => {
                            for (var m = 0; m < cart.productList.length; m++) {
                              for (var n = 0; n < products.length; n++) {
                                if (cart.productList[m].productID == products[n].id) {
                                  var sanPhamGioHang = new SanPhamGioHang();
                                  sanPhamGioHang.anhSanPham = products[n].hinhAnh[0];
                                  sanPhamGioHang.donGia = products[n].giaBan;
                                  sanPhamGioHang.id = products[n].id;
                                  sanPhamGioHang.tenSanPham = products[n].ten
                                  sanPhamGioHang.soLuong = cart.productList[m].quantity;
                                  sanPhamGioHang.thanhTien = products[n].giaBan * cart.productList[m].quantity;
                                  this.tongTien += sanPhamGioHang.thanhTien;
                                  this.listOfCartProduct.push(sanPhamGioHang);
                                  break;
                                }
                              }
                            }
                            console.log(this.listOfCartProduct);

                          }
                        })
                      }
                    })
                  }
                }
                if (countCart == 0) {
                  console.log("Chưa có giỏ hàng!")
                }
              }
            })
          }
        }
        if (countUser == 0) {
          console.log("Token không hợp lệ!")
        }
      }
    })
  }

  tinhTongTien() {
    this.tongTien = 0;
    var i;
    for (i = 0; i < this.listOfCartProduct.length; i++) {
      this.tongTien += this.listOfCartProduct[i].thanhTien;
    }
    this.tongTien += 20000;
  }

  hienThiFormThayDoi() {
    this.isShowPopUp = true;
  }

  anFormThayDoi() {
    this.isShowPopUp = false;
  }


}
