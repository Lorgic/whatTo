import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Content } from 'ionic-angular';


/**
 * Generated class for the LorTextInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'lor-text-input',
  templateUrl: 'lor-text-input.html'
})
export class LorTextInputComponent {

  @Input('label') public label: string;
  @Input('parent') public form: FormGroup;
  @Input('control') public control: string;
  @Input('suggestions') public inputSuggestions: string[];
  @Input('large') public isLarge: boolean = false;

  @Output() public updateText: EventEmitter<object> = new EventEmitter<object>();

  public isFocussed: boolean = false;
  public suggestions: string[] = [];
  constructor(private content: Content){
  }

  public onChange(ev) {
    if(this.inputSuggestions){
      this.suggestions = this.filterSuggestionsByInput(this.inputSuggestions, ev._value);
    }
    this.updateText.emit(ev._value);
  }

  public useSuggestion(ev) {
    this.form.controls[this.control].setValue(ev);

  }

  public focus(ev){
    this.isFocussed = true;


    if(this.inputSuggestions){
      ev._native.nativeElement.scrollIntoView(true);
      // let top = ev._native.nativeElement.getBoundingClientRect().top;
      // this.content.scrollTo(0, top, 300);
    }

  }

  public unFocus(ev) {
    if(ev.relatedTarget && ev.relatedTarget.className.includes('suggestions-button')){
      console.log(typeof(ev.relatedTarget))
    }else{
      this.isFocussed = false;
    }
  }
  public filterSuggestionsByInput(list: string[], input: string) : string[] {
    var result: string[] = [];
    input = input.toLowerCase();
    if(input.length === 0) return result;
    result = list.filter((item)=> { return item.startsWith(input) && item !== input})
    return result;
  }

}

