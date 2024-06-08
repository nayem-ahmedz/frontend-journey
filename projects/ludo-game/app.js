let img = document.getElementById('image');
let r = true;
document.getElementById('dice-btn').addEventListener('click', function(){
    let randomValue = Math.round(Math.random().toFixed(2) * 6);
    if(randomValue==0){
        randomValue+=1;
    }
    let res = document.getElementById('res');
    res.innerHTML = randomValue;
    res.style.visibility = 'visible';
    let imgSrc = 'assets/' + randomValue + '.png';
    togleImgRotation();
    img.style.opacity = '1.0';
    img.src = imgSrc;
    //imageReset();
});

function togleImgRotation(){
    if(r==true){
        img.style.transform = 'rotate(360deg)';
        r = false;
    } else{
        img.style.transform = 'rotate(0)';
        r = true;
    }
}