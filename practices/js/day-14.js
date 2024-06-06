let a = 1;
let mess = document.getElementById('message');
function keyPress(){
    mess.innerHTML = 'key pressed : ' + a++;
}

function fun(){
    alert('loading...');
    mess.innerHTML = 'Website loaded succesfully';
}
function fun2(){
    mess.innerHTML = 'You\'re resizing my webiste!';
    mess.style.color = 'blue';
}
function fun3(){
    mess.innerHTML = 'You\'re scrollling!!!';
    mess.style.color = 'white';
}