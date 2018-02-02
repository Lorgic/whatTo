import { FormGroup } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the LorTextAreaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lor-text-area',
  templateUrl: 'lor-text-area.html'
})
export class LorTextAreaComponent {
  @Input('label') public label: string;
  @Input('parent') public form: FormGroup;
  @Input('control') public control: string;

  @Output() public updateText: EventEmitter<object> = new EventEmitter<object>();

  public isFocussed: boolean = false;
  constructor() {
  }
  ngOnInit(){
  }

  public setHeight(textarea) {

    textarea.rows = 1;

    const style = window.getComputedStyle(textarea, null);
    const padding = parseInt(style.paddingTop.split('px')[0], 10) + parseInt(style.paddingBottom.split('px')[0], 10);
    const fontSize = parseInt(style.fontSize.split('px')[0], 10);

    // the scrollheight has to be subtracted by the padding-top + padding-bottom
    // and divided by the font size
    textarea.rows = (textarea.scrollHeight - padding) / fontSize;

    // max height for textareas is 5 rows
    if (textarea.rows > 5) {
      textarea.rows = 5;
    }
  }

  public onChange(ev) {
    this.updateText.emit(ev._value);
  }

  public toggleFocus(){
    this.isFocussed = !this.isFocussed;
  }
}
