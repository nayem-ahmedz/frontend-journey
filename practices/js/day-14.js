//from 5:04:42 to 5:49:00 ?
let a = false;
document.getElementById('subs-btn').onclick = function(){
    if(a==false){
        document.getElementById('subs-btn').innerHTML = 'Subscribed';
        document.getElementById('subs-btn').style.backgroundColor = '#cef';
        a = true;
    } else{
        document.getElementById('subs-btn').innerHTML = 'Subscibe';
        document.getElementById('subs-btn').style.backgroundColor = 'white';
        a = false;
    }
}

//modern approach (using instead of onlick)
//using add event listener : it basically listen all event happening in window
document.getElementById('subs-btn2').addEventListener('click', function(){
    document.getElementById('subs-btn2').innerHTML = 'Subscribed';
});

//learn about event bubling !!!


//js maths in day-14 v2




/*
let a = 1;
let mess = document.getElementById('message');
function keyPress(){
    mess.innerHTML = 'key pressed : ' + a++;
}

function fun(){
    mess.innerHTML = 'Website loaded succesfully';
}
function fun2(){
    mess.innerHTML = 'You\'re resizing my webiste!';
    mess.style.color = 'blue';
}
function fun3(){
    mess.innerHTML = 'You\'re scrollling!!!';
    mess.style.color = 'white';
} */