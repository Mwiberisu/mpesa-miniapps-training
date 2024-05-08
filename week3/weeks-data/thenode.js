function main() {
  const hello = document.getElementById("hello");
  hello.style.color = "magenta";
  hello.innerHTML = "You clicked!!".toUpperCase();

  addElement();
}
main();

function addElement() {
  document.body.append(document.createElement("hr")); //add a line
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const divContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(divContent);
  document.body.append(newDiv);
  document.body.append(document.createElement("hr"));
}
