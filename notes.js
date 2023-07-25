//Variables, should be like any language//
let message; //Assigns a variable the name "message"//
message = "Hello"; //Stores the string "Hello" in the variable "message"//
alert(message); //Shows the variable content//
let messageDouble = "Howdy"; //Does both the above steps at the same time//
alert(messageDouble);
let user1 = "John", age1 = 24, message1 = "Goober";  //Single line variable naming is possible//
let user2 = "Jasmine", //This is a style of multiline variable that does not redefine 1/2// 
    age2 = "23",       //the variable type "let" more than once 2/2//
    message2 = "Frizzy"; 
alert(user2);
alert(message2);
var oldSchool = "You can still use var, and it differs from let";
message = "Goodbye!"; //You can redefine variables like usual//
let goodbye;
goodbye = message; //Assigning a variable to another variable//
alert(goodbye); //Showing that it works still//
let testName$_$_55; //Alphanumeric with _$//
//Apparently "camelCase" is what this style of caps is called//
let $ = 1;
let _ = 2;
alert($ + _); //Apparently you can assign numbers to let and math like normal//
let apple = "cool";
let APPLE = "uncool"; //Caps matters!//
alert(apple + APPLE); //I think this concatenation works//
let 日本 = "Japan"; //Yep, you can use other alphabets//
//You cannot use names that are already used by the language, like let or function//
/* In the old days, we could assign variables without directly
assigning the variable type. eg. "num = 5;" would create the variable
"num" and assign it the value of "5", but this does not work with new
versions of javascript or new scripts, so when we are using something
called "strict mode" by assigning ""use strict";" in our code, it will
cause errors. This isn't too big of a deal, as typically we assign var
types to show our intent, but it is important to know */
const myBirthday = "04/26/01"; //Constants cannot change//
const COLOR_RED = "#F00"; /*There is a widespread practice to use constants 
as aliases for difficult-to-remember values that are known prior to 
execution. Such constants are named using capital letters and underscores.*/
const pageLoadTime = 5; //This is a constant that can be generated at runtime//
const nameThingsRight = "Sure thing!"; //Caps const is PRIOR KNOWLEDGE ONLY//
//"Var"//
var theBeast; //Var is a global declaration. It will come out of "if" and other blocks.//
var theFirst; //Var will always be defined from the beginning of the function//
var thePatient; //...unless it's waiting to be calculated aka nested//
var theHoisted; //This property is called "hoisting" as it gets hoisted to the top//
var theOne = "Two";//"theOne" is declared in the beginning, but "two" is assigned in line order//
//Arithmetic//
/*Addition +, subtraction -, multiplication *, exponentiation **,
division /, remainder %, increment ++, decrement --, equality < > 
<= >= != ==, === or !== test both the value and the datatype*/
let x = 100 + 50; //Operands are the numbers, operators are the signs//
let y = x - 50;
alert(y); //Should be 100//
x = (100+50) * 3; //PEMDAS does exist//
x = 3.14; //There is only one type of number. No double or int or whatever//
x = 123e5; //There's also scientific notation//
let jsNumberType = "64-bit Floating Point";
x = 0.2 + 0.1; //This will NOT equal 0.3 as "floating point" arithmetic (decimals) is not always accurate//
x = (0.2 * 10 + 0.1 * 10) / 10; //Integers are accurate up to 15 digits, so making the numbers "whole" is the cheat//
x = "20"; 
y = "10";
x += y;
alert(x); //The + is used for addition and concatenation, depending on numbers or strings//
typeof Infinity;
typeof NaN; //"typeof" will find the type of a variable. NaN and Infinity are numbers.//
const lotsOfDecimals = 1.7676244;
const twoDecimalPlaces = lotsOfDecimal.toFixed(2); //Sets the decimal places to 2//
alert(twoDecimalPlaces); //Checking//
//Strings//
const bigMouth = "I've got no \"rights\" in this country."; //Use \ before quote to allow it//
const howdyYall = "Howdy y'all! ";
const iHateThem = "I'm sure glad those raccoons are gone today.";
const howdyHate = `Well, if it ain't the crew. ${howdyYall}${iHateThem}`; //Uses the ` (backtick) above the ~//
const numerals = "121"; //Number defined as string//
const numeralNum = Number(numerals); //String converted to number//
console.log(typeof numerals + typeof numeralNum); //Checking//
const numerals2 = 223; 
const numeralNum2 = numerals2.toString(); //Changing number to string//
console.log(typeof numerals2 + typeof numeralNum2); //Checking//
const expressionOutput = `Using backticks 
for expressions: ${numerals2 - 23},\nand for line breaks`;
/*List of String methods: length, slice, substring, substr, replace,
replaceAll, toUpperCase, toLowerCase, concat, trim, trimStart,
trimEnd, padStart, padEnd, charAt, charCodeAt, split (split makes arrays)*/
//Conditionals//
if (x = 0) {
    //code to run//
}
else if (x != 0) {
    //code to run//
}
else {
    //code to run//
}
//Same as usual, > < = != == || &&//
let userAge = 19;
let accessAllowed = (userAge > 17) ? true : false; //if (condition=true) then true, else false//
let a = +prompt('a?', '');
switch (a) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
}
//Functions//
function myFunction() { //Declaration using "function" keyword and naming it "myFunction"//
    alert("hello"); //What the function will do when called upon aka invoked//
}
myFunction(); //Invoking the function//
function helloName(name = "Tyler") { //Giving the function a default value for the paramater "name" to use if an arugment is not provided//
    console.log(`Hello ${name}`);
}
helloName(); //Function will use the default value//
helloName("Jasmine"); //Function will use the argument//
function logKey(event) { //Creates a function that tells the user what key they pressed//
    console.log(`You pressed "${event.key}"`);
}
textBox.addEventListener("keydown", logKey); //Listens to when a key is pressed and then uses the previous function//
textBox.addEventListener("keydown", function (event) {
    console.log(`You pressed "${event.key}"`); //A compact version of the previous 2 things//
});
textBox.addEventListener("keydown", (event) => {
    console.log(`You pressed "${event.key}"`); //The same function as before but omitting the word "function"//
});
const originals = [1, 2, 3]; //Array, using []//
const doubled = originals.map(item => item * 2); //Using an arrow function and also omitting "return" since it would only be 1 line//
console.log(doubled); //Checking//
function doubleOriginal(item) { //The above function, longhand//
    return item * 2;
}
/*Variables outside of functions are "global" while variables defined inside
of a function are limited to the scope of that function only. This means that 
functions can use, edit, or remove variables outside of their "function {...}"
but outside code and other functions cannot use each other's variables*/
