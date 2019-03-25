import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../Shared/ingredient.model';
import { ShoppingListService } from 'src/app/Shared/Services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shopListService: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(name: string, amount: number) {
    const newIngredient = new Ingredient(name, amount);
    this.shopListService.newIngredient(newIngredient);
  }

}
