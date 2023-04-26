import { Injectable } from '@angular/core';
import { Blog } from '../../interfaces/blog.interface';
import { Category } from '../../interfaces/category.interface';
import { IdmanagerService } from 'src/app/shared/services/idmanager.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private blogs: Blog[] = [];
  private categories: Category[] = [];

  constructor(private idmanagerService : IdmanagerService) { }

  getCategorieList(): Category[] {
    return this.categories;
  }

  getUniqueCategories(): String[] {
    const allCategories = this.categories.map((categories: Category): string => categories.label);
    const uniqueCategories = allCategories.filter((category: string, index: number, self: string[]): boolean => self.indexOf(category) === index);
    return uniqueCategories;
  }

  addCategories(label: string): void {
    const id = this.idmanagerService.generateUniqueId(this.categories.map((category: Category): number => category.id));
    this.categories.push({ id: id, label: label });
  }

  getCategoryById(id: number): Category {
    const index = this.idmanagerService.findIndexById(id, this.categories);
    return index !== -1 ? this.categories[index] : null;
  }
}
