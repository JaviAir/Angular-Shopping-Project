import { Injectable } from '@angular/core';
import { Ingredient } from '../ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsUpdated = new Subject<Ingredient[]>();

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
    this.ingredientsUpdated.next(this.ingredients.slice());
  }

  recipeToShoppingList(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.ingredientsUpdated.next(this.ingredients.slice());
  }

}
