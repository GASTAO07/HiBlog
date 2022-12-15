import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableauEmailPasswordService {
  // Objet pour stocker les paires email/mot de passe
  private emailPasswords: { [email: string]: string } = {};

  constructor() {}
  // Méthode pour ajouter une nouvelle paire email/mot de passe
  addEmailPassword(email: string, password: string): void {
    this.emailPasswords[email] = password;
    console.log('yoooooooo', this.emailPasswords);
  }

  // Méthode pour récupérer le mot de passe d'un email donné
  getPasswordForEmail(email: string): string | undefined {
    return this.emailPasswords[email];
  }

  // Méthode pour vérifier si un email donné est déjà dans la liste
  hasEmail(email: string): boolean {
    return this.emailPasswords.hasOwnProperty(email);
  }
}

