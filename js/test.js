// Custom JS to show mobile menu on click of hamburger icon
document.querySelector('#burger').addEventListener('click', () => {
    document.querySelector('#sideNav__mobile').classList.add('visible');
});

// Custom JS to HIDE mobile menu on click of close button
document.querySelector('#close').addEventListener('click', () => {
    document.querySelector('#sideNav__mobile').classList.remove('visible');
}); 