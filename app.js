const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const sightMenu = document.querySelector("#sight-page");
  const citiesMenu = document.querySelector("#cities-page");
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    classList.add("highlight");
    sightMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    sightMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    citiesMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    citiesMenu.classList.add("highlight");
    sightMenu.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);

//New
document.getElementById("navbar__logo").style.padding = "25px";

let navbar1 = document.querySelector(".navbar");
navbar1.style.backgroundColor = "#131313";
navbar1.style.height = "80px";
navbar1.style.display = "flex";
navbar1.style.justifyContent = "center";
navbar1.style.alignItems = "center";
navbar1.style.fontSize = "1.2rem";
navbar1.style.position = "sticky";
navbar1.style.top = "0";
navbar1.style.zIndex = "999";

let navbarCont = document.querySelector(".navbar__container");
navbarCont.style.display = "flex";
navbarCont.style.justifyContent = "space-between";
navbarCont.style.height = "80px";
navbarCont.style.zIndex = "1";
navbarCont.style.width = "100%";
navbarCont.style.maxWidth = "1300px";
navbarCont.style.margin = "0 auto";
navbarCont.style.padding = "0 50px";

//AJAX Calls

document.getElementById("exp").addEventListener("click", loadText);
function loadText() {
  //create XHR object
  var xhr = new XMLHttpRequest();
  //OPEN - type, url/file, async
  console.log(xhr);
  xhr.open("GET", "/pages/sightseeings.html", true);

  xhr.onload = function () {
    if (this.status == 200) {
      //console.log(this.responseText);
      //document.getElementById("text").innerHTML = this.responseText;
      location.window("/pages/sightseeings.html");
    } else if (this.status == 404) {
      document.getElementById("text").innerHTML = "Not found";
    }
  };

  xhr.onerror = function () {
    console.log("Request Error...");
  };
  //sends request
  xhr.send();
}

// second call
document.getElementById("navbar__logo").addEventListener("click", loadText);
function loadText() {
  //create XHR object
  var xhr = new XMLHttpRequest();
  //OPEN - type, url/file, async
  console.log(xhr);
  xhr.open("GET", "index.html", true);

  xhr.onload = function () {
    if (this.status == 200) {
      //console.log(this.responseText);
      //document.getElementById("text").innerHTML = this.responseText;
      location.window("index.html");
    } else if (this.status == 404) {
      document.getElementById("text").innerHTML = "Not found";
    }
  };

  xhr.onerror = function () {
    console.log("Request Error...");
  };
  //sends request
  xhr.send();
}
