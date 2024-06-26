const jobs = ['Web Developer', 'Youtuber', 'Instructor'];
let job = document.getElementById('job');

let jobsIndex = 0;
let charIndex = 0;

function updateText(){
    charIndex++;
    job.innerHTML = `I am ${jobs[jobsIndex].slice(0,1) === 'I' ? 'an' : 'a'} ${jobs[jobsIndex].slice(0, charIndex)}`;
    if(charIndex === jobs[jobsIndex].length){
        jobsIndex++;
        charIndex = 0;
    }
    if(jobsIndex === jobs.length){
        jobsIndex = 0;
    }
    setTimeout(updateText, 350);
}

updateText();

/*
//javascript Async : learnt today
//setTimeout : excute after few 1000 miliseconds = 1s
//syntext : setTimeout(function, miliseconds, params1, params2...);

function printMe(){
    console.log('Youre Printed ');
}
setTimeout(printMe, 2000); //dont use function's parenthesis ()

//with value passing
function printValue(value){
    console.log('Youre Printed ' + value);
}
setTimeout(printValue, 3000, 'JS');

setTimeout(() =>{
    console.log('This is Arrow Function');
}, 4000);


//Arow Function
// () => {
//     return;
// }
*/