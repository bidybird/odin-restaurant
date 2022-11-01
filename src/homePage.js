
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
home.appendChild(mainBody)


<div id="content"></div>
<div id="skeleton">
    <div id="top">
        <img id="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6NOTIRjNnhmlqygnmP3EFWmIV1pbQoG1oEQ&usqp=CAU">
        <ul id="tabs">
            <button id="buttonHome">home</button>
            <button id="buttonMenu">menu</button>
            <button id="buttonContact">contact</button>
        </ul>
    </div>
    <div id="mainBody">
        <h2>The Grazing Goat</h2>
        <img id="goatMeat" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfKYuWI3Yl-kEqWmPCJS2UucO0dFQo7b75_A&usqp=CAU" >
        <h3>Don't give up the goat.</h3>
        <p>The Grazing Goat's goat meat is delicious.\n"The goat meat issa so tender, their potatoes are bearable."\n-Blunt Guy</p>
    </div>
</div>