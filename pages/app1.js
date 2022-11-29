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