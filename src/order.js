

function takeOrder(order, deliveryOrders) {
  if(deliveryOrders.length < 3){
  return deliveryOrders.push(order)
  } else {
    return
  }
}

function refundOrder(orderNumber, deliveryOrders){
  
  for( i = 0; i < deliveryOrders.length; i++){
    if(deliveryOrders[i].orderNumber === orderNumber) {
      return deliveryOrders.splice([i], 1)
  } 
 }
}

function listItems(deliveryOrders) {
  var items = []
  for( i = 0; i < deliveryOrders.length; i++){
    items.push(deliveryOrders[i].item)
  }
  return items.join(", ")
}

function searchOrder(deliveryOrders, itemOrder) {
  
  for( var i = 0; i < deliveryOrders.length; i++){
    
      if(deliveryOrders[i].item === itemOrder)
      return true
    } 
      return false
  }
  


// function searchOrder(deliveryOrders,itemName) {
//   //item and includes is undefined
// for (var i=0; i < deliveryOrders.length; i++) {
//   if (deliveryOrders[i].item === itemName) 
//   return true 
//   }
//   return false
// }
  
  
  


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}