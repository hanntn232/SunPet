import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogchitietService } from '../service/blogchitiet.service';
declare function mangBlog(mang: any, start: number, end: number): any;

@Component({
  selector: 'app-blog-chi-tiet',
  templateUrl: './blog-chi-tiet.component.html',
  styleUrls: ['./blog-chi-tiet.component.css']
})
export class BlogChiTietComponent implements OnInit {
  blogList: any
  errMsg: string = ""
  selectedId: any;

  constructor(private _service: BlogchitietService,private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._service.getBlogList().subscribe({
      next: (data) => this.blogList = data,
      error: (err) => this.errMsg = err
    });

    this.activatedRoute.paramMap.subscribe((params) => {
      let id = params.get("id");
      if(id != null){
        this.selectedId = id.toString();
      }
    })
  }

  mangBlog2(mang: any, start: number, end: number){
    return mangBlog(mang, start, end)
  }

  soKhopId(id1: string, id2: string){
    if(id1 == id2)
    return true
    else
    return false
  }

  onSelected(data: any): void{
    this.router.navigate(['/blog', data.id])
  }


}
