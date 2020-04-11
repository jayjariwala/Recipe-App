import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from "rxjs/operators";
import { AuthService } from '../auth/auth.service';
@Injectable({
  providedIn: 'root'
})

export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

  storeRecipes() {
    const recipe: Recipe[] = this.recipeService.getRecipe();
    this.http.put('https://ng-recipeapp-71435.firebaseio.com/recipes.json', recipe)
      .subscribe(response => {
        console.log("Data Stored successfully!");
      })
  }

  fetchRecipe() {
    return this.http.get<Recipe[]>('https://ng-recipeapp-71435.firebaseio.com/recipes.json')
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return {...recipe , ingredients: recipe.ingredients ? recipe.ingredients : [] };
        })
      }), tap( recipes => {
        this.recipeService.setRecipe(recipes);
      }))
  }
}
