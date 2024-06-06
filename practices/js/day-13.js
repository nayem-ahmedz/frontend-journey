//form 4:47 to 5:04:42
//learnt mouse event, body function => onload, onresize, onscroll

let a = 1;
function keyPress(){
    console.log(a++);
}
function onLoad(){
    alert('loading...');
    let a = document.getElementById('loadStatus');
    a.style.display = 'block';
}






/*
function like(){
    document.getElementById('like-btn').innerHTML = 'Liked';
}
function dblClick(){
    document.getElementById('dbl-btn').innerHTML = 'Double clicked!';
}
function context(){
    document.getElementById('right-btn').innerHTML = 'Right Clicked';
    alert('Right Clicked');
}
function hover(){
    alert('You hover over me');
}
function hoverOut(){
    alert('Dont leave me alone');
} */