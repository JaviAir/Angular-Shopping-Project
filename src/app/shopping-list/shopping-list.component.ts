import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';
import { ShoppingListService } from '../Shared/Services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shopListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopListService.getIngredients();
    this.shopListService.ingredientsUpdated.subscribe(
      (ingredients: Ingredient[]) => { this.ingredients = ingredients; }
    );
  }

}
