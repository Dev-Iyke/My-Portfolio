let nav = document.getElementById("show");
let mt = document.getElementById("home");
function showMenu(){
    nav.classList.remove("hide-navBar");
    nav.classList.add("show-navBar");
    mt.classList.remove("mt"); 
}

function hideMenu(){
    nav.classList.remove("show-NavBar");
    nav.classList.add("hide-navBar");
    mt.classList.add("mt");
}