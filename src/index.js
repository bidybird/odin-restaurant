import { pageTopLoad } from "./pageTop";
import { homeTabDisplay } from "./homePage";
import { menuTabDisplay } from "./menuPage";
import { contactTabDisplay } from "./contactPage";

pageTopLoad();
//homeTabDisplay();
//menuTabDisplay();
//contactTabDisplay();

document
  .querySelector("#buttonHome")
  .addEventListener("click", homeTabDisplay());

document
  .querySelector("#buttonMenu")
  .addEventListener("click", menuTabDisplay());

document
  .querySelector("#buttonContact")
  .addEventListener("click", contactTabDisplay());

//document.getElementById("#buttonHome").click();
