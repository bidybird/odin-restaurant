function homeTabDisplay() {
  hip.removeChild(hip.firstElementChild);

  const mainBody = document.createElement("div");
  mainBody.setAttribute("id", "mainBody");

  const restaurantName = document.createElement("h2");
  restaurantName.setAttribute("class", "restaurantName");
  restaurantName.textContent = "The Grazing Goat";

  const goatMeat = document.createElement("img");
  goatMeat.setAttribute("id", "goatMeat");
  goatMeat.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfKYuWI3Yl-kEqWmPCJS2UucO0dFQo7b75_A&usqp=CAU";

  const hook = document.createElement("h3");
  hook.setAttribute("id", "hook");
  hook.textContent = "Don't Give Up the Goat.";

  const foodTestimony = document.createElement("p");
  foodTestimony.setAttribute("id", "foodTestimony");
  foodTestimony.textContent =
    "The Grazing Goat's goat meat is delicious.\nThe goat meat issa so tender and their potatoes are bearable.\n-Blunt Guy";

  mainBody.appendChild(restaurantName);
  mainBody.appendChild(goatMeat);
  mainBody.appendChild(hook);
  mainBody.appendChild(foodTestimony);
  hip.appendChild(mainBody);
  skeleton.appendChild(hip);
  //container.appendChild(mainBody);
}

export { homeTabDisplay };
