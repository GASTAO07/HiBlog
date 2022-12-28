// edit-page.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { LoginValidationService } from '../service/auth-service/login-validation-service.service';

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
    private editFormComponent : EditFormComponent,
    public loginValidationService : LoginValidationService
  ) { }

  submitEdit(): void {

    this.editFormComponent.editedBlog.titre = this.editTitre;
    this.editFormComponent.editedBlog.description = this.editDescription;


    this.editTitre = '';
    this.editDescription = '';
    document.getElementById('edit-blog-form').style.display = 'none';
  }

  cancelEdit(): void {
    this.editTitre = '';
    this.editDescription = '';
    this.router.navigate(['/']);
  }
}
