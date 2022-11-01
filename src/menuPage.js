function menuTabDisplay() {
  const mainBody = document.createElement("div");
  mainBody.setAttribute("id", "mainBody");

  const restaurantName = document.createElement("h2");
  restaurantName.setAttribute("id", "restaurantName");

  const mItemOne = document.createElement("div");
  mItemOne.setAttribute("id", "mItemOne");
  mItemOne.setAttribute("class", "menuBox");

  const imgItemOne = document.createElement("img");
  imgItemOne.setAttribute("id", "imgItemOne");
  imgItemOne.setAttribute("class", "menuFood");
  imgItemOne.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQjSqKN2XoCTMZE7av6_hLMU7JvXcXmv-fYg&usqp=CAU";

  const textItemOne = document.createElement("div");
  textItemOne.setAttribute("id", "textItemOne");
  textItemOne.setAttribute("class", "menuText");

  const headItemOne = document.createElement("h3");
  headItemOne.setAttribute("id", "headItemOne");
  headItemOne.textContent = "Potato Stew with Goat: $11.99";

  const paraItemOne = document.createElement("p");
  paraItemOne.setAttribute("id", "paraItemOne");
  paraItemOne.textContent = "Our signature meat on skewers.";

  const mItemTwo = document.createElement("div");
  mItemTwo.setAttribute("id", "mItemTwo");
  mItemTwo.setAttribute("class", "menuBox");

  const imgItemTwo = document.createElement("img");
  imgItemTwo.setAttribute("id", "imgItemTwo");
  imgItemTwo.setAttribute("class", "menuFood");
  imgItemTwo.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3ne7zb-xAH8QNQnGtL4xj8dQa-CBUauFuA&usqp=CAU";

  const textItemTwo = document.createElement("div");
  textItemTwo.setAttribute("id", "textItemTwo");
  textItemTwo.setAttribute("class", "menuText");

  const headItemTwo = document.createElement("h3");
  headItemTwo.setAttribute("id", "headItemTwo");
  headItemTwo.textContent = "Goat Kebabs: $9.99";

  const paraItemTwo = document.createElement("p");
  paraItemTwo.setAttribute("id", "paraItemTwo");
  paraItemTwo.textContent =
    "The potatoes in our stew soak up the gamey flavour of goat and a subtle hint of our mild curry.";

  const mItemThree = document.createElement("div");
  mItemThree.setAttribute("id", "mItemThree");
  mItemThree.setAttribute("class", "menuBox");

  const imgItemThree = document.createElement("img");
  imgItemThree.setAttribute("id", "imgItemThree");
  imgItemThree.setAttribute("class", "menuFood");
  imgItemThree.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4GtcGKp6M4DeVOOqBJrPdoWmwSFu3d81c9Q&usqp=CAU";

  const textItemThree = document.createElement("div");
  textItemThree.setAttribute("id", "textItemThree");
  textItemThree.setAttribute("class", "menuText");

  const headItemThree = document.createElement("h3");
  headItemThree.setAttribute("id", "headItemThree");
  headItemThree.textContent = "Pasta: $8.99";

  const paraItemThree = document.createElement("p");
  paraItemThree.setAttribute("id", "paraItemThree");
  paraItemThree.textContent = "Our only meal without meat.";

  const mItemFour = document.createElement("div");
  mItemFour.setAttribute("id", "mItemFour");
  mItemFour.setAttribute("class", "menuBox");

  const imgItemFour = document.createElement("img");
  imgItemFour.setAttribute("id", "imgItemFour");
  imgItemFour.setAttribute("class", "menuFood");
  imgItemFour.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KWRTJRQp1FwYla27oL4jhCPx_OD6WYM_iRhe8pSKbfU21O1A12GcGn4W2lnQYyYfNkY&usqp=CAU";

  const textItemFour = document.createElement("div");
  textItemFour.setAttribute("id", "textItemFour");
  textItemFour.setAttribute("class", "menuText");

  const headItemFour = document.createElement("h3");
  headItemFour.setAttribute("id", "headItemFour");
  headItemFour.textContent = "Gyro: $9.99";

  const paraItemFour = document.createElement("p");
  paraItemFour.setAttribute("id", "paraItemFour");
  paraItemFour.textContent = "Slices of slowly cooked meat.";

  mainBody.appendChild(restaurantName);
  textItemOne.appendChild(headItemOne);
  textItemOne.appendChild(paraItemOne);
  mItemOne.appendChild(textItemOne);
  mItemOne.appendChild(imgItemOne);
  mainBody.appendChild(mItemOne);

  textItemTwo.appendChild(headItemTwo);
  textItemTwo.appendChild(paraItemTwo);
  mItemTwo.appendChild(textItemTwo);
  mItemTwo.appendChild(imgItemTwo);
  mainBody.appendChild(mItemTwo);

  textItemThree.appendChild(headItemThree);
  textItemThree.appendChild(paraItemThree);
  mItemThree.appendChild(textItemThree);
  mItemThree.appendChild(imgItemThree);
  mainBody.appendChild(mItemThree);

  textItemFour.appendChild(headItemFour);
  textItemFour.appendChild(paraItemFour);
  mItemFour.appendChild(textItemFour);
  mItemFour.appendChild(imgItemFour);
  mainBody.appendChild(mItemFour);
  //menu.appendChild(mainBody);
  container.appendChild(mainBody);
}

export { menuTabDisplay };
