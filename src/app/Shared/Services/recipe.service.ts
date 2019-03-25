import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from '../ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2018/06/01/20/28/chicken-3447092_960_720.jpg',
    [
      new Ingredient('meat', 1),
      new Ingredient('bread', 2)
    ]),
    new Recipe('Another test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2018/06/01/20/28/chicken-3447092_960_720.jpg',
     [
      new Ingredient('lettuce', 4),
      new Ingredient('tomato', 3)
     ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}
