mainBody = document.createElement("div");
mainBody.setAttribute("id", "mainBody");

restaurantName = document.createElement("h2");
restaurantName.setAttribute("id", "restaurantName");

goatMeat = document.createElement("img");
goatMeat.setAttribute("id", "goatMeat");

hook = document.createElement("h3");
hook.setAttribute("id", "hook");

foodTestimony = document.createElement("p");
foodTestimony.setAttribute("id", "foodTestimony");

mainBody.appendChild(restaurantName);
mainBody.appendChild(goatMeat);
mainBody.appendChild(hook);
mainBody.appendChild(foodTestimony);
contact.appendChild(mainBody);


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