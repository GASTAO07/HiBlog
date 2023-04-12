import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user/interfaces/user.interface';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-creer-uncompte',
  templateUrl: './creer-uncompte.component.html',
  styleUrls: ['./creer-uncompte.component.scss']
})
export class CreerUncompteComponent implements OnInit {
  titrePage: string;
  textButton: string;
  newUser: User = {
    id: 0,
    email: '',
    nom: '',
    prenom: '',
    motdepasse: { pwd: '' }
  };
  isValid: boolean = true;

  constructor(private router: Router,
    private userService: UserService,
    public route: ActivatedRoute, ) { }

  ngOnInit(): void {
    // eslint-disable-next-line dot-notation
    const id = parseInt(this.route.snapshot.queryParams['id'], 10);
    if (!!id) {
      const userFound = this.userService.getUserById(id);
      if (!!userFound) {
        this.newUser = userFound;
        this.titrePage = 'Modifier mon compte';
        this.textButton = 'Enregistrer';
      } else {
        console.error('id invalide');
      }
    } else {
      this.titrePage = 'Créer mon compte';
      this.textButton = 'Créer un compte';
      this.newUser = { nom: '', prenom: '', email: '', motdepasse : { pwd : ''} }; // Initialise s'il n'y pas d'id
    }
  }

  controlecreation(): void {
    if (!this.newUser.motdepasse.pwd || !this.newUser.motdepasse.confirmPwd || !this.newUser.email) {
      {
        this.isValid = true;
      }
    } else {
      this.isValid = false;
    }
  }

  enregistrerNewUser(): void {
    if (this.newUser.motdepasse.pwd === this.newUser.motdepasse.confirmPwd) {
      this.controlecreation();

      this.userService.setUser({
        email: this.newUser.email,
        nom: this.newUser.nom,
        prenom: this.newUser.prenom,
        motdepasse: {
          pwd: this.newUser.motdepasse.pwd,
        },
        id: Math.floor(Math.random() * 1000),
      });
      this.router.navigateByUrl('/auth/login');
    }
  }

  enregistrerChangesNewUser(): void {
    if (this.newUser.motdepasse.pwd === this.newUser.motdepasse.confirmPwd) {
      this.controlecreation();
      this.userService.updateUser(this.newUser);
      this.router.navigateByUrl('/user/profile');
    }
  }

  cancelChangesNewUser(): void {
    this.router.navigate(['/user/profile']);
  }

  cancelCreateNewUser(): void {
    this.router.navigate(['/auth/login']);
  }

}


