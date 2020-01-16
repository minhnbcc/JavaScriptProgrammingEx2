let l = '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~';

let firstName ='Minh';
let lastName='Hoang';
let age=19;

console.log(l);

// Concatenation
let messageConcatenation = 'My name is '+ firstName + ' ' + lastName + ' and my age is ' + age + '.';
console.log(messageConcatenation);
console.log(l);

//String Template/Template Literal
let messageStringLiteral = `My name is ${firstName} ${lastName} and my age is ${age}`;
console.log(messageStringLiteral);
console.log(l);

//Excape & New Line
let a= 'Add a new line \nThis is another line';
console.log(a);
console.log(l);

let b = 'I qupted the person as saying "I love Javascript"';
console.log(b);
console.log(l);

let c = 'I qupted the person as saying "I love Javascript"';
console.log(c);
console.log(l);

console.log('String Functions');

let d = 'abcdefg';

//length of string
console.log(`Length of d - ${d.length}`);

//toupper
d=d.toUpperCase();
console.log(d);

//to lower
d=d.toLowerCase();
console.log(d);

//substr
let e = d.substr(2,4);
console.log(e);

//substring
let f=d.substring(3);
console.log(f);        

//indexof
let index = d.indexOf('c');
console.log(index);