export class LoginModel {
    static addEventListener(arg0: string, onContinue: any) {
      throw new Error('Method not implemented.');
    }
    email!: string;
    terms!: boolean;
    motdepasse !: {
        pwd: string;
        confirmPwd: string;
    };

    constructor(values: Object = {}) {
        //Constructor constructeur d'initialisation 
        //méthode qui renvoie l'objet cible.
        Object.assign(this, values);
    }
}