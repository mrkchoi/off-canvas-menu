

// Set DOM variables
let menuOpen = document.querySelector('.btn__link')
    sidebar = document.querySelector('.wrapper__sidebar');

// Event Listeners
menuOpen.addEventListener('click', function() {
    if(sidebar.classList.contains('open')) {
        sidebar.style.display = 'none';
        sidebar.classList.toggle('open');
        document.querySelector('.btn__link span').textContent = 'Click Me!';
    } else {
        sidebar.style.display = 'block';
        sidebar.classList.toggle('open');
        document.querySelector('.btn__link span').textContent = 'Click Me Again!';
    }
    
});

// console.log(sidebar.classList.contains('.open'));