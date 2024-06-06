//till 4:47 mins
// js DOM :: learn some mouse event

let totalLikes = 0;
function like(){
    totalLikes++;
    document.getElementById('like-btn').innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked ' + totalLikes;
}
function dblClick(){
    document.getElementById('dbl-btn').innerHTML = 'dbl Clicked !';
}
function rightClick(){
    document.getElementById('right-btn').innerHTML = 'You clicked right button';
}