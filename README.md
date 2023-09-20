# Javascript Postman scenario
Javascript example using a postman as an example for explaining loops, conditionals and functions.

The JSON file is the equivalent of a delivery list the postman would use.

The JSON file contains multiple streets and in each street, multiple deliveries. This requires the use of loops to help the postman 'walk' down each street.
Whilst 'walking' down each street we require the use of conditionals to check each house number against the delivery list to see if the house number has a delivery.
We then need a further conditional to check what type of package the delivery is and if it requires a signature.

There is a file called postActions that contains all the individual actions the postman is required to do repeatedly to complete all his deliveries. These are in the form of functions that accept the required information as inputs.

All functions in the postActions file use console log to inform the console output of every action taken.



Analogy Explanation
Scenario: A postman is out to deliver mail in a neighborhood.

Postman's Toolkit: The postman has a bag, uniform, pen, etc. These tools enable him to do his job.
Delivery Booklet: This booklet contains a list of streets and houses that need mail delivery. For each house, there's a note about the type of mail (letter or package) and if a signature is required.
Walking Through Streets: The postman goes from one street to another.
Delivering Mail: At each house, he checks his booklet. If there's mail for that house, he delivers it. If it's a package, he may knock or ask for a signature.
Mapping to JavaScript Concepts
Postman's Toolkit = JavaScript files and functions.
Delivery Booklet = JSON file containing data.
Walking Through Streets = Loops in JavaScript.
Delivering Mail = Conditionals (if, else) in JavaScript.
Simplified Process Flow
Start: The postman begins his day.
Open Booklet: To see the list of deliveries.
Street Loop: For each street in the booklet...
House Loop: For each house on the street...
Check Booklet: Is there mail for this house?
Yes: Deliver the mail.
Package?: Knock on the door.
Signature Needed?: Ask for it.
No: Move to the next house.
End: Finish deliveries for the day.
