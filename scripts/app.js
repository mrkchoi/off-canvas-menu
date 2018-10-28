

//  DOM variables
let menuOpen = document.querySelector('.btn__link')
    sidebar = document.querySelector('.wrapper__sidebar')
    hamburger = document.querySelector('.btn__menu');


// Event Listeners for primary menu icon
menuOpen.addEventListener('click', function() {
    if(sidebar.classList.contains('open')) {
        sidebar.style.display = 'none';
        sidebar.classList.toggle('open');
        hamburger.classList.toggle('btn-active');
    } else {
        sidebar.style.display = 'block';
        sidebar.classList.toggle('open');
        hamburger.classList.toggle('btn-active');
    }
    
});


// Event listener [click on main content area to close sidebar. This applies to smaller screen widths < 1280px.]
window.addEventListener('click', function(e) {
    // console.log('clicked!');
    console.log(e);
    if (window.innerWidth <= 1280 && document.querySelector('.wrapper__sidebar.open')) {
        if(e.clientX > 310) {
            sidebar.style.display = 'none';
            sidebar.classList.toggle('open');
            hamburger.classList.toggle('btn-active');
        }
    } 
});