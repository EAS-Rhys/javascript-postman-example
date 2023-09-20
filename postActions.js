const walkDownAStreet = function(deliveryList,street){

  // Print to console which street we are walking down
  console.log("Walking down: " + street)

  // creating a variable with the number of houses on the current street from the master data object to simplify the reading of the code
  const houses = deliveryList.streets[street].houses
  // Print to console how many houses are in the street
  console.log("There are " + houses + " houses in " + street)

  // creating a variable containing the sub object 
  const currentStreetDeliveryList = deliveryList.streets[street].deliveries
  // Print to console the delivery list for this street
  console.log("Delivery list for " + street + ":\n" + JSON.stringify(currentStreetDeliveryList,undefined,4) + "\n\n")

  // walking past each house on the street
  for(let houseNumber=1;houseNumber<=houses;houseNumber++){

    // Print to console what house we are walking past
    console.log("Walking past house number: " + houseNumber)

    // Print to console we are checking if the house number is on the delivery list
    console.log(" Checking if house number: " +houseNumber+ " is on the delivery list")
    // checking delivery list to see if the house has a delivery
    checkIfHouseHasADelivery(houseNumber,currentStreetDeliveryList)

  }
}

const checkIfHouseHasADelivery = function(housenumber, deliveryList){
  //set variable so we know if the house number has a delivery
  let match = false
  // check all deliveries for this street to see if the current house number is on there
  for(let deliveryListItem=0; deliveryListItem < deliveryList.length; deliveryListItem++){



    if(deliveryList[deliveryListItem].number == housenumber){
      // if the current house number is on the list deliver the item
      deliverItem(deliveryList[deliveryListItem])

      //set match variable to true
      match = true
    } 
  }

  if (match == false){
    // Print to console that the house had no deliveries
    console.log("   House number: " + housenumber + " is not on the delivery list\n")

  }
}

const deliverItem = function(deliveryItem){

  // Print to console that the current house has a delivery and it's type
  console.log("\n\nHouse number: " + deliveryItem.number + " has a delivery. \n Package type: " + deliveryItem.packageType + "\n Signature Required: " + deliveryItem.signatureRequired)

  if(deliveryItem.packageType == "Envelope"){
    // Print to console that delivery was successfull
    console.log("Envelope delivered to number: " + deliveryItem.number + " through the letterbox\n\n")
  } else if(deliveryItem.packageType == "Package"){
    knockDoor(deliveryItem)
  }
}

const knockDoor = function(deliveryItem){
  // Print to console that we have knocked the door
  console.log("Knocked on door number: " + deliveryItem.number + ", waiting for answer")

  if(deliveryItem.signatureRequired == true){
    // Print to console that we can't leave package without signature
    console.log("Left a note to say we will re-attempt delivery tomorrow\n\n")

  }else {
    // Print to console that we have left package by the door
    console.log("Package successfully delivered to number: " + deliveryItem.number + " left by the door\n\n")

  }
}

module.exports = { walkDownAStreet, checkIfHouseHasADelivery, deliverItem, knockDoor };
