import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  pageSize: number = 10;
  pageIndex: number = 0;

  constructor() {}

  setPageSizeAndIndex(pageSize: number, pageIndex: number) {
    this.pageSize = pageSize;
    this.pageIndex = pageIndex;
  }

  getPageSize() {
    return this.pageSize;
  }

  getPageIndex() {
    return this.pageIndex;
  }
}
