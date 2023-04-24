import { Category } from './category.interface';

export interface Blog {
    id?: number,
    titre: string,
    description: string,
    category: Category,
  }
