// EDUCATION TABS
tab1 = document.getElementById('tab1');
tab2 = document.getElementById('tab2');
tab3 = document.getElementById('tab3');

content1 = document.getElementById('tab1Content');
content2 = document.getElementById('tab2Content');
content3 = document.getElementById('tab3Content');

// Remove Class "active-tab" From All The Tabs & Hide All The Tabs Content
function selectTab(tabIndex) {
  tab1.classList.remove("active-tab");
  tab2.classList.remove("active-tab");
  tab3.classList.remove("active-tab");
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "none";

  // Add Class "active-tab" To The Selected Tab & Show The Selected Tab Content
  switch (tabIndex) {
    case 1:
      content1.style.display = "block";
      tab1.classList.add("active-tab");
      break;
    case 2:
      content2.style.display = "block";
      tab2.classList.add("active-tab");
      break;
    case 3:
      content3.style.display = "block";
      tab3.classList.add("active-tab");
      break;
  }
}




// GO TO TOP BUTTON
let topbutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbutton.style.display = "block";
  }
  else {
    topbutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




// ACTIVE NAVBAR
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active-nav");
    if (li.classList.contains(current)) {
      li.classList.add("active-nav");
    }
  });
});




// HAMBURGER MENU
openMenu = document.querySelector('.hamburger');                      // Hamburger Menu Icon
closeMenu = document.querySelector('.close-menu');                    // Close Menu Icon
popupMenu = document.querySelector('.popup-mobile-menu')              // Full mobile menu popup
mobileNavbar = document.querySelector('.mobile-navbar');              // L.H.S mobile navbar popup
menuList = document.querySelectorAll('.mobile-nav-menu li');          // L.H.S mobile navbar list
blankSpace = document.querySelector('.blank-popup');                  // R.H.S blank mobile navbar popup

openMenu.addEventListener('click', () => {
  popupMenu.classList.add('open');
  mobileNavbar.classList.add('open');

});

closeMenu.addEventListener('click', () => {
  popupMenu.classList.remove('open');
  mobileNavbar.classList.remove('open');
});

for(let i=0; i < menuList.length; i++){
  menuList[i].addEventListener('click', () => {
    closeMenu.click();
  });
}

blankSpace.addEventListener('click', () => {
  closeMenu.click();
});
