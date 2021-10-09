// ==UserScript==
// @name         Choose ur own adventure
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    var game = prompt("Do you want to play a little choose-your-own-adventure game?");
    if (game = "yes") {
        alert("Well, hate to break it to you, but this is still a very early version of this script, and this hasn't been scripted yet. Sorry!");
    } else if (game = "no") {
        alert("Okay!");
    } else if (game == null || game == "" || game == " ") {
        alert("You didn't type anything! Reload the page to start over!");
    }
})();