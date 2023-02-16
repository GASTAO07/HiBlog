import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class TableauEmailPasswordService {
  private user: User[] = [];
  constructor() { }

  addUser(user: User): void {
    this.user.push(user);
  }

  getUser(email: string): User | undefined {
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    return this.user.find(user => user.email === email);
  }

  getUserById(id: number): User | undefined {
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    return this.user.find(user => user.id === id);
  }

  modifyUser(id: number, email: string, motdepasse: { pwd: string, confirmPwd?: string }): void {
    // eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
    const index = this.user.findIndex(user => user.id === id);
    if (index !== -1) {
      this.user[index] = {
        id: id,
        email: email,
        motdepasse: { pwd: motdepasse.pwd, confirmPwd: motdepasse.confirmPwd }
      };
    } else {
      throw new Error('Email/Password n\'existe pas');
    }
  }

  hasUser(email: string): boolean {
    return this.user.hasOwnProperty(email);
  }
}

