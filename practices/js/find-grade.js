//js to find grade of a student based on their marks
function getResult(){
    let marks = document.getElementById('marks').value;
    let result = document.getElementById('result');
    let text = 'The Student has Obtained grade : ';
    result.style.visibility = 'visible';

    if(marks === ''){
        result.innerHTML = 'Please input a valid marks';
        result.style.color = 'red';
    } else{
        result.style.color = 'green';
    if(marks > 100 || marks < 0){
        result.innerHTML = 'Invalid makrs';
        result.style.color = 'red';
    } else if(marks <= 100 && marks >= 80){
        result.innerHTML = text + 'A+';
    } else if(marks < 80 && marks >= 70){
        result.innerHTML = text + 'A';
    } else if(marks < 70 && marks >= 60){
        result.innerHTML = text + 'A-';
    } else if(marks < 60 && marks >= 50){
        result.innerHTML = text + 'B';
    } else if(marks < 50 && marks >= 40){
        result.innerHTML = text + 'C';
    } else if(marks < 40 && marks >= 33){
        result.innerHTML = text + 'D';
    } else{
        result.innerHTML = 'Failed!';
        result.style.color = 'red';
    }
    }
}