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
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';
import { AdminfooterComponent } from './adminfooter/adminfooter.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NgApexchartsModule} from 'ng-apexcharts'
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { FormSuaSanphamAdminAndroidComponent } from './form-sua-sanpham-admin-android/form-sua-sanpham-admin-android.component';
import { FormThemSanphamAdminAndroidComponent } from './form-them-sanpham-admin-android/form-them-sanpham-admin-android.component';
import { AdminBlogtrangchuComponent } from './admin-blogtrangchu/admin-blogtrangchu.component';
import { RouterModule } from '@angular/router';
import { PopupLydohuyComponent } from './popup-lydohuy/popup-lydohuy.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdmintasklistComponent } from './admintasklist/admintasklist.component';
import { AdminchatboxComponent } from './adminchatbox/adminchatbox.component';
import { PiechartComponent } from './piechart/piechart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
// import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    // declarations: [AppFooterComponent],
    // AppFooterComponent,
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
    AdminheaderComponent,
    AdmindashboardComponent,
    AdminnavbarComponent,
    AdminfooterComponent,
    LineChartComponent,
    ProductAdminComponent,
    FormSuaSanphamAdminAndroidComponent,
    FormThemSanphamAdminAndroidComponent,
    AdminBlogtrangchuComponent,
    PopupLydohuyComponent,
    AdmintasklistComponent,
    AdminchatboxComponent,
    PiechartComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
