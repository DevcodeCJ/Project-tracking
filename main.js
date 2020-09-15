const mobileNav = document.getElementById('mobile-nav');
const openButton = document.getElementById('hamburger');
const closeButton = document.getElementById('close');
const screen = window.matchMedia('(min-width: 768px)');

openButton.addEventListener('click', function() {
   mobileNav.style.display = 'block';
   openButton.style.display = 'none';
   closeButton.style.display = 'block';
});

closeButton.addEventListener('click', function() {
   mobileNav.style.display = 'none';
   openButton.style.display = 'block';
   closeButton.style.display = 'none';
});

function displayMenu(screen) {
   if(screen.matches) {
      mobileNav.style.display = 'none';
      openButton.style.display = 'none';
      closeButton.style.display = 'none';
   } else {
      openButton.style.display = 'block';
   }
}

displayMenu(screen);
screen.addListener(displayMenu);