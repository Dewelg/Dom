console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
let node1 = document.getElementById("node1");

node1.textContent = "I used the getElementById(node1) method to access this";

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
let node2 = document.getElementsByClassName("node2")[0];

node2.textContent = "I used the getElementByClassName(node2) method to access this";

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
let h3s = document.getElementsByTagName("h3");

for (let h3 of h3s) {
  h3.textContent =
    'I used the getElementByTagName("h3") method to access all of these';
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
// TODO: Append the created node to the parent node using the element.appendChild() method
let p = document.createElement('p');
let parent = document.querySelector("#parent");
p.textContent = "This node was created using the createElement() method";
parent.appendChild(p);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
//let a = document.createTextNode('I am a <a> tag');

// BONUS: Add a link href to the <a>
let link = document.createElement('a');
link.textContent = "W3";
link.href = "http://www.w3.org/2000/svg"
parent.insertBefore(link,p);

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"

// TODO: Remove the "New Child Node"

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];


// TODO: Create an unordered list element

// TODO: Iterate over the array values, and create a list item element for each

// TODO: Append the new list items to the unordered list element

// TODO: Append the unordered list to the `div#container` under exercise 4 

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
