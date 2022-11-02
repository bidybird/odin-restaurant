const container = document.querySelector("#container");

import { pageTopLoad } from "./pageTop";
import { homeTabDisplay } from "./homePage";
import { menuTabDisplay } from "./menuPage";
import { contactTabDisplay } from "./contactPage";

pageTopLoad();

//hip div attaches to skeleton
const hip = document.createElement("div");
hip.setAttribute("id", "hip");
document.querySelector("#skeleton").appendChild(hip);

//childOne div is added to the hip div then it is removed and replaced in the homeTab
const childOne = document.createElement("div");
hip.appendChild(childOne);

//on click display the home tab
document.querySelector("#buttonHome").addEventListener("click", homeTabDisplay);

//on click display the menu tab
document.querySelector("#buttonMenu").addEventListener("click", menuTabDisplay);

//on click display the contact tab
document
  .querySelector("#buttonContact")
  .addEventListener("click", contactTabDisplay);

//simulate clicking the home page on initial run
homeTabDisplay();
