import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe> ();

  constructor(private shoppingListService: ShoppingListService) {
  }

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
     'Tasty Schnitzel',
      'https://image.shutterstock.com/z/stock-photo-tasty-schnitzel-with-potato-chips-537082519.jpg',
       [
         new Ingredient('Meat', 1),
         new Ingredient('French Fries', 20),
       ]),
    new Recipe('Big Fat Burger',
     'What else you need to say?',
      'https://www.girardatlarge.com/wp-content/uploads/2014/02/Burger.jpg',
       [
         new Ingredient('Buns', 2),
         new Ingredient('Meat', 1)
       ])
  ];

  get getRecipe() {
    return [...this.recipes];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
