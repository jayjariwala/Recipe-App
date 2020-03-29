import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from '@angular/core';
export class ShoppingListService {
  constructor() { }
  newIngredientAdded = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomoatos', 5)
  ];

  get getIngredients() {
    return [...this.ingredients];
  }

  addnewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.newIngredientAdded.emit(this.ingredients);
  }

  addIngredients( ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.newIngredientAdded.emit([...this.ingredients]);
  }
}
