/*


In JavaScript, the window object is the global scope object. This means that variables, properties, and methods by default belong to the window object. This also means that specifying the window keyword is optional


JavaScript Print

JavaScript does not have any print object or print methods.
You cannot access output devices from JavaScript.
The only exception is that you can call the window.print() method in the browser to print the content of the current window.

# field.innerHTML = value.toFixed(100); //values between 1 to 100

# Variables are Containers for Storing Data
  JavaScript Variables can be declared in 4 ways:
    Automatically
    Using var
    Using let
    Using const

#When to Use var, let, or const?
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.


code Example :
    let name = 'Nayem Ahmed',
        age = 24,
        status = 'active';
    console.log(name, age, status);

    let $ = 'Dollar';
    console.log($);
Note :
Using the dollar sign is not very common in JavaScript, but professional programmers often use it as an alias for the main function in a JavaScript library.
In the JavaScript library jQuery, for instance, the main function $ is used to select HTML elements. In jQuery $("p"); means "select all p elements".


    let _private = 'I am private variable';
    console.log(_private);
Using the underscore is not very common in JavaScript, but a convention among professional programmers is to use it as an alias for "private (hidden)" variables.




*/