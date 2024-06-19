const job = document.getElementById('job');
const jobs = ['Web Developer', 'Content Creator', 'Instructor', 'Trainer'];

let jobsIndex = 0;
let charIndex = 0;

function textAnimate(){
    charIndex++;
    job.innerHTML = `I am ${jobs[jobsIndex].charAt(0) === 'I' ? 'an' : 'a'} ${jobs[jobsIndex].slice(0, charIndex)}`;
    
    if(charIndex === jobs[jobsIndex].length){
        jobsIndex++;
        charIndex = 0;
    }
    if(jobsIndex === jobs.length){
        jobsIndex = 0;
    }
    setTimeout(textAnimate, 350);
}

textAnimate();
