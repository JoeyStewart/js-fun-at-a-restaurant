function nameMenuItem(item) {
  
  return`Delicious ${item}`;
}
console.log(nameMenuItem());

function createMenuItem(menuItemName, price, type) {
  // console.log("name", name)
  // console.log("price", price)
  // console.log("type", type)
 var menuItem = {
    name: menuItemName,
    price: price,
    type: type
  }
  return menuItem;
    
  }

  function addIngredients(food, ingredients) {
    
    if(!ingredients.includes(food)){
      return ingredients.push(food);
    } else {
      return 
    }
  }

 function formatPrice(formattedPrice) {
  return `$${formattedPrice}`
 }

 function decreasePrice(decreasedPrice){
  return (90 / 100) * decreasedPrice 
 }
 
 function createRecipe(title, ingredients, menuItemType){
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return recipe
 }

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


