import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { ShoppingListService } from 'src/app/Shared/Services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  isShow = false;

  constructor(private shopListService: ShoppingListService) { }

  ngOnInit() {
  }

  toShoppingList(ingredient: Ingredient[]) {
    this.shopListService.recipeToShoppingList(ingredient);
  }

  callDirective() {
     this.isShow = !this.isShow;
  }
}
