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

function removeMenuItem(){
  
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
  // checkForFood
}