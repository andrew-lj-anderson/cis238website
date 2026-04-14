/*
Andrew Anderson
scripts.js
4.14.2026
CIS238 final website
*/
//Hamburger menu function
function hamburger () {
    var menu = document.getElementById("menu-links");
    console.log(menu);
    console.log(menu.style.display);
    if (menu.style.display === "block"){
        menu.style.display = "none";
    }
    else{
        menu.style.display = "block";
    }
}