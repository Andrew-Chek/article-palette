import { Article } from "./Article";

export interface ArticlesResponse {
    count: number;
    results: Article[];
  }