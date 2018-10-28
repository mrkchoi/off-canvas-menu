

// Set DOM variables
let menuOpen = document.querySelector('.btn__link')
    sidebar = document.querySelector('.wrapper__sidebar')
    hamburger = document.querySelector('.btn__menu');

// Event Listeners
menuOpen.addEventListener('click', function() {
    if(sidebar.classList.contains('open')) {
        sidebar.style.display = 'none';
        sidebar.classList.toggle('open');
        hamburger.classList.toggle('btn-active');
        // document.querySelector('.btn__link span').textContent = 'Click Me!';
    } else {
        sidebar.style.display = 'block';
        sidebar.classList.toggle('open');
        hamburger.classList.toggle('btn-active');
        // document.querySelector('.btn__link span').textContent = 'Click Me Again!';
    }
    
});

// console.log(sidebar.classList.contains('.open'));


// If browser vw is less than 1280px, then the off-canvas sidebar should appear on top of content, not pushing content to the side

// Event listener for click off-sidebar to close menu

window.addEventListener('click', function(e) {
    // console.log('clicked!');
    console.log(e);
    if (window.innerWidth <= 768 && document.querySelector('.wrapper__sidebar.open')) {
        if(e.clientX > 310) {
            sidebar.style.display = 'none';
            sidebar.classList.toggle('open');
            hamburger.classList.toggle('btn-active');
        }
    } else if(window.innerWidth <= 1280 && document.querySelector('.wrapper__sidebar.open')) {
        if(e.offsetX > 420) {
            // console.log('clicked on main body!');
            sidebar.style.display = 'none';
            sidebar.classList.toggle('open');
            hamburger.classList.toggle('btn-active');
        }
    }
    
});