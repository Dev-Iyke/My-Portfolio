let nav = document.getElementById("show");
let mt = document.getElementById("home");
let certPage = document.getElementById("Certifications");

function showMenu() {
  nav.classList.remove("hide-navBar");
  nav.classList.add("show-navBar");
  mt.classList.remove("mt");
}
function showPoMenu() {
  nav.classList.remove("hide-navBar");
  nav.classList.add("show-navBar");
  certPage.classList.remove("mt");
}

function hideMenu() {
  nav.classList.remove("show-NavBar");
  nav.classList.add("hide-navBar");
  mt.classList.add("mt");
}
function hidePoMenu() {
  nav.classList.remove("show-NavBar");
  nav.classList.add("hide-navBar");
  certPage.classList.add("mt");
}

//Running a loop to input hobbies
let hobbies = ["Reading", "Coding", "Football", "Singing"];
let hobby = document.getElementsByClassName("cont");
for (let i = 0; i < hobby.length; i++) {
  if (hobbies[i] == undefined) {
    hobby[i].textContent = "";
  } else {
    hobby[i].innerHTML = hobbies[i];
  }
}

/* FOR THE SLIDER */

//Event listener to slide images
document.addEventListener("DOMContentLoaded", slideImages);

//sliding function to be included in the event listener

//Created lists of my certificates, the organizations and the details of the certs to be dynamically added in mobile screens

function slideImages() {
  const certificates = [
    "./certs/codeverse-frontend.png",
    "./certs/simplilearn-frontend.png",
    "./certs/coursera-1.PNG",
    "./certs/cousera-2.PNG",
    "./certs/simplilearn-1.PNG",
    "./certs/kibo-1.PNG",
  ];

  const organizations = [
    "CodeVerse",
    "Simplilearn",
    "Coursera",
    "Coursera",
    "Simplilearn",
    "Try-Kibo",
  ];

  const details = [
    "At Codeverse Africa, I was further exposed to web development for 2 months. As a proof of my strong character and eagerness to finish whatever I start, I was presented with this certificate as a proof of basic knowledge in web foundations",
    "This course equiped me with the foundations of javaScript, understanding the difference between javaScript and other programming languages. Javascript is robust and very dynamic, giving me the opportunity to try out new things in very effective ways.",
    "This was the fisrt time I got involved in how the web works. This course gave me a deep knowledge of browsers, servers, APIs and so on. I am happy i ccompleted this course despite how challenging it was.",
    "Every aspiring developer must be willing and able to work and colaborate with other developers around the world. This course on version control system called git has given me a skill I believe I will always use.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum minus explicabo et asperiores exercitationem doloribus doloremque voluptatibus facere deserunt! Vitae itaque tempora laboriosam nostrum voluptates optio, praesentium quo natus fugiat.",
    "Try-kibo was thorough! Web development was the language we spoke in this program. I learnt new thing and met new people that will and are still inspiring me to get better in web and software development.",
  ];
  const images = document.getElementById("img-cont");
  const headers = document.getElementById("org");
  const description = document.getElementById("desc");

  currentIndex = 0;
  images.src = certificates[currentIndex];
  headers.innerHTML = organizations[currentIndex];
  description.innerHTML = details[currentIndex];

/* Creating a functional next button by interchanging positions */
  const next = document.getElementById("next");
  next.addEventListener("click", function () {
    if (currentIndex != certificates.length - 1) {
      const showdetails = (document.getElementById("last").textContent = "");
      currentIndex += 1;
      images.src = certificates[currentIndex];
      headers.innerHTML = organizations[currentIndex];
      description.innerHTML = details[currentIndex];
    } else {
      const showdetails = (document.getElementById("last").textContent =
        "This is the last slide");
      images.src = certificates[certificates.length - 1];
      headers.innerHTML = organizations[organizations.length - 1];
      description.innerHTML = details[details.length - 1];
    }
  });
/* Creating a functional previous button */
  const prev = document.getElementById("prev");
  prev.addEventListener("click", function () {
    if (currentIndex == 0) {
      const showdetails = (document.getElementById("last").textContent =
        "This is the first slide");
      images.src = certificates[currentIndex];
      headers.innerHTML = organizations[currentIndex];
      description.innerHTML = details[currentIndex];
    } else {
      const showdetails = (document.getElementById("last").textContent = "");
      currentIndex -= 1;
      images.src = certificates[currentIndex];
      headers.innerHTML = organizations[currentIndex];
      description.innerHTML = details[currentIndex];
    }
  });


  /* Function to loop through and generate certifications */



}




