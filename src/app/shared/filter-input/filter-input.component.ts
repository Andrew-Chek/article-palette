import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss']
})
export class FilterInputComponent {
  @Output() keywordChange = new EventEmitter<string>();
  searchKeyword: string = '';

  onInputChange() {
    this.keywordChange.emit(this.searchKeyword);
  }
}
