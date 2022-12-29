import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { BlogModel } from 'src/app/models/BlogModel';
import { ListeBlogEnregistresService } from 'src/app/service/liste-blog/liste-blog-enregistres.service';
import { LoginValidationService } from 'src/app/service/auth-service/login-validation-service.service';
import { BlogListComponent } from 'src/app/blog-list/blog-list.component';
import { LoginComponent } from '../login.component';

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
    private route: ActivatedRoute,
    private listeBlogEnregistresService : ListeBlogEnregistresService,
    public loginValidationService : LoginValidationService,
    public blogListComponent : BlogListComponent,
    public loginComponent : LoginComponent) { }

  ngOnInit(): void {
    this.blogmodel = new BlogModel({
      blog : { id: '', titre : '', description : ''},
      terms: false
    });

    // Editer

    // Récupère le titre du blog à éditer à partir de l'URL
    // eslint-disable-next-line dot-notation
    this.blogListComponent.editTitre = this.route.snapshot.queryParams['titre'];
    // eslint-disable-next-line dot-notation
    this.blogListComponent.editDescription = this.route.snapshot.queryParams['description'];
    // console.log('test root', this.route, this.route.snapshot, this.route.snapshot.paramMap);
    console.log('edit-page', this.blogListComponent.editDescription, this.blogListComponent.editTitre);
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
  creerUnblog(): void {
    // Check if the title already exists in the list of blog posts
    if (this.listeBlogEnregistresService.hasTitre(this.blogmodel.blog.titre)) {
      alert('Sorry, this title already exists!');
      return;
    }
    // Create a new blog post
    this.listeBlogEnregistresService.addETitreDescription(
      this.blogmodel.blog.titre,
      this.blogmodel.blog.description
    );

    this.controleblog();
    this.router.navigateByUrl('listdeblogs');
    this.blogListComponent.showCreateForm = false;
  }

  // ------------------------------------------------------------------------------------

  // Récup les infos du compte
  gettitre(): string {
    return sessionStorage.getItem(this.blogmodel.blog.titre);
  }
  getdescription(): string {
    return sessionStorage.getItem(this.blogmodel.blog.description);
  }

  // ------------------------------------------------------------------------------------

  // Editer

  submitEdit(): void {
    this.listeBlogEnregistresService.addETitreDescription(this.blogListComponent.editTitre, this.blogListComponent.editDescription);

    this.blogListComponent.editTitre = '';
    this.blogListComponent.editDescription = '';
    this.router.navigate(['listdeblogs']);
  }

  cancelEdit(): void {
    this.blogListComponent.editTitre = '';
    this.blogListComponent.editDescription = '';
    this.router.navigate(['listdeblogs']);
  }
}
