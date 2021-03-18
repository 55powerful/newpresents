//! Bubble transition with body freeze effect section
// These constants cannot be changed
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const freeze = document.querySelector("body");


//? The actual code using constants based on users actions.
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  freeze.classList.toggle("freeze");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
//! End Bubble


//! Drop Down Menu Section

//? Drop Down First Menu Section
// The function of showing and hiding when the button is clicked
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


//? Drop Down Second Menu Section
//The function of showing and hiding when the button is clicked
function seasonalFunction() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

//! End of Drop Down Menu Sections


//! Closes dropdown options if the user clicks outside environment
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowncontent = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowncontent.length; i++) {
      var openDropdown = dropdowncontent[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//! End of closing the dropdown options if clicked outside environment
