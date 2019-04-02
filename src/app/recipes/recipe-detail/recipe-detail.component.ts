import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { ShoppingListService } from 'src/app/Shared/Services/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/Shared/Services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;

  isShow = false;

  constructor(private shopListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  toShoppingList(ingredient: Ingredient[]) {
    this.shopListService.recipeToShoppingList(ingredient);
  }

  callDirective() {
     this.isShow = !this.isShow;
  }



}
