/*console.log('Hello world!');

let firstName = 'Adura';
const lastName = 'Adegboye';

console.log(firstName);
console.log(lastName);
// const myId = '44738';

// primitive data types


// string(can either be single or double quotes)

let val;

let fName = 'Adura';
val = fName;

// number
let age = 25;
val = age;

// boolean
let isGood = true;
val = isGood;

// undefined
let healthissue;
val = healthissue;

// null
let cooking = null;
val = cooking;

// symbol
let sym = Symbol();
val = sym;

console.log(val);

// template literal/string
console.log(fName.slice(1,3).toUpperCase());
console.log(fName.substring(1,3).toUpperCase());

let fruits =['apple', 'orange', 'mango', 'banana']
val = fruits.slice(0,2)
console.log(val);

val = fruits;
console.log(val);
val = fruits.slice(0,2)
console.log(fruits.reverse(0,2))
val = fruits.sort();
console.log(fruits);

const person = {
    hobbies: ['read', 'care', 'eat', 'keypad warrior'],
    address : {
        state: 'Anambra',
        city: 'Awka'
    }
}

console.log(person.address.city);

const studentsUptech = [
    {
        id: 1,
        fname: "Adura",
        age: 23,
        isGraduate: true,
    },
    {
        id: 2,
        fname: "Adura",
        age: 23,
        isGraduate: true,
    },
    {
        id: 3,
        fname: "Adura",
        age: 23,
        isGraduate: true,
    },
    {
        id: 4,
        fname: "Adura",
        age: 23,
        isGraduate: true,
    },
    {
        id: 5,
        fname: "Adura",
        age: 23,
        isGraduate: false,
    }
];
    // weather app
// multiple conditions 
let weather = prompt('Enter weather(opt: rain | sunny | snow):').toLowerCase();
if (weather ==='rain'){
    console.log('Wear heavy clothing');
}else if( weather === 'sunny'){
    console.log('wear light clothing');
}else if (weather ==='snow'){
    console.log('Wear heavy clothing');
}else{
    console.log('INVALID INPUT!');
}

// and gate
let x = 10;
let y = 20;
// and operator (AND)
if(x < 5 && y > 15){
    console.log('yes');
}else{
    console.log('no');
}
// or operator
if(x < 5 || y > 15){
    console.log('yes');
}else{
    console.log('no');
}

// tennary ?:
x > 5 && y > 15 ? console.log('yes') : console.log('no');

// switch
let theWeather = 'snow';
switch((theWeather).toLowerCase()){
    case 'rain':
        console.log('UMBRELLA');
        break;
    case 'snow':
        console.log('light cloth');
        break;
    case 'sunny':
        console.log('heavy cloth');
        break;
    default:
        console.log('INVALID SELECTION');
        break;
}

function greets(name= 'Adura') {
    console.log(`hello, how are you ${name}`);
}
greets()
function addnums(num1=7, num2){
    console.log(num1 + num2);
}
addnums(undefined, 6);

console.log(document);*/