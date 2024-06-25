// Function to show side panel
let nav = document.getElementById('nav');
let navList = document.querySelector('.top-nav');
let sB = document.getElementById('showBar');
let hB = document.getElementById('hideBar');
let homePS = document.getElementById('homepage-section');
function showPanel(){
    sB.style.display = 'none';
    hB.style.display = 'block';
    nav.classList.add('res-nav');
    navList.style.display = 'block';
    navList.classList.add('res-nav-list');
    homePS.classList.add('blur');
}
function closePanel(){
    sB.style.display = 'block';
    hB.style.display = 'none';
    nav.classList.remove('res-nav');
    navList.style.display = 'none';
    navList.classList.remove('res-nav-list');
    homePS.classList.remove('blur');
}