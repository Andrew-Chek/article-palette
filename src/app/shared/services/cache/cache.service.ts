import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache = new Map<string, { data: any, expiration: number }>();

  get<T>(key: string): T | null {
    const cachedItem = this.cache.get(key);

    if (cachedItem) {
      if (Date.now() < cachedItem.expiration) {
        return cachedItem.data;
      } else {
        this.cache.delete(key);
      }
    }
    return null;
  }

  set<T>(key: string, data: T, expirationInSeconds: number): void {
    const expiration = Date.now() + expirationInSeconds * 1000;
    this.cache.set(key, { data, expiration });
  }
}
