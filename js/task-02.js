const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const List = document.querySelector("#ingredients");

const ingredientsList = ingredients.map(item => {
  const ingredient = document.createElement("li");
  ingredient.classList.add("item");
  ingredient.textContent = item;
  return ingredient;
});

List.append(...ingredientsList);
console.log(ingredientsList);