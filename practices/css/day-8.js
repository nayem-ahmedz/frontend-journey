function rotateFun(){
    var a = document.getElementById('rotate-value').value;
    var b = document.getElementById('b1');
    var rValue = "rotate(" + a + "deg)";
    b.style.transform = rValue;
}

function scaleFun(rv){
    var b2 = document.getElementById('b2');
    if(rv==1){
        b2.style.transform = "scale(1.5)";
    }
    else if(rv==0){
        b2.style.transform = "scale(1)";
    }
    else{
        b2.style.transform = "scale(2)";
    }
}

function skewFun(){
    var e = document.getElementById('skew-value').value;
    var f = document.getElementById('b3');
    var sValue = "skew(" + e + "deg)";
    f.style.transform = sValue;
}

/*
function translateFun(tv){
    var g = document.getElementById('translate-value').value;
    var h = document.getElementById('b4');
    var tValue = "translate(" + a + "px)";
    if(tv==0){
        h.style.transform = tValue;
    }
}
*/

function magicFun(){
    var b = document.getElementById('b1');
    var b2 = document.getElementById('b2');
    var f = document.getElementById('b3');
    b.style.transform = "none";
    b2.style.transform = "none";
    f.style.transform = "none";
}