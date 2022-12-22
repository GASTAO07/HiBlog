import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListeBlogEnregistresService {
  // Objet pour stocker les paires titre/description
  titreDescription: { [titre: string]: string } = {};

  constructor() {}
  // Méthode pour ajouter une nouvelle paire titre/description
  addETitreDescription(titre: string, description: string): void {
    this.titreDescription[titre] = description;
    console.log('addETitreDescription', this.titreDescription);
  }

  // Méthode pour récupérer description d'un titre
  getTitreDescription(titre: string): string | undefined {
    // renvoyer 'undefined si aucun description n’est associé au titre
    return this.titreDescription[titre];
    /* prend une adresse e-mail comme argument et renvoie
      le mot de passe associé à cette adresse e-mail, s’il exist*/
  }

  //  vérifier si une adresse e-mail donnée est présente dans le 'emailPasswords objet
  hasTitre(titre: string): boolean {
    return this.titreDescription?.hasOwnProperty(titre);
    /*
    hasOwnProperty() Méthode intégrée d’objets qui retourne une valeur booléenne
    indiquant si l’objet possède une propriété avec la clé spécifiée.

    il prend la clé (nom de la propriété) comme argument.
    */
  }
}
