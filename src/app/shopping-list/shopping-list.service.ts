import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";
export class ShoppingListService {
  constructor() { }
  newIngredientAdded = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomoatos', 5)
  ];

  get getIngredients() {
    return [...this.ingredients];
  }

  addnewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.newIngredientAdded.next(this.ingredients);
  }

  addIngredients( ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.newIngredientAdded.next([...this.ingredients]);
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.newIngredientAdded.next([...this.ingredients]);
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.newIngredientAdded.next([...this.ingredients])
  }
}
