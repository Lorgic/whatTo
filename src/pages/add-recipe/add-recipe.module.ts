import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddRecipePage } from './add-recipe';

@NgModule({
  declarations: [
    AddRecipePage,
  ],
  imports: [
    IonicPageModule.forChild(AddRecipePage),
    ComponentsModule
  ],
})
export class AddRecipePageModule {}
