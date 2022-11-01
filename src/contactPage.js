function contactTabDisplay() {
  const mainBody = document.createElement("div");
  mainBody.setAttribute("id", "mainBody");

  const restaurantName = document.createElement("h2");
  restaurantName.setAttribute("id", "restaurantName");
  restaurantName.textContent = "The Grazing Goat";

  const locationInfo = document.createElement("div");

  const lTitle = document.createElement("h3");
  lTitle.textContent = "Our Location";

  const lImg = document.createElement("img");
  lImg.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWkHaVfWq6meBbhpnINcrVyVKMQ5JhY2ZDLA&usqp=CAU";

  const lAddress = document.createElement("p");
  lAddress.textContent =
    "9999 W Somewhereia Street, Place, 51 9999. On the corner of 31st and Somewhereia Street.";

  const textContact = document.createElement("div");
  textContact.setAttribute("class", "menuText");

  const headContact = document.createElement("h3");
  headContact.textContent = "Manager: Phillip On'Gute";

  const phoneContact = document.createElement("div");
  phoneContact.textContent = "Phone: 999-999-9999";

  mainBody.appendChild(restaurantName);

  locationInfo.appendChild(lTitle);
  locationInfo.appendChild(lImg);
  locationInfo.appendChild(lAddress);
  mainBody.appendChild(locationInfo);

  textContact.appendChild(headContact);
  textContact.appendChild(phoneContact);
  mainBody.appendChild(textContact);
  //contact.appendChild(contactInfo);
  container.appendChild(mainBody);
}

export { contactTabDisplay };
