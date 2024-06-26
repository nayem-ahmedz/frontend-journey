const
    month = document.getElementById('month'),
    day = document.getElementById('day'),
    date = document.getElementById('date'),
    year = document.getElementById('year');

const today = new Date();

month.innerHTML = today.toLocaleString('en',{
    month: 'long'
});
day.innerHTML = today.toLocaleString('en',{
    weekday: 'long'
});
date.innerHTML = today.getDate();
year.innerHTML = today.getFullYear();