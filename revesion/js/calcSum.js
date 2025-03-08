let hasMeeting = true;
const promise = new Promise((resolve, reject) => {
    if(!hasMeeting){
        const meeting = {
            id: 1,
            name: 'Teachers Meetup',
            time: '2:00 PM'
        }
        resolve(meeting);
    } else{
        reject(new Error('Meeting is already scheduled'));
    }
});
function addToCalender(meeting){
    const calender = `Meeting is scheuled on ${meeting.time}, named ${meeting.name}`;
    return Promise.resolve(calender);
}

promise
  .then(addToCalender)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));