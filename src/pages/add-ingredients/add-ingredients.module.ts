import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddIngredientsPage } from './add-ingredients';

@NgModule({
  declarations: [
    AddIngredientsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddIngredientsPage),
  ],
})
export class AddIngredientsPageModule {}
