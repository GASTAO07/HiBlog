import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListeBlogEnregistresService } from 'src/app/service/liste-blog/liste-blog-enregistres.service';
import { LoginValidationService } from 'src/app/service/auth-service/login-validation-service.service';

@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.scss']
})
export class PageBlogComponent implements OnInit {
  isValidBlog: boolean = true;
  id: number;
  titre: string;
  description: string;
  isCreation: boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listeBlogEnregistresService: ListeBlogEnregistresService,
    public loginValidationService: LoginValidationService,
  ) { }

  ngOnInit(): void {
    // eslint-disable-next-line dot-notation
    this.isCreation = this.route.snapshot.queryParams['isCreation'] === 'true';
    if (this.isCreation) {
      this.titre = '';
      this.description = '';
    } else {

      // eslint-disable-next-line dot-notation
      this.id = parseInt(this.route.snapshot.queryParams['id'], 10);

      const blogFound = this.listeBlogEnregistresService.getBlogById(this.id);
      if (!!blogFound) {
        this.titre = blogFound.titre;
        this.description = blogFound.description;
      } else {
        console.error('id invalide');
      }
    }
  }

  // ------------------------------------------------------------------------------------
  controleblog(): void {
    if (!(this.description || this.titre)) {
      {
        this.isValidBlog = true;
      }
    } else {
      this.isValidBlog = false;
    }
  }

  // ------------------------------------------------------------------------------------
  creerUnblog(): void {
    this.controleblog();
    this.listeBlogEnregistresService.addBlog(this.titre, this.description);
    this.router.navigate(['listdeblogs']);
  }
  // ------------------------------------------------------------------------------------

  controleeditblog(): void {
    if (!(this.titre || this.description)) {
      {
        this.isValidBlog = true;
      }
    } else {
      this.isValidBlog = false;
    }
  }

  // ------------------------------------------------------------------------------------
  submitEdit(): void {
    this.controleeditblog();
    this.router.navigate(['listdeblogs'], { queryParams: { titre: this.titre, description: this.description } });
  }
  // ------------------------------------------------------------------------------------

  cancelEdit(): void {
    this.titre = '';
    this.description = '';
    this.router.navigate(['listdeblogs']);
  }
}
