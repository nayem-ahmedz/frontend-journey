let ar = ['00<br>Years', '00<br>Months', 2, 3, 4, 5];

const result = document.getElementsByClassName('result');
for(let i=0; i<result.length; i++){
    result[i].innerHTML = ar[i];
}
document.getElementById('submit-btn').onclick = validateInput;

//finding result
function viewResult(date, month, year){
    console.log(date, month, year);
    //console.log(typeof date, typeof month, typeof year)
    // const d = new Date();
    const birthDay = new Date(month, date, year);
    console.log(birthDay);
    
    // const DD = ['d.getFullYear()', 'd.getMonth()', 'd.getDate()', 'd.getHours()', 'd.getMinutes()', 'd.getSeconds'];
    // let i = 0;
    // for(i=0; i<result.length; i++){
    //     result.innerHTML = DD[i];
    // }
}

//validation
function validateInput(){
    let date = parseInt(document.getElementById('date').value.trim());
    let month = parseInt(document.getElementById('month').value);
    let year = parseInt(document.getElementById('year').value);
    viewResult(date, month, year);
}