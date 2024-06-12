//from 6:39:00 to 6:56

//js Date
const myDate = new Date();
console.log(myDate); //this will show date in console as normal, oneline in terminal
console.log(myDate.toString()); //use this to view date normally in terminal
console.log(typeof myDate);
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleString('default', {
        weekday: 'long' //try 'short'
    }
));
const updateDate = new Date(2024, 5, 16, 12, 15, 26, 5); //year, month[index], date
/*
    updateDate = new Date(2024, 5, 16, 3, 15, 22) //y, m[i], d, h, m, s
    updateDate = new Date(2024, 5, 16, 3, 15, 22, 23) //y, m[i], d, h, m, s, ms
    updateDate = new Date(2024, 5) //y, m[i]
    updateDate = new Date(2024) //js will consider it as miliseconds
*/
console.log(updateDate.toString());

const updateDate2 = new Date('12-16-2000'); //month-date-year
console.log(updateDate2.toString());

let myTime = Date.now();
console.log(myTime); //showing time in mili seconds, started from 1 Jan 1970 (js default date)


//lets find execution time of a program
let startTime = Date.now();
let step = 0;
function stepUp(){
    for(step=1; step<=10; step++){
        console.log(`Step ${step}`);
    }
}
stepUp();
let endTime = Date.now();
console.log(`The Program takes ${endTime - startTime} mili seconds to complete`);
console.log(`The Program takes ${(endTime - startTime)/1000} seconds to complete`);


const myDateX = new Date();
console.log(myDateX.getFullYear()) //use .getHours() and so on...

