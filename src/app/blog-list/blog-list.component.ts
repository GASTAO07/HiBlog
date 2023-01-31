import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from 'src/app/service/auth-service/auth.service';
import { Blog, ListeBlogEnregistresService } from '../service/liste-blog/liste-blog-enregistres.service';
import { LoginValidationService } from '../service/auth-service/login-validation-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})

export class BlogListComponent implements OnInit {
  // ------------------------------------------------------------------------------------
  blogs_: Blog[] = [];

  id: number;
  editTitre: string;
  editDescription: string;
  isValidBlog: boolean = true;

  // ------------------------------------------------------------------------------------
  constructor(
    private router: Router,
    public listeBlogEnregistresService: ListeBlogEnregistresService,
    public loginValidationService: LoginValidationService,
  ) { }
  // ------------------------------------------------------------------------------------
  ngOnInit(): void {
    this.blogs_ = this.listeBlogEnregistresService.blogs;
  }

  // ------------------------------------------------------------------------------------
  modifyBlog(id: number, titre: string, description: string): void {
    for (const blog of this.blogs_) {
      if (blog.id === id) {
        this.id = id;
        console.log('id mod', this.id);
      }
    }
    this.editTitre = titre;

    // this.editDescription = this.listeBlogEnregistresService.getBlogList(description);
    const blog = this.listeBlogEnregistresService.getBlogList(description);
    this.editDescription = blog.description;

    console.log(this.editTitre, this.editDescription);

    this.router.navigate(['pageblog'], { queryParams: { id: this.id, titre: this.editTitre, description: this.editDescription, isCreation: false } });

    // this.id = this.listeBlogEnregistresService.getBlogById(id);
    // this.editTitre = this.blogs_[titre];

    // for (const blog of this.blogs_) {
    //   if (blog.description === titre) {
    //     this.editTitre = titre;
    //     console.log('id mod', this.editTitre);
    //   }
    // }
    // for (const blog of this.blogs_) {
    //   if (blog.description === description) {
    //     this.editDescription = description;
    //     console.log('id mod', this.editDescription);
    //   }
    // }

    // this.editDescription = description;

  }

  // ------------------------------------------------------------------------------------
  // Rafraichissement d'un blog
  refreshBlogs(): void {
    this.blogs_ = this.listeBlogEnregistresService.blogs;
  }
  // ------------------------------------------------------------------------------------
  addNewBlog(titre: string, description: string): void {
    // for (const blog of this.blogs_) {
    //   if (blog.description === titre) {
    //     this.editTitre = titre;
    //   }
    // }

    this.editTitre = titre;

    const blog = this.listeBlogEnregistresService.getBlogList(description);
    this.editDescription = blog.description;

    this.router.navigate(['pageblog'], { queryParams: { isCreation: true } });
  }

  // ------------------------------------------------------------------------------------
  deleteBlog(id: number): void {
    delete this.listeBlogEnregistresService.blogs[id];
  }
}
