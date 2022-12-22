import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReeditService {
  // Object to store the titre/description pairs
  titreDescription: { [titre: string]: string } = {};

  constructor() {}

  // Method to add a new titre/description pair
  setTitreDescription(titre: string, description: string): void {
    this.titreDescription[titre] = description;
  }

  // Method to retrieve the description for a given titre
  getTitreDescription(titre: string): string | undefined {
    return this.titreDescription[titre];
  }

  // Method to delete a titre/description pair from the list
  deleteTitre(titre: string): void {
    delete this.titreDescription[titre];
  }
}
