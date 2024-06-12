//find the radius of a cricle
document.getElementById('pi').textContent = (Math.PI).toFixed(4);
document.getElementById('find-btn').addEventListener('click', findRadius);

function findRadius(){
    let r = document.getElementById('radius').value;
    let result = document.getElementById('result');
    result.style.visibility = 'visible';
    if(r === ''){
        result.textContent = 'Please a insert a valid number';
        result.style.color = 'red';
    } else{
        let res = Math.PI * r * r;
        result.textContent = 'Area is : ' + res.toFixed(2);
        result.style.color = 'blue';
    }
}
