import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, FormArray } from '@angular/forms';


/**
 * Generated class for the AddRecipePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-recipe',
  templateUrl: 'add-recipe.html',
})
export class AddRecipePage {

  public addRecipeForm: FormGroup;
  public ingredientsList = [
    'aardbei',
    'ananas',
    'anijs',
    'appel',
    'avocado'
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.addRecipeForm  = new FormGroup({
      recipeName: new FormControl('', []),
      servings: new FormControl('', []),
      ingredients: new FormArray([
        new FormGroup({
          name: new FormControl('', []),
          quantity: new FormControl('', [])
        })
      ])
    });
  }

  public get ingredients(): FormArray{
    return this.addRecipeForm.get('ingredients') as FormArray
  }
  public addIngredientInput(){
    this.ingredients.push(new FormGroup({name: new FormControl('', []), quantity: new FormControl('', [])}))
  }
  public deleteIngredientInput(input: number){
    this.ingredients.removeAt(input);
  }
  public onChangeIngredients(text){
  }
  public onSubmit(){

  }
  //Move to lor-text-input service

}
