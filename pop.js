document.addEventListener("DOMContentLoaded", function(e) {  
  var dark = document.querySelector('#dark');
  var light = document.querySelector("#light");  

  dark.addEventListener("click", () => {
    console.log("dark");
    chrome.tabs.executeScript({file: "dark.js"});
  });

  light.addEventListener("click", () => {
   console.log("light");
   chrome.tabs.executeScript({file: "light.js"});
  });
});
