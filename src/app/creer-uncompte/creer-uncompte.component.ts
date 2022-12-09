import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { AuthService } from 'src/app/service/auth-service/auth.service';

@Component({
  selector: 'app-creer-uncompte',
  templateUrl: './creer-uncompte.component.html',
  styleUrls: ['./creer-uncompte.component.scss']
})
export class CreerUncompteComponent implements OnInit {
  creruncomptemodel!: LoginModel;
  isValid: boolean = true;

  @Input() confirmer: string = '';


  compteForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    // this.compteForm = this.formBuilder.group(
    //   {
    //     nom : ['', [Validators.required, Validators.toString]], 
    //     prenom : ['', [Validators.required, Validators.toString]],
    //     motdepasse : ['', [Validators.required]],
    //     email : ['', [Validators.required, Validators.toString]]
    //   }

    // );



    this.creruncomptemodel = new LoginModel({
      email: "", motdepasse: { pwd: ""},
      terms: false
    });
  }

  controlecreation(): void {
    console.log('ici controle()', this.creruncomptemodel.email, this.creruncomptemodel.motdepasse);
    if (!this.creruncomptemodel.motdepasse.pwd || !this.creruncomptemodel.motdepasse.confirmPwd || !this.creruncomptemodel.email) {
      {
        this.isValid = true;
      }
    } else {
      this.isValid = false;
    }
    var pattern = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm);
  }

  submitCompte() {
    debugger //Pour voire si ça marche
    var donnesCompte = this.compteForm.getRawValue();
  }

  Enregistrer(): void {
    if (this.creruncomptemodel.motdepasse.pwd == this.creruncomptemodel.motdepasse.confirmPwd) {
      this.controlecreation();
      this.router.navigateByUrl('auth/login');
    }
  }

}


