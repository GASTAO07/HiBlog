import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListeBlogEnregistresService } from 'src/app/service/liste-blog/liste-blog-enregistres.service';
import { Blog } from '../interfaces/blog.interface';
import { LoginValidationService } from 'src/app/service/auth-service/login-validation-service.service';

@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.scss']
})
export class PageBlogComponent implements OnInit {
  blog: Blog;
  isValidBlog: boolean = true;
  titrePage: string;
  textButton: string;

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private listeBlogEnregistresService: ListeBlogEnregistresService,
    public loginValidationService: LoginValidationService,
  ) { }

  ngOnInit(): void {
    // Component pour le loggin et loggout (barre de menu)
    // Access quand connecté (profil et logout)

    // eslint-disable-next-line dot-notation
    const id = parseInt(this.route.snapshot.queryParams['id'], 10);
    if (!!id) {
      // Editer
      const blogFound = this.listeBlogEnregistresService.getBlogById(id);
      if (!!blogFound) {
        this.blog = blogFound;
        this.titrePage = 'Modifier un blog';
        this.textButton = 'Enregistrer les modifs';
        // Créer
      } else {
        console.error('id invalide');
      }
    } else {
      this.titrePage = 'Ajouter un blog';
      this.textButton = 'Créer un blog';
      this.blog = { titre: '', description: '', category: '' }; // Initialise s'il n'y pas d'id
    }
  }

  validateBlog(): void {
    if (!(this.blog.titre || this.blog.description || this.blog.id)) {
      this.isValidBlog = true;
    } else {
      this.isValidBlog = false;
    }
  }

  /// Executer Creer
  creerUnblog(): void {
    this.validateBlog();
    this.listeBlogEnregistresService.addBlog(this.blog.titre, this.blog.description, this.blog.category);
    this.router.navigate(['listedeblogs']);
  }

  /// Executer submit si on edit dans le html
  submitBlogChanges(): void {
    this.validateBlog();
    this.listeBlogEnregistresService.modifyBlog(this.blog.id, this.blog.titre, this.blog.description, this.blog.category);
    this.router.navigate(['listedeblogs']);
  }

  cancelCreroredit(): void {
    this.router.navigate(['listedeblogs']);
  }

}
