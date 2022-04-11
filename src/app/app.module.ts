import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DathangComponent } from './dathang/dathang.component';
import { GiohangComponent } from './giohang/giohang.component';
import { ProductComponent } from './product/product.component';
import { BlogtrangchuComponent } from './blogtrangchu/blogtrangchu.component';
import { XemthongtinComponent } from './xemthongtin/xemthongtin.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';
import { ThongtinfooterComponent } from './thongtinfooter/thongtinfooter.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogChiTietComponent } from './blog-chi-tiet/blog-chi-tiet.component';
import { DonhangAdminComponent } from './donhang-admin/donhang-admin.component';
import { ChitietdonhangAdminComponent } from './chitietdonhang-admin/chitietdonhang-admin.component';
import { PopupXoaBaivietThanhcongComponent } from './popup-xoa-baiviet-thanhcong/popup-xoa-baiviet-thanhcong.component';
import { PopupXoaBaivietComponent } from './popup-xoa-baiviet/popup-xoa-baiviet.component';
import { PopupSuaBaivietThanhcongComponent } from './popup-sua-baiviet-thanhcong/popup-sua-baiviet-thanhcong.component';
import { PopupSuaBaivietComponent } from './popup-sua-baiviet/popup-sua-baiviet.component';
import { PopupThemBaivietComponent } from './popup-them-baiviet/popup-them-baiviet.component';
import { PopupThemThanhcongComponent } from './popup-them-thanhcong/popup-them-thanhcong.component';
import { AdminBlogtrangchuComponent } from './admin-blogtrangchu/admin-blogtrangchu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    DangkyComponent,
    DangnhapComponent,
    DathangComponent,
    GiohangComponent,
    ProductComponent,
    BlogtrangchuComponent,
    XemthongtinComponent,
    HomeheaderComponent,
    ThongtinfooterComponent,
    ProductDetailComponent,
    BlogChiTietComponent,
    DonhangAdminComponent,
    ChitietdonhangAdminComponent,
    PopupXoaBaivietThanhcongComponent,
    PopupXoaBaivietComponent,
    PopupSuaBaivietThanhcongComponent,
    PopupSuaBaivietComponent,
    PopupThemBaivietComponent,
    PopupThemThanhcongComponent,
    AdminBlogtrangchuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
