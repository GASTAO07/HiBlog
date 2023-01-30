import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from 'src/app/service/auth-service/auth.service';
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
  isValidBlog: boolean = true;
  // showEditForm: boolean = false;


  constructor(
    private router: Router,
    // private route: ActivatedRoute,
    public listeBlogEnregistresService: ListeBlogEnregistresService,
    public loginValidationService: LoginValidationService,
  ) { }

  ngOnInit(): void {
    this.blogs = this.listeBlogEnregistresService.titreDescription;
  }

  editBlog(titre: string): void {
    this.editTitre = titre;
    this.editDescription = this.listeBlogEnregistresService.getTitreDescription(titre);
    this.router.navigate(['pageblog'], { queryParams: { titre: this.editTitre, description: this.editDescription, isCreation: false } });
  }

  // ------------------------------------------------------------------------------------
  // Rafraichissement d'un blog
  refreshBlogs(): void {
    this.blogs = this.listeBlogEnregistresService.titreDescription;
  }
  // ------------------------------------------------------------------------------------
  addNewBlog(): void {
    this.router.navigate(['pageblog'], { queryParams: { isCreation: true } });
  }
}
