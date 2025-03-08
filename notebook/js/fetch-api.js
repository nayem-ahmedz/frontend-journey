// Js Fetch API
const file = 'http://127.0.0.1:5500/notebook/js/text.txt';

// fetch(file)
//   .then(res => res.text())
//   .then(res => console.log(res))
//   .catch(err => console.log(err));



//using async-await
//display(file);

// async function display(params) {
//     const response = await fetch(file);
//     const data = await response.text();
//     console.log(data);
// }

//with error handling
// async function display(params) {
//     try{
//         const response = await fetch(params);
//         const data = await response.text();
//         console.log(data);
//     } catch{
//         console.log('Error');
//     }
// }

//with error handling (added error)
async function display(params) {
    try{
        const response = await fetch(params);
        const data = await response.text();
        console.log(data);
    } catch(error) {
        console.log(error.message);
    }
}


const api = 'https://timeapi.io/api/Time/current/zone?timeZone=Asia/Dhaka';
getData();

async function getData(){
    const response = await fetch(api);
    const data = await response.json();
    console.log(data.date);
}