import { Component, OnInit } from '@angular/core';
import { BlogchitietService } from '../service/blogchitiet.service';

@Component({
  selector: 'app-blog-chi-tiet',
  templateUrl: './blog-chi-tiet.component.html',
  styleUrls: ['./blog-chi-tiet.component.css']
})
export class BlogChiTietComponent implements OnInit {
  blogList: any
  errMsg: string = ""

  constructor(private _service: BlogchitietService) { }

  ngOnInit(): void {
    this._service.getBlogList().subscribe({
      next: (data) => this.blogList = data,
      error: (err) => this.errMsg = err
    });
  }

}
