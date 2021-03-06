// Write your Pizza Builder JavaScript in this file.

// Constants (inc initial value of the state)

let basePrice = 10;
let ingredients = {
  pepperoni: { 
    name: 'pepperoni', 
    price: 1 , 
    state: true,
    querySelector: ".pep",
    buttonClass: ".btn-pepperoni"
  },
  mushrooms: { 
    name: 'Mushrooms', 
    price: 1 , 
    state: true,
    querySelector: ".cap, .stem",
    buttonClass: ".btn-mushrooms"
  },
  greenPeppers: { 
    name: 'Green Peppers', 
    price: 1 , 
    state: true,
    querySelector: ".green-pepper",
    buttonClass: ".btn-green-peppers"
  },
  whiteSauce: { 
    name: 'White sauce', 
    price: 3 , 
    state: false,
    querySelector: ".sauce",
    buttonClass: ".btn-sauce",
    activeCSSClass: "sauce-white"
  },
  glutenFreeCrust: { 
    name: 'Gluten-free crust', 
    price: 5 , 
    state: false, 
    querySelector: ".crust",
    buttonClass: ".btn-crust",
    activeCSSClass: "crust-gluten-free"
  }
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderIngredient(ingredients.pepperoni);
  renderIngredient(ingredients.mushrooms);
  renderIngredient(ingredients.greenPeppers);
  fancyOptionToggle(ingredients.whiteSauce)
  fancyOptionToggle(ingredients.glutenFreeCrust)

  renderButtons();
  renderPrice();
}

// Iteration 1: set the visibility of `<section class="mushroom">`
// Iteration 1: set the visibility of `<section class="green-pepper">`

function renderIngredient(ingredient){
  document.querySelectorAll(ingredient.querySelector)
  .forEach(item => {
    item.style.visibility = ingredient.state ? 'visible' : 'hidden';
  });
}

// Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

function fancyOptionToggle(ingredient){
  let ingredientHTML = document.querySelector(ingredient.querySelector);
  ingredient.state ? ingredientHTML.classList.add(ingredient.activeCSSClass) :  ingredientHTML.classList.remove(ingredient.activeCSSClass);
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`

function renderEachButton(ingredient){
  buttonHTML = document.querySelector(ingredient.buttonClass)
  ingredient.state ? buttonHTML.classList.add("active") : buttonHTML.classList.remove("active");
}

function renderButtons() {
  for(const oneIngredient in ingredients){
    renderEachButton(ingredients[oneIngredient]);
  }
}

// Iteration 4: change the HTML of `<aside class="panel price">`

function renderPrice(){
  let totalPrice  = basePrice;
  let priceList   = `<h2>Your pizza's price</h2>\n\n<b>$10 cheese pizza</b>\n<ul>`
  for(const oneIngredient in ingredients){
    ingredients[oneIngredient].state ? totalPrice += ingredients[oneIngredient].price : null;
    ingredients[oneIngredient].state ? priceList += `<li>$${ingredients[oneIngredient].price} ${ingredients[oneIngredient].name}</li>\n` : null;
  }
  priceList += `</ul>\n<strong>$${totalPrice}</strong>`
  document.querySelector("aside").innerHTML = priceList;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

for(const oneIngredient in ingredients){
  document.querySelector('.btn' + ingredients[oneIngredient].buttonClass).addEventListener('click', () => {
    ingredients[oneIngredient].state = !ingredients[oneIngredient].state;
    renderEverything();
  });
}