import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { ListeBlogEnregistresService } from '../service/liste-blog/liste-blog-enregistres.service';
import { LoginValidationService } from '../service/auth-service/login-validation-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: { [titre: string]: string };
  declare Object: any;
  editTitre: string;
  editDescription: string;

  constructor(private router: Router,
    private auth: AuthService,
    private listeBlogEnregistresService: ListeBlogEnregistresService,
    public loginValidationService : LoginValidationService
  ) { }

  ngOnInit(): void {
    this.blogs = this.listeBlogEnregistresService.titreDescription;
  }

  editBlog() : void {
    this.router.navigate(['edit']);
  }

  // ------------------------------------------------------------------------------------

  // Rafraichissement d'un blog
  refreshBlogs(): void {
    this.blogs = this.listeBlogEnregistresService.titreDescription;
  }

  // ------------------------------------------------------------------------------------

  addNewBlog(): void {
    this.router.navigate(['pageblog']);
  }
}
