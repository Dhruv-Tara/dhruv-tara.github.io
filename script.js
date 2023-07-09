// GNU License //

"use strict";

document.title = "About Yash Sharma"

var defaultTitle = document.title;

document.addEventListener("visibilitychange", function() {
  if (document.hidden) {
    document.title = " You left the tab!";
  } else {
    document.title = defaultTitle;
  }
});





