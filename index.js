const toggleButton = document.getElementsByClassName("menuBar")[0];

const navLinks = document.getElementsByClassName("navBarList")[0];


toggleButton.addEventListener('click', function(){
    navLinks.classList.toggle('active');
});


var menuItems = navLinks.getElementsByTagName('li');
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].addEventListener('click', function() {
        navLinks.classList.remove('active');
      });
    }
