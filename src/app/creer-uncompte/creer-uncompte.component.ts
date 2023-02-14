import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/user.interface';
import { AuthService } from '../service/auth-service/auth.service';

@Component({
  selector: 'app-creer-uncompte',
  templateUrl: './creer-uncompte.component.html',
  styleUrls: ['./creer-uncompte.component.scss']
})
export class CreerUncompteComponent implements OnInit {
  creruncompte: User = {
    nom: '',
    email: '',
    motdepasse: {
      pwd: '',
      confirmPwd: '',
    }
  };

  isValid: boolean = true;
  @Input() confirmer: string = '';

  constructor(private router: Router,
   private auth: AuthService ) { }

  ngOnInit(): void {
  }

  controlecreation(): void {
    if (!this.creruncompte.motdepasse.pwd || !this.creruncompte.motdepasse.confirmPwd || !this.creruncompte.email) {
      {
        this.isValid = true;
      }
    } else {
      this.isValid = false;
    }
  }

  enregistrer(): void {
    if (this.creruncompte.motdepasse.pwd === this.creruncompte.motdepasse.confirmPwd) {
      this.controlecreation();
      this.auth.setUser({
        email: this.creruncompte.email,
        nom: this.creruncompte.nom,
        prenom: this.creruncompte.prenom,
        motdepasse: {
          pwd: this.creruncompte.motdepasse.pwd,
        }
      });
      this.router.navigateByUrl('auth/login');
    }
  }

}


