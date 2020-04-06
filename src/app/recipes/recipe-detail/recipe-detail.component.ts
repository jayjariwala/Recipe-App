import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  showItemDetails: Recipe;
  index: number
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.index = +params['id']
          this.showItemDetails = this.recipeService.getSpecificRecipe(+params['id']);
        }
      )
  }

  addIngredientsToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.showItemDetails.ingredients);
  }

  editCurrentRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.index);
    this.router.navigate(['/recipes']);
  }

}
