import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { LorTextInputComponent } from './lor-text-input/lor-text-input';
import { CommonModule } from '@angular/common';
import { LorTextAreaComponent } from './lor-text-area/lor-text-area';
@NgModule({
	declarations: [LorTextInputComponent,
    LorTextAreaComponent],
	imports: [CommonModule, IonicModule],
	exports: [LorTextInputComponent,
    LorTextAreaComponent]
})
export class ComponentsModule {}
