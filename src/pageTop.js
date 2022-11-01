function pageTopLoad() {
  const skeleton = document.createElement("div");
  skeleton.setAttribute("id", "skeleton");

  const topDiv = document.createElement("div");
  topDiv.setAttribute("id", "topDiv");

  const logo = document.createElement("img");
  logo.setAttribute("id", "logo");
  logo.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6NOTIRjNnhmlqygnmP3EFWmIV1pbQoG1oEQ&usqp=CAU";

  const tabs = document.createElement("div");
  tabs.setAttribute("id", "tabs");

  const buttonHome = document.createElement("button");
  buttonHome.setAttribute("id", "buttonHome");
  buttonHome.setAttribute("class", "tablinks");
  buttonHome.textContent = "Home";
  //buttonHome.addEventListener("click"), openTab(e, "home");

  const buttonMenu = document.createElement("button");
  buttonMenu.setAttribute("id", "buttonMenu");
  buttonMenu.setAttribute("class", "tablinks");
  buttonMenu.textContent = "Menu";
  //buttonHome.addEventListener("click"), openTab(e, "menu");

  const buttonContact = document.createElement("button");
  buttonContact.setAttribute("id", "buttonContact");
  buttonContact.setAttribute("class", "tablinks");
  buttonContact.textContent = "Contact";
  //buttonHome.addEventListener("click"), openTab(e, "content");

  const home = document.createElement("div");
  home.setAttribute("id", "home");
  home.setAttribute("class", "tabcontent");

  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  menu.setAttribute("class", "tabcontent");

  const contact = document.createElement("div");
  contact.setAttribute("id", "contact");
  contact.setAttribute("class", "tabcontent");

  topDiv.appendChild(logo);
  tabs.appendChild(buttonHome);
  tabs.appendChild(buttonMenu);
  tabs.appendChild(buttonContact);
  topDiv.appendChild(tabs);
  skeleton.appendChild(topDiv);

  container.appendChild(skeleton);
  container.appendChild(home);
  container.appendChild(menu);
  container.appendChild(contact);
}

export { pageTopLoad };
