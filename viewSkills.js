const skills = [98, 95, 80, 10, 0];
const str = 'conic-gradient(rgba(0, 0, 255, 0.5) 360deg, #eee 0deg)';
const outer = document.getElementsByClassName('outer');

function showOff(){
    for(let i=0; i<skills.length; i++){
        outer[i].style.background = `conic-gradient(rgba(0, 0, 255, 0.5) ${skills[i]*3.6}deg, #eee 0deg)`;
    }
    console.log('1');
    
}
//setTimeout(showOff, 1000);