import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem : { name: string, description: string, imagePath: string };

  constructor(private recipeService: RecipeService) {
  }

  selectItem() {
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }

  ngOnInit(): void {
  }

}
