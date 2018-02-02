import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddInstructionsPage } from './add-instructions';

@NgModule({
  declarations: [
    AddInstructionsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddInstructionsPage),
    ComponentsModule
  ],
})
export class AddInstructionsPageModule {}
