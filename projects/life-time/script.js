const date = new Date();

let output = document.getElementsByClassName('result');

output[0].innerHTML = date.getHours();
output[1].innerHTML = date.getMinutes();
output[2].innerHTML = date.getSeconds();
