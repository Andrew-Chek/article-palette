import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Article } from 'src/app/shared/interfaces/Article';
import { ArticlesResponse } from 'src/app/shared/interfaces/ArticlesResponse';
import { CacheService } from 'src/app/shared/services/cache/cache.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleApiService {

  private baseUrl = 'https://api.spaceflightnewsapi.net/v4/articles';

  constructor(private http: HttpClient, private cacheService: CacheService) {}

  getArticleById(id: number): Observable<Article> {
    const key = `article_${id}`;
    const cachedData = this.cacheService.get<any>(key);

    if (cachedData != null) {
      return of(cachedData);
    }

    return this.http.get<Article>(`${this.baseUrl}/${id}/`).pipe(
      tap(data => this.cacheService.set(key, data, 300))
    );
  }

  getArticlesWithPagination(limit: number, offset: number): Observable<ArticlesResponse> {
    const key = `articles_${limit}_${offset}`;
    const cachedData = this.cacheService.get<any>(key);

    if (cachedData != null) {
      return of(cachedData);
    }

    return this.http.get<ArticlesResponse>(`${this.baseUrl}/?limit=${limit}&offset=${offset}`).pipe(
      tap(data => this.cacheService.set(key, data, 300)) // Cache for 5 minutes (300 seconds)
    );
  }
}
