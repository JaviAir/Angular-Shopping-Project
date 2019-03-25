import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsUpdated = new EventEmitter<Ingredient[]>();

  constructor() { }

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  newIngredient(eventData: Ingredient) {
    this.ingredients.push(eventData);
    this.ingredientsUpdated.emit(this.ingredients.slice());
  }

  recipeToShoppingList(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.ingredientsUpdated.emit(this.ingredients.slice());
  }

}
