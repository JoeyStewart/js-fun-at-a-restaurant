// make an object

// utilize object function to alter menu
// if statment

function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
}

function addMenuItem(restaurant, items) {
  var newArray = restaurant.menus[items.type]
  for(var i = 0; i < newArray.length; i++){ 
    if(newArray[i].name === items.name) { 
      return
    }
  }
  newArray.push(items)
}

 function removeMenuItem(restaurant, items, findMenu) {
  var menu = restaurant.menus[findMenu]
  var removeItem = menu.findIndex(function(menuItem) {
    return menuItem.name === items
  })
  if (removeItem !== -1) {
    var takenItem = menu.splice(removeItem, 1)[0]
    return `No one is eating our ${takenItem.name} - it has been removed from the ${findMenu} menu!`
  }
  return `Sorry, we don't sell ${items}, try adding a new recipe!`
}

function checkForFood(restaurant, foodItem) {
  var menu = restaurant.menus[foodItem.type]
  var existItem = menu.find(function(menuItem) {
    return menuItem.name === foodItem.name
  })
  if (existItem) {
    return `Yes, we're serving ${foodItem.name} today!`
  } else {
    return `Sorry, we aren't serving ${foodItem.name} today.`
  }
}


module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  checkForFood
}