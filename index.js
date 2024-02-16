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

//Running a loop to input hobbies
let hobbies = ["Reading", "Coding", "Football", "Singing"]
let hobby = document.getElementsByClassName("cont")
for (let i = 0; i < hobby.length; i++) {
    if(hobbies[i] == undefined){
        hobby[i].textContent = ""
    }
    else{
        hobby[i].innerHTML = hobbies[i]
    }   
}