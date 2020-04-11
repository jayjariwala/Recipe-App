import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  recipeSelected = new Subject<Recipe> ();
  recipeChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  private recipes: Recipe[] = [];
  // private recipes: Recipe[] = [
  //   new Recipe('A Test Recipe',
  //    'Tasty Schnitzel',
  //     'https://image.shutterstock.com/z/stock-photo-tasty-schnitzel-with-potato-chips-537082519.jpg',
  //      [
  //        new Ingredient('Meat', 1),
  //        new Ingredient('French Fries', 20),
  //      ]),
  //   new Recipe('Big Fat Burger',
  //    'What else you need to say?',
  //     'https://www.girardatlarge.com/wp-content/uploads/2014/02/Burger.jpg',
  //      [
  //        new Ingredient('Buns', 2),
  //        new Ingredient('Meat', 1)
  //      ])
  // ];

  setRecipe(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next([...this.recipes]);
  }

  getSpecificRecipe(position) {
    return this.recipes[position];
  }

  getRecipe() {
    return [...this.recipes];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe( recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next([...this.recipes])
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next([...this.recipes]);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next([...this.recipes]);
  }
}
