// Objects definitions
var sandwiches = { "sandwich": "Hamburger", "calories": "260" };
var fries = { "fries_size": "Large French Fries", "calories": "570" };

// Get output element
var output = document.getElementById('output');

// Print the message
output.innerHTML = `My favorite sandwich is a ${sandwiches.sandwich} which has approximately ${sandwiches.calories} calories, along with it I enjoy eating ${fries.fries_size} which have about ${fries.calories} calories.`;
