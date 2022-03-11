const menu = document.querySelector('#mobile-menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
});

//This fixes the navigation bar at the top of the page
window.addEventListener('scroll', function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});
