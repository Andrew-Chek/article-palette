import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/shared/interfaces/Article';
import { ArticlesResponse } from 'src/app/shared/interfaces/ArticlesResponse';

@Injectable({
  providedIn: 'root'
})
export class ArticleApiService {

  private baseUrl = 'https://api.spaceflightnewsapi.net/v4/articles';

  constructor(private http: HttpClient) {}

  getArticleById(id: number): Observable<Article> {
    const url = `${this.baseUrl}/?id=${id}`;
    return this.http.get<Article>(url);
  }

  getArticlesWithPagination(limit: number, offset: number): Observable<ArticlesResponse> {
    const url = `${this.baseUrl}/?limit=${limit}&offset=${offset}`;
    return this.http.get<ArticlesResponse>(url);
  }
}
