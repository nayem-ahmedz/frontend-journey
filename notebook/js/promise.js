// Js Promise

const hasMeeting = false;
const promise = new Promise((resolve, reject) => {
    if(!hasMeeting){
        const newMeeting = {
            name: 'Teachers Meetup', address: 'Sylhet', date: new Date().getDate()
        };
        resolve(newMeeting);
    } else{
        reject(new Error('Meeting is already scheduled'));
    }
});

/*
promise
  .then(res => console.log(res))
  .catch(err => console.log(err.message));
*/


const addToCalender = (value) => {
    const calender = `Meeting named '${value.name}' is scheuled at ${value.address}`;
    return calender
}

promise
  .then(addToCalender) //send first response to addToCalender
  .then(res => console.log(res)) //print the 2nd response (returned from addToCal)
  .catch(err => console.log(err.message)); //print the error/reject message