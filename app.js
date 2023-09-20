// pickup the delivery list
const deliveryList = require("./deliveryList.json")
// get instructions from the boss
const postActions = require("./postActions.js")


const startDeliveryRound = function(deliveryList){
// Print to console we are starting our delivery round
console.log("Starting delivery round! Let's go!")

// Look at list of streets to deliver to
for(street in deliveryList.streets){
  postActions.walkDownAStreet(deliveryList,street)
}

}

startDeliveryRound(deliveryList)

