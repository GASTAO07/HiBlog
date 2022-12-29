// edit-page.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { LoginValidationService } from '../service/auth-service/login-validation-service.service';
import { ListeBlogEnregistresService } from '../service/liste-blog/liste-blog-enregistres.service';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent {
  editTitre: string;
  editDescription: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public editFormComponent : EditFormComponent,
    public loginValidationService : LoginValidationService,
    private listeBlogEnregistresService: ListeBlogEnregistresService,
  ) { }

  // rechTitreDescription(titre: string) : void {
  //   this.editFormComponent.editTitre = titre;
  //   this.editFormComponent.editDescription = this.listeBlogEnregistresService.getTitreDescription(titre);
  // }

  ngOnInit() : void {
    // Récupère le titre du blog à éditer à partir de l'URL
    this.editTitre = this.route.snapshot.queryParams['"titre'];
    // eslint-disable-next-line dot-notation
    this.editDescription = this.route.snapshot.queryParams['description'];
    // console.log('test root', this.route, this.route.snapshot, this.route.snapshot.paramMap);
    console.log('edit-page', this.editDescription, this.editTitre);
  }


  submitEdit(): void {
    // this.editFormComponent.editedBlog.titre = this.editTitre;
    // this.editFormComponent.editedBlog.description = this.editDescription;
    this.listeBlogEnregistresService.addETitreDescription(this.editTitre, this.editDescription);

    this.editTitre = '';
    this.editDescription = '';
    this.router.navigate(['listdeblogs']);
  }

  cancelEdit(): void {
    this.editTitre = '';
    this.editDescription = '';
    this.router.navigate(['edit']);
  }
}
