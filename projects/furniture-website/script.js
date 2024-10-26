//script file

let navDisplay = false;
let navBar = document.querySelector('.nav-ul');
let navIcon = document.getElementById('navbar-icon');

function shownav(){
    if(navDisplay){
        navBar.style.display = 'none';
        navDisplay = false;
        navIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else{
        navBar.style.display = 'block';
        navDisplay = true;
        navIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    }
}


// form handle
const myForm = document.querySelector('.contact-form');
myForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    alert('this is a demo');
});