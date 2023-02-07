import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog, ListeBlogEnregistresService } from 'src/app/service/liste-blog/liste-blog-enregistres.service';
import { LoginValidationService } from 'src/app/service/auth-service/login-validation-service.service';

@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.scss']
})
export class PageBlogComponent implements OnInit {
  blog: Blog;
  isValidBlog: boolean = true;

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private listeBlogEnregistresService: ListeBlogEnregistresService,
    public loginValidationService: LoginValidationService,
  ) { }

  ngOnInit(): void {
    // eslint-disable-next-line dot-notation
    const id = parseInt(this.route.snapshot.queryParams['id'], 10);
    if (!!id) {
      const blogFound = this.listeBlogEnregistresService.getBlogById(id);
      if (!!blogFound) {
        this.blog = blogFound;
      } else {
        console.error('id invalide');
      }
    } else {
      this.blog = { titre: '', description: '', category: '' }; // Initialise s'il n'y pas d'id
    }
  }

  validateBlog(): void {
    if (!(this.blog.titre || this.blog.description)) {
      this.isValidBlog = true;
    } else {
      this.isValidBlog = false;
    }
  }

  creerUnblog(): void {
    this.validateBlog();
    this.listeBlogEnregistresService.addBlog(this.blog.titre, this.blog.description, this.blog.category);
    this.router.navigate(['listdeblogs']);
  }

  submitBlogChanges(): void {
    this.validateBlog();
    this.listeBlogEnregistresService.modifyBlog(this.blog.id, this.blog.titre, this.blog.description, this.blog.category);
    this.router.navigate(['listdeblogs']);
  }

  cancelCreroredit(): void {
    this.router.navigate(['listdeblogs']);
  }
}
