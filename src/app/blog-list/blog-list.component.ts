import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  showCreateForm : boolean = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private listeBlogEnregistresService: ListeBlogEnregistresService,
    public loginValidationService : LoginValidationService
  ) { }

  ngOnInit(): void {
    this.blogs = this.listeBlogEnregistresService.titreDescription;
  }

  // editBlog() : void {
  //   this.router.navigate(['editform']);
  // }

  editBlog(titre: string): void {
    this.editTitre = titre;
    this.editDescription = this.listeBlogEnregistresService.getTitreDescription(titre);
    console.log('edit-form', this.editDescription, this.editTitre);
    // Naviguer vers le composant de formulaire d'édition de blog en utilisant le titre et la description du blog sélectionné comme paramètres de la route
    this.router.navigate(['pageblog'], { queryParams: { titre: this.editTitre, description: this.editDescription } });
    this.showCreateForm = true;
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
