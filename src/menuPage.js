function menuTabDisplay() {
  const mainBody = document.createElement("div");
  mainBody.setAttribute("id", "mainBody");

  const restaurantName = document.createElement("h2");
  restaurantName.setAttribute("id", "restaurantName");

  const mItemOne = document.createElement("div");
  mItemOne.setAttribute("id", "mItemOne");

  const textItemOne = document.createElement("div");
  textItemOne.setAttribute("id", "textItemOne");

  const headItemOne = document.createElement("h3");
  headItemOne.setAttribute("id", "headItemOne");
  headItemOne.textContent = "Goat Kebabs: $9.99";

  const paraItemOne = document.createElement("p");
  paraItemOne.setAttribute("id", "paraItemOne");
  paraItemOne.textContent = "Our signature meat on skewers.";

  const imgItemOne = document.createElement("img");
  imgItemOne.setAttribute("id", "imgItemOne");
  imgItemOne.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQjSqKN2XoCTMZE7av6_hLMU7JvXcXmv-fYg&usqp=CAU";

  mainBody.appendChild(restaurantName);
  textItemOne.appendChild(headItemOne);
  textItemOne.appendChild(paraItemOne);
  mItemOne.appendChild(textItemOne);
  mItemOne.appendChild(imgItemOne);
  mainBody.appendChild(mItemOne);
  //menu.appendChild(mainBody);
  container.appendChild(mainBody);
}

export { menuTabDisplay };
