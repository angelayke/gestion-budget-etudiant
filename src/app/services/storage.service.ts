import { Injectable } from '@angular/core';
import { errors } from 'src/constants/errors.constants';

@Injectable({
  providedIn: "root"
})
export class StorageService {

  constructor() { }

  private readonly storage = localStorage;

  setItem<T>(key: string, value: T): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T | null {
    return JSON.parse(this.storage.getItem(key) || 'null') as T;
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
  }
}
