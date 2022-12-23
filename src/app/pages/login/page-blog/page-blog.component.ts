import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { BlogModel } from 'src/app/models/BlogModel';
import { ListeBlogEnregistresService } from 'src/app/service/liste-blog/liste-blog-enregistres.service';
import { LoginValidationService } from 'src/app/service/auth-service/login-validation-service.service';

@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.scss']
})
export class PageBlogComponent implements OnInit{
// Variables
  blogmodel: BlogModel;
  isValidBlog: boolean = true;

  constructor(
    private router: Router,
    private auth: AuthService,
    private listeBlogEnregistresService : ListeBlogEnregistresService,
    public loginValidationService : LoginValidationService) { }

  ngOnInit(): void {
    this.blogmodel = new BlogModel({
      blog : { titre : '', description : ''},
      terms: false
    });
  }

  // ------------------------------------------------------------------------------------

  controleblog(): void {
    console.log('ici Blog controle()', this.blogmodel.blog.description, this.blogmodel.blog.titre);
    if (!this.blogmodel.blog.description || !this.blogmodel.blog.titre) {
      {
        this.isValidBlog = true;
      }
    } else {
      this.isValidBlog = false;
    }
  }

  // ------------------------------------------------------------------------------------

  // Utiliser la méthode pour ajouter une nouvelle paire e-mail / mot de passe lors de la création d’un nouveau ?
  creerUnblog(): void {
    // Vérifier si l'email saisi existe déjà dans la liste.
    if (this.listeBlogEnregistresService.hasTitre(this.blogmodel.blog.titre)) {
      alert('Désolé, Ce titre exite déjà !');
      return;
    }
    // Créer un Blog
    this.listeBlogEnregistresService.addETitreDescription(this.blogmodel.blog.titre, this.blogmodel.blog.description);
    this.controleblog();
    this.router.navigateByUrl('listdeblogs');
  }

  // ------------------------------------------------------------------------------------

  // Récup les infos du compte
  gettitre(): string {
    return sessionStorage.getItem(this.blogmodel.blog.titre);
  }
  getdescription(): string {
    return sessionStorage.getItem(this.blogmodel.blog.description);
  }
}
