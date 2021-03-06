import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [ ]
})
export class RecipesComponent implements OnInit {
  selectedRecipeItem;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipeItem = recipe;
        }
      );
  }

  showRecipeDetails(recipe) {
    this.selectedRecipeItem = recipe;
  }

}
