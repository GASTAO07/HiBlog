import { Categorie } from './categorie.interface';

export interface Blog {
    id?: number,
    titre: string,
    description: string,
    category: Categorie,
  }
