import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2018/06/01/20/28/chicken-3447092_960_720.jpg'),
    new Recipe('Another test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2018/06/01/20/28/chicken-3447092_960_720.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeEl: Recipe) {
    this.recipeWasSelected.emit(recipeEl);
  }

}
