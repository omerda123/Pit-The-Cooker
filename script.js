class Cake {
    constructor() { }

    addProperty(ingredients) {
        ingredients.forEach(item => this[item[0]] = item[1]);
    }
}

const subtractCakeIngredients = (recipe, ingredients) => {
    const ingredientsKeys = Object.keys(ingredients);
    ingredientsKeys.forEach(ingredient => {
        ingredients[ingredient] = ingredients[ingredient] - recipe[ingredient];
    }
    )
    return (ingredients);

}

const canCook = (recipe, ingredients) => {

    const recipeKeys = Object.keys(recipe);
    const ingredientsKeys = Object.keys(ingredients);
    if (recipeKeys.length > ingredientsKeys.length) {
        console.log("you need more ingredients for this cake")
        return false;
    }
    else {
        const res = recipeKeys.filter(ingredient => { return (recipe[ingredient] > ingredients[ingredient]) })
        if (res.length === 0) {
            counter++;
            console.log(`you can make ${counter} cakes`);
            ingredients = subtractCakeIngredients(recipe, ingredients);
            return true;
        }
        else {
            res.forEach(item => console.log(`you need more ${item}`))
            return false;
        }
        canCook(cake1, ingredients)
    }

}

let counter = 0;
let ingredients = {
    "flour": 500,
    "sugar": 500,
    "eggs": 10,
    "milk": 2000
}

const cake1 = new Cake;
const cake2 = new Cake;
const cake3 = new Cake;
cake1.addProperty([["flour", 100], ["sugar", 20], ["eggs", 1], ["milk", 10]]);
cake2.addProperty([["apples", 3], ["flour", 300], ["sugar", 150], ["oil", 100], ["milk", 100]]);
cake3.addProperty([["flour", 500], ["sugar", 700], ["eggs", 20], ["milk", 200]]);

while (canCook(cake1, ingredients))
    null;
while (canCook(cake2, ingredients))
    null;
while (canCook(cake3, ingredients))
    null;