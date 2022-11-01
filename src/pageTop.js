export function pageLoad() {

skeleton = document.createElement("div");
skeleton.setAttribute("id", "skeleton");

topDiv = document.createElement("div");
topDiv.setAttribute("id", "topDiv");

logo = document.createElement("img");
logo.setAttribute("id", "logo");

tabs = document.createElement("div");
tabs.setAttribute("id", "tabs");

buttonHome = document.createElement("button");
buttonHome.setAttribute("id", "buttonHome");
buttonHome.setAttribute("class", "tablinks");
buttonHome.addEventListener('click'), openTab(e, "home");


buttonMenu = document.createElement("button");
buttonMenu.setAttribute("id", "buttonMenu");
buttonMenu.setAttribute("class", "tablinks");
buttonHome.addEventListener('click'), openTab(e, "menu");


buttonContact = document.createElement("button");
buttonContact.setAttribute("id", "buttonContact");
buttonContact.setAttribute("class", "tablinks");
buttonHome.addEventListener('click'), openTab(e, "content");


home = document.createElement("div");
home.setAttribute("id", "home");
home.setAttribute("class", "tabcontent");


menu = document.createElement("div");
menu.setAttribute("id", "menu");
menu.setAttribute("class", "tabcontent");



contact = document.createElement("div");
contact.setAttribute("id", "contact");
contact.setAttribute("class", "tabcontent");


topDiv.appendChild(logo);
tabs.appendChild(buttonHome);
tabs.appendChild(buttonMenu);
tabs.appendChild(buttonContact);
topDiv.appendChild(tabs);
skeleton.appendChild(topDiv);


<div class="tab">
  <button class="tablinks" onclick="openTab(event, 'home')" id="buttonHome">Home</button>
  <button class="tablinks" onclick="openTab(event, 'menu')">Menu</button>
  <button class="tablinks" onclick="openTab(event, 'contact')">Content</button>
</div>

<div id="home" class="tabcontent">
  //import of homePage.js export `${homeDisplay()}`
</div>

<div id="menu" class="tabcontent">
  //import of menuPage.js export `${menuDisplay()}`
</div>

<div id="contact" class="tabcontent">
  //import of contactPage.js export `${contentDisplay()}`
</div>

function openTab(event, tabContentId) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabContentId).style.display = "block";
    event.currentTarget.className += " active";
  }

document.getElementById("buttonHome").click();

container.appendChild(skeleton);
container.appendChild(home);
container.appendChild(menu);
container.appendChild(contact);

}