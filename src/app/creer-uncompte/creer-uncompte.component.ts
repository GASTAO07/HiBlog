import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';

@Component({
  selector: 'app-creer-uncompte',
  templateUrl: './creer-uncompte.component.html',
  styleUrls: ['./creer-uncompte.component.scss']
})
export class CreerUncompteComponent implements OnInit {
  creruncomptemodel!: LoginModel;
  isValid: boolean = true;
  @Input() confirmer: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.creruncomptemodel = new LoginModel({
      email: '', motdepasse: { pwd: '' },
      terms: false
    });
  }

  controlecreation(): void {
    if (!this.creruncomptemodel.motdepasse.pwd || !this.creruncomptemodel.motdepasse.confirmPwd || !this.creruncomptemodel.email) {
      {
        this.isValid = true;
      }
    } else {
      this.isValid = false;
    }
  }

  enregistrer(): void {
    if (this.creruncomptemodel.motdepasse.pwd === this.creruncomptemodel.motdepasse.confirmPwd) {
      this.controlecreation();
      this.router.navigateByUrl('auth/login');
    }
  }

}


