import { pageTopLoad } from "./pageTop";
import { homeTabDisplay } from "./homePage";
import { menuTabDisplay } from "./menuPage";
import { contactTabDisplay } from "./contactPage";

pageTopLoad();

//on click display the home tab
document.querySelector("#buttonHome").addEventListener("click", homeTabDisplay);

//on click display the menu tab
document.querySelector("#buttonMenu").addEventListener("click", menuTabDisplay);

//on click display the contact tab
document
  .querySelector("#buttonContact")
  .addEventListener("click", contactTabDisplay);

//simulate clicking the home page on initial run
document.getElementById("buttonHome").click();
