import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    constructor(private shoppingListService: ShoppingListService) { }

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel',
            'A super-tasty Schnitzel - just awesome!',
            'http://www.tmi-archives.com/sites/default/files/imagecache/large_w490/article-pix/schnitzel490.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Big Fat Burger',
            'What else you need to say?',
            'http://www.dineout.co.in/blog/wp-content/uploads/2016/06/big-burger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

}