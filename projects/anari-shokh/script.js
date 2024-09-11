// Nav hamburger icon
function toggleNav(){
    let icon = document.querySelector('.hamburger');
    icon.classList.toggle('h-change');
    let tpc = document.querySelector('.top-nav-content');
    tpc.classList.toggle('tnc-toggle');
}