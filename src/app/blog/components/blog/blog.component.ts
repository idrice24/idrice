import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Blogs } from 'src/app/shared/models/blogs';
import { BlogsService } from 'src/app/shared/services/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs$: Observable<Blogs[]>;

  blogs: Blogs;
  recentPosts: Blogs[];
  sortOrder: number;
  showSubMenu = '';
  showMenu = '';
  display: boolean;

  sortField: string;
  message : string;
  public now: Date = new Date();

  constructor(
    private blogsService: BlogsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private titleService: Title // Inject to set document title on browser
  ) {
    this.blogs$ = this.blogsService.getBlogList();
   }

  ngOnInit(): void {
    this.loadRecentPost();
    this.titleService.setTitle('IDRICE237 - Post-list');
  }
  openRecentPost(recentP: { id: any; }){
    const postId = recentP.id;
    const urlPost = 'posts/' + postId;
    console.log(urlPost);
    this.router.navigate([urlPost]);
  }

  private loadRecentPost(){
    this.blogsService.getBlogList().subscribe(data => {
      this.recentPosts = data.slice(0, 4);
    })
  }

}
