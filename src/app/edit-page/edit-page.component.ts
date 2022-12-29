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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public editFormComponent : EditFormComponent,
    public loginValidationService : LoginValidationService,
    private listeBlogEnregistresService: ListeBlogEnregistresService,
  ) { }

  ngOnInit() : void {
    // Récupère le titre du blog à éditer à partir de l'URL
    // eslint-disable-next-line dot-notation
    this.editFormComponent.editTitre = this.route.snapshot.queryParams['titre'];
    // eslint-disable-next-line dot-notation
    this.editFormComponent.editDescription = this.route.snapshot.queryParams['description'];
    // console.log('test root', this.route, this.route.snapshot, this.route.snapshot.paramMap);
    console.log('edit-page', this.editFormComponent.editDescription, this.editFormComponent.editTitre);
  }

  submitEdit(): void {
    this.listeBlogEnregistresService.addETitreDescription(this.editFormComponent.editTitre, this.editFormComponent.editDescription);

    this.editFormComponent.editTitre = '';
    this.editFormComponent.editDescription = '';
    this.router.navigate(['listdeblogs']);
  }

  cancelEdit(): void {
    this.editFormComponent.editTitre = '';
    this.editFormComponent.editDescription = '';
    this.router.navigate(['edit']);
  }
}
