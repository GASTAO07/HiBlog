export class BlogModel {
    [x: string]: any;
    static addEventListener(): void {
      throw new Error('Method not implemented.');
    }
    blog !: {
        titre: string,
        description : string,
    };

    constructor(values: Object = {}) {
      // Constructor constructeur d'initialisation
      // méthode qui renvoie l'objet cible.
      Object.assign(this, values);
    }
}
