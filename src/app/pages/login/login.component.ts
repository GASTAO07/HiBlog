import { LoginValidationService } from 'src/app/service/auth-service/login-validation-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth-service/auth.service';
import { LoginModel } from 'src/app/models/LoginModel';
import { TableauEmailPasswordService } from 'src/app/service/tableau-email-password/tableau-email-password.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  // Définition des variables
  isDisabled: boolean = true;
  loginmodel: LoginModel;

  constructor(
    private router: Router,
    private auth: AuthService,
    private loginValidationService: LoginValidationService,
    private tableauEmailPasswordService : TableauEmailPasswordService
  ) {}

  ngOnInit(): void {
    this.loginmodel = new LoginModel({
      email: '', motdepasse: { pwd: '' },
      terms: false
    });
    /* --- il s’agit d’une classe qui définit un
    modèle(voir models) pour les informations d’identification de connexion

    ------ ngOnInit() est appelée automatiquement par Angular
     lorsque le 'LoginComponentLoginComponent est initialisé et utilisé pour
     initialiser le 'loginmodelloginmodel
    */
  }

  // ------------------------------------------------------------------------------------

  controle(): void {
    console.log('ici controle', this.loginmodel.email, this.loginmodel.motdepasse);
    if (
      !this.loginValidationService.validateEmail(this.loginmodel.email) ||
      !this.loginValidationService.validatePassword(this.loginmodel.motdepasse.pwd)
    ) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }

    /*
    --- la méthode utilise 'loginValidationServiceisDisabled propriété est définie sur true,
    ce qui désactivera le bouton de connexion dans le LoginComponent modèle.
    Si l’e-mail et le mot de passe sont valides, le isDisabled La propriété est définie sur 'false’,
    qui activera le bouton de connexion.
    */

    /*
    --- validateEmail() et validatePassword() Deux méthodes utilisées pour vérifier,
     si l’adresse e-mail et le mot de passe saisis valides.
     */
  }

  // ------------------------------------------------------------------------------------

  onContinue(): void {
    if (this.isDisabled) {
      return;
    }
    // le statut de connexion de l’utilisateur dans le stockage local en appelant 'localStorage.setItem Méthode et passage true comme valeur
    localStorage.setItem('isLoggedIn', 'true');
    this.auth.login();
    this.router.navigateByUrl('pageblog');
    // sessionStorage n’est disponible que pour la durée de la session du navigateur (et est supprimé lorsque l’onglet ou la fenêtre est fermée)

    /* Il semble qu’il s’agisse d’une méthode permettant de passer à l’étape suivante d’un processus
    d’authentification. La méthode vérifie si une certaine condition est remplie (si le isDisabled
      La propriété est 'vraie'true), et si ce n’est pas le cas, il définit l’état de connexion de
      l’utilisateur dans le stockage local sur true, appelle le login() méthode de l' auth et accède à la page PageBlog.*/
  }

  // ------------------------------------------------------------------------------------

  // Utiliser la méthode pour ajouter une nouvelle paire e-mail / mot de passe lors de la création d’un nouveau ?
  creerUncompte(): void {
    // Vérifier si l'email saisi existe déjà dans la liste.
    if (this.tableauEmailPasswordService.hasEmail(this.loginmodel.email)) {
      alert('Désolé, cet e-mail existe déjà !');
      return;
    }
    // Créer un compte
    this.tableauEmailPasswordService.addEmailPassword(this.loginmodel.email, this.loginmodel.motdepasse.pwd);
    this.router.navigateByUrl('CreerUncompte');
  }

  // ------------------------------------------------------------------------------------

  // Récup les infos du compte
  getemail(): string {
    return sessionStorage.getItem(this.loginmodel.email);
  }
  getmotdepasse(): string {
    return sessionStorage.getItem(this.loginmodel.motdepasse.pwd);
  }
}
