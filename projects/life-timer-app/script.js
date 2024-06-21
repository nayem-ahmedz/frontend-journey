//Expand setting options panel
let isExpand = false;
const icon = document.querySelector('.fa-solid');
function expandSettings(){
    let a = document.querySelector('.settings');
    if(isExpand){
        a.style.width = '32px';
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-gear');
    } else{
        a.style.width = '325px';
        icon.classList.remove('fa-gear');
        icon.classList.add('fa-xmark');
    }
    isExpand = !isExpand;
}


//miliseconds converter
function convertMS(ms){
    const
        msInSec = 1000,
        msInMin = msInSec * 60,
        msInHour = msInMin * 60,
        msInDay = msInHour * 24,
        msInYear = msInDay * 365.25,
        msInMonth = msInYear / 12;
    const years = Math.floor(ms / msInYear);
    ms %= msInYear;
    const months = Math.floor(ms / msInMonth);
    ms %= msInMonth;
    const days = Math.floor(ms / msInDay);
    ms %= msInDay;
    const hours = Math.floor(ms / msInHour);
    ms %= msInHour;
    const minutes = Math.floor(ms / msInMin);
    ms %= msInMin;
    const seconds = Math.floor(ms / msInSec);

    return {years, months, days, hours, minutes, seconds};
}
const submitBtn = document.getElementById('submit-btn');
const dateInput = document.getElementById('date');


//input validation
const initialText = document.getElementById('initialText');
function validation(settingsState){
    const birthDay = document.getElementById('date').value;
    if(birthDay===''){
        initialText.innerHTML = 'Enter a valid date';
        dateInput.classList.add('invalid');
    } else{
        const birthDate = new Date(birthDay);
        const today = new Date();
        if(birthDate > today){
            initialText.innerHTML = 'Did you born earlier?';
            dateInput.classList.add('invalid');
        } else{
            if(settingsState){
                expandSettings();
            }
            dateInput.classList.remove('invalid');
            const resultBox = document.getElementById('resultBox');
            resultBox.classList.remove('hide');
            initialText.classList.add('hide');
            const dateDiff = today - birthDate;
            showResult(dateDiff);
        }
    }
}


//showing output
function showResult(dateDiff){
    const time = document.getElementsByClassName('time');
    const {years, months, days, hours, minutes, seconds} = convertMS(dateDiff);
    const nums = [years, months, days, hours, minutes, seconds]
    const timeShift = ['Years', 'Months', 'Days', 'Hours', 'Minutes', 'Seconds'];
    for(let i=0; i<time.length; i++){
        let value = (nums[i]<10) ? '0' + nums[i] : nums[i];
        time[i].innerHTML = `<span class="nums">${value}</span><br> ${timeShift[i]}`;
    }
    //setTimeout(showResult, 1000, dateDiff); // x
    //setInterval(showResult, 1000); // x
    //setTimeout(validation, 1000); ? expnad settings() causeing problems
    setTimeout(()=>{
        validation(false);
    }, 1000);
}

//execution due to button event : click
submitBtn.addEventListener('click', validation);
initialText.addEventListener('click', expandSettings);


//clearing board
document.getElementById('clear-btn').onclick = function(){
    document.location = 'index.html';
}