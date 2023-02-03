import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableauEmailPasswordService {
  private emailPasswords: { [email: string]: string } = {};
  constructor() { }

  addEmailPassword(email: string, password: string): void {
    this.emailPasswords[email] = password;
  }

  getPasswordForEmail(email: string): string | undefined {
    return this.emailPasswords[email];
  }

  hasEmail(email: string): boolean {
    return this.emailPasswords.hasOwnProperty(email);
  }
}

