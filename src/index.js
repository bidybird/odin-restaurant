import { pageTopLoad } from "./pageTop";
//import { homeTabDisplay } from "./homePage";
//import { menuTabDisplay } from "./menuPage";
import { contactTabDisplay } from "./contactPage";

pageTopLoad();
//homeTabDisplay();
//menuTabDisplay();
contactTabDisplay();

// function openTab(event, tabContentId) {
//   let i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }
//   document.getElementById(tabContentId).style.display = "block";
//   event.currentTarget.className += " active";
// }

// document.getElementById("buttonHome").click();
