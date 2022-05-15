import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Cart } from '../model/cart';
import { SanPhamGioHang } from '../model/giohang';
import { ProductDetailService } from '../service/product-detail.service';
import { UserService } from '../service/user.service';
const baseUrl: string = "http://localhost:3000"

@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.css']
})
export class GiohangComponent implements OnInit {
  public token = localStorage.getItem('token');
  public listOfCartProduct: SanPhamGioHang[] = [];
  public tongTien = 0;
  constructor(private _UserService: UserService,
    private _ProductService: ProductDetailService) { }

  ngOnInit(): void {
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
    console.log(this.listOfCartProduct);
  }

  tangSoLuong(productId: string) {
    var cartTangSoLuong = new Cart();
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
                    cartTangSoLuong._id = cartID;
                    this._UserService.getCartById(cartID).subscribe({
                      next: cart => {
                        for (let i = 0; i < cart.productList.length; i++) {
                          if (productId == cart.productList[i].productID) {
                            cartTangSoLuong.productList.push({
                              productID: cart.productList[i].productID,
                              quantity: cart.productList[i].quantity + 1
                            })
                          }
                          else {
                            cartTangSoLuong.productList.push(cart.productList[i]);
                          }
                        }
                        this._UserService.updateCart(cartID, cartTangSoLuong);
                        console.log(cartTangSoLuong);
                        console.log("Đã tăng")
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

}
