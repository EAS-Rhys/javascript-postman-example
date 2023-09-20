# Javascript Postman scenario
Javascript example using a postman as an example for explaining loops, conditionals and functions.

The JSON file is the equivalent of a delivery list the postman would use.

The JSON file contains multiple streets and in each street, multiple deliveries. This requires the use of loops to help the postman 'walk' down each street.
Whilst 'walking' down each street we require the use of conditionals to check each house number against the delivery list to see if the house number has a delivery.
We then need a further conditional to check what type of package the delivery is and if it requires a signature.

There is a file called postActions that contains all the individual actions the postman is required to do repeatedly to complete all his deliveries. These are in the form of functions that accept the required information as inputs.

All functions in the postActions file use console log to inform the console output of every action taken.


