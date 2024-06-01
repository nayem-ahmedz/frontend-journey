//from hh:mm to 4:10:00
// Javascript Arrays :: Remember, Array is Object data type
// you can take array in two ways

const languages = ['HTML', 'CSS', 'Javascript']; //common practice + best
const languages2 = new Array('PHP', 'Java', 'Python');

console.log(languages, languages2);
console.log(typeof languages, 'and', typeof languages2);
languages[1] = 'Bootstrap'; //to change an array index value
console.log(languages);
console.log(languages.toString()); //use toString() to print the array in string format
console.log(languages.length); //to print length of a array

languages[3] = 'MySQL';
console.log(languages[languages.length - 1]); //to print the last element of a array


/*
practice tasks
--------------

const students = ['Nayem', 'Hajifa', 'Jui'];
console.log(students);
console.log(students[0]);
console.log(students.length);
console.log(students.toString());
console.log('Last Element is :', students[students.length - 1]);
students[3] = 'Ahmed';
console.log('Last Element is now :', students[students.length - 1]);

//students[10] = 'index10 = test'; //where is index 4 to 9 ?
//skipping / keeping empty indexes will cause hole/bug in code, with some undefined values
*/
