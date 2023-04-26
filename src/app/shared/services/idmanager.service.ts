import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdmanagerService {

  constructor() { }
  findIndexById(id: number, array: any[]): number {
    return array.findIndex((element: any): any => element.id === id);
  }

  generateUniqueId(existingIds: number[]): number {
    if (existingIds.length >= Number.MAX_SAFE_INTEGER) {
      throw new Error('impossible de génerer un id');
    }
    let id: number;
    do {
      id = Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1)) + 1;
    } while (existingIds.includes(id));
    return id;
  }

}
