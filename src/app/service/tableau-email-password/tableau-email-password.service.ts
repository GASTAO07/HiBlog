import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableauEmailPasswordService {
  // Objet pour stocker les paires email/mot de passe
  private emailPasswords: { [email: string]: string } = {};

  constructor() {}


  // ------------------------------------------------------------------------------------

  // Méthode pour ajouter une nouvelle paire email/mot de passe
  addEmailPassword(email: string, password: string): void {
    this.emailPasswords[email] = password;
    console.log('yoooooooo', this.emailPasswords);
  }

  // ------------------------------------------------------------------------------------

  // Méthode pour récupérer le mot de passe d'un email donné
  getPasswordForEmail(email: string): string | undefined {
  // renvoyer 'undefined si aucun mot de passe n’est associé à l’adresse e-mail.
    return this.emailPasswords[email];
    /* prend une adresse e-mail comme argument et renvoie
    le mot de passe associé à cette adresse e-mail, s’il exist*/
  }

  // ------------------------------------------------------------------------------------

  //  vérifier si une adresse e-mail donnée est présente dans le 'emailPasswords objet
  hasEmail(email: string): boolean {
    return this.emailPasswords.hasOwnProperty(email);
    /*
    hasOwnProperty() Méthode intégrée d’objets qui retourne une valeur booléenne
    indiquant si l’objet possède une propriété avec la clé spécifiée.

    il prend la clé (nom de la propriété) comme argument.
    */
  }
}

