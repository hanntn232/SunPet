import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogchitietService } from '../service/blogchitiet.service';
declare function layDuLieuTextTuHTML(htmlString: string): any;
declare function mangBlog(mang: any, start: number, end: number): any;

@Component({
  selector: 'app-blogtrangchu',
  templateUrl: './blogtrangchu.component.html',
  styleUrls: ['./blogtrangchu.component.css']
})
export class BlogtrangchuComponent implements OnInit {
  blogList: any;
  errMsg: any;
  selectedId: any;
  mangBlog: any;

  constructor(private _service: BlogchitietService, private router: Router) { }

  ngOnInit(): void {
    this._service.getBlogList().subscribe({
      next: (data) => {this.blogList = data, this.mangBlog = this.mangBlog2(this.blogList,0,4)},
      error: (err) => this.errMsg = err
    });
  }
  layDuLieuTextTuHTML2(htmlString: string){
    var text = layDuLieuTextTuHTML(htmlString);
    return text;
  }

  mangBlog2(mang: Array<any>, start: number, end: number){
    console.log("mangBlog: ",this.blogList)
    return mangBlog(mang, start, end)
  }

  onSelected(data: any): void{
    this.router.navigate(['/blog', data.id])
  }
}
