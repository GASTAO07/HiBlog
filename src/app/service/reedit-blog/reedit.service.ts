import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReeditService {
  // Objet titre/description pairs
  titreDescription: { [titre: string]: string } = {};

  constructor() {}

  // ------------------------------------------------------------------------------------

  // Méthodde pour renvoyer la description d'un titre
  setTitreDescription(titre: string, description: string): void {
    this.titreDescription[titre] = description;
  }

  // ------------------------------------------------------------------------------------

  // Méthode pour récupérer la description d'un titre donné
  getTitreDescription(titre: string): string | undefined {
    return this.titreDescription[titre];
  }

  // ------------------------------------------------------------------------------------

  // Méthode pour supprimer un couple titre/description de la liste
  deleteTitre(titre: string): void {
    delete this.titreDescription[titre];
  }
}
