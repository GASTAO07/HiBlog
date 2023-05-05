import { Injectable } from '@angular/core';
import { Hashtag } from '../../interfaces/hashtag.interface';
import { IdmanagerService } from 'src/app/shared/services/idmanager.service';

@Injectable()

export class HashtagService {
  private hashtags: Hashtag[] = [];

  constructor(private idmanagerService: IdmanagerService) { }

  getHashtagList(): Hashtag[] {
    return this.hashtags;
  }

  addHashtag(label: string): void {
    const id = this.idmanagerService.generateUniqueId(this.hashtags.map((hashtag: Hashtag): number => hashtag.id));
    this.hashtags.push({ id: id, label: label });
  }

  getHashtagById(id: number): Hashtag {
    const index = this.idmanagerService.findIndexById(id, this.hashtags);
    return index !== -1 ? this.hashtags[index] : null;
  }
}
