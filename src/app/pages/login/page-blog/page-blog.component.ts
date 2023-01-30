import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogModel } from 'src/app/models/BlogModel';
import { ListeBlogEnregistresService } from 'src/app/service/liste-blog/liste-blog-enregistres.service';
import { LoginValidationService } from 'src/app/service/auth-service/login-validation-service.service';

@Component({
  selector: 'app-page-blog',
  templateUrl: './page-blog.component.html',
  styleUrls: ['./page-blog.component.scss']
})
export class PageBlogComponent implements OnInit {

  // Variables
  blogmodel: BlogModel;
  isValidBlog: boolean = true;
  blog: {
    titre: string,
    description: string,
  };
  isCreation: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listeBlogEnregistresService: ListeBlogEnregistresService,
    public loginValidationService: LoginValidationService,
  ) { }

  ngOnInit(): void {

    this.blogmodel = new BlogModel({
      blog: {
        titre: '',
        description: ''
      },
    });

    this.blog = {
      titre: null,
      description: null,
    };

    // eslint-disable-next-line dot-notation
    this.isCreation = this.route.snapshot.queryParams['isCreation'] === 'false';
    // eslint-disable-next-line dot-notation
    console.log(this.route.snapshot.queryParams['isCreation'] === 'true');
    console.log('iscreation', this.isCreation);


    // Si isCreation est faux, récupérer les valeurs du titre et de la description et remplir le formulaire pour l'édition.
    if (this.isCreation) {
      // eslint-disable-next-line dot-notation
      this.blog.titre = this.route.snapshot.queryParams['titre'];

      // eslint-disable-next-line dot-notation
      this.blog.description = this.route.snapshot.queryParams['description'];

      console.log('edit-page', this.blog.description, this.blog.titre);
    }
    // console.log('test root', this.route, this.route.snapshot, this.route.snapshot.paramMap);

  }

  // ------------------------------------------------------------------------------------

  controleblog(): void {
    console.log('ici Blog controle()', this.blogmodel.blog.description, this.blogmodel.blog.titre);
    if (this.blogmodel.blog.description || this.blogmodel.blog.titre) {
      {
        this.isValidBlog = false;
      }
    } else {
      this.isValidBlog = true;
    }
  }

  // ------------------------------------------------------------------------------------
  creerUnblog(): void {
    // Check if the title already exists in the list of blog posts
    if (this.listeBlogEnregistresService.hasTitre(this.blogmodel.blog.titre)) {
      alert('il existe déjà!');
      return;
    }
    // Create a new blog post
    this.listeBlogEnregistresService.addETitreDescription(
      this.blogmodel.blog.titre,
      this.blogmodel.blog.description,
    );
    this.controleblog();
    this.router.navigateByUrl('listdeblogs');

    console.log('edit-page1', this.blog.description, this.blog.titre);

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
  controleeditblog(): void {
    if (!this.blog.titre || this.blog.description) {
      {
        this.isValidBlog = false;
      }
    } else {
      this.isValidBlog = false;
    }
  }

  submitEdit(): void {
    this.controleeditblog();
    this.listeBlogEnregistresService.addETitreDescription(this.blog.titre, this.blog.description);
    this.blog.titre = '';
    this.blog.description = '';
    this.router.navigate(['listdeblogs']);
  }

  cancelEdit(): void {
    this.blog.titre = '';
    this.blog.description = '';
    this.router.navigate(['listdeblogs']);
  }
}
