import { Component, OnInit } from '@angular/core';
import { ListeBlogEnregistresService } from '../service/liste-blog/liste-blog-enregistres.service';
import { LoginValidationService } from '../service/auth-service/login-validation-service.service';
import { Router, ActivatedRoute, } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})

export class EditFormComponent implements OnInit {
  editTitre: string;
  editDescription: string;
  blogs: { [titre: string]: string };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formsModule : FormsModule,
    private listeBlogEnregistresService: ListeBlogEnregistresService,
    public loginValidationService : LoginValidationService
  ) { }

  ngOnInit(): void {
    this.blogs = this.listeBlogEnregistresService.titreDescription;
  }

  editBlog(titre: string): void {
    this.editTitre = titre;
    this.editDescription = this.listeBlogEnregistresService.getTitreDescription(titre);
    console.log('edit-form', this.editDescription, this.editTitre);
    // Naviguer vers le composant de formulaire d'édition de blog en utilisant le titre et la description du blog sélectionné comme paramètres de la route
    this.router.navigate(['editpagecompo'], { queryParams: { titre: this.editTitre, description: this.editDescription } });
  }

  refreshBlogs(): void {
    this.blogs = this.listeBlogEnregistresService.titreDescription;
  }
}
