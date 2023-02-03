export class LoginModel {
  [x: string]: any;
  static addEventListener(): void {
    throw new Error('Method not implemented.');
  }
  email!: string;
  motdepasse !: {
    pwd: string,
    confirmPwd: string,
  };

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
