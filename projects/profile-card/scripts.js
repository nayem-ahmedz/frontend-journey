let l = c = s = 0;
let likes = document.getElementById('likes');
let comments = document.getElementById('comments');
let shares = document.getElementById('shares');

const tLikes = 20, tComments = 10, tShares = 5;

const iSpeed = 100;

function animateCount(element, target){
    let count = 0;
    const interval = setInterval(() => {
        if(count < target){
            count++;
            element.innerHTML = count;
        } else{
            clearInterval(interval);
        }
    }, iSpeed);
}
window.onload = () => {
    animateCount(likes, tLikes);
    animateCount(comments, tComments);
    animateCount(shares, tShares);
};


//buttons behavior
function fun(){
    alert('link goes to portfolio / contact');
}