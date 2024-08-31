//dynamically updating starting date and setting minimum date / avoid using past date as starting date

let today = document.getElementById('startDate');
let d = new Date();
let month = d.getMonth();
month++;
if(month<10){
    month = '0' + month;
}
dValue = `${d.getFullYear()}-${month}-${d.getDate()}`;
console.log(dValue);

today.value = dValue;
today.min = dValue;