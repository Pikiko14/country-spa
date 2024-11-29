import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss',
})
export class SearchBoxComponent {
  @Input()
  placeholder: string = '';

  @Output()
  onValue = new EventEmitter<string>();

  public emitValue (value: string): void {
    this.onValue.emit(value);
  }
}
