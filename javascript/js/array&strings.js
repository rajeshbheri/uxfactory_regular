function string(big) {
    var worldstring = 'hello world';
}
var txt = (str);
console.log(str);

//indexOf
var str = "this is string";
console.log(str);
var position = str.indexOf('t');
console.log(position);

//slice

var str = "this is string";
var substr = str.slice(3,9  );
console.log(substr);

//toUpperCase
var str = "this is string";
console.log(str.toUpperCase());

//toLowerCase
var str = "this is string";
console.log(str.toLowerCase());

//charAt
var str = "charAT method";
var char1 = str.charAt( 7);
console.log(char1)

//charAt
var str = "started javascript";
var char5 = str.charAt(5);
console.log(char5)

//charCodeAt
var str = "string methods";
var char6 = str.charCodeAt(6);
console.log(char6)

//codepointAt
var char1 = str.codePointAt(1);
console.log(char1)

//fixed
var worldString = 'Hii, everyone';

console.log(worldString.fixed());


//padmasked
var fullNumber = '9515565682';
var last4Digits = fullNumber.slice(-4);
var maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);

//pad start
var str2 = 'number';
console.log(str2.padStart(7, '1'));

var str3 = 'rajesh';
console.log(str3.padStart(10, ','));

//padEnd
var str1 = 'Javascript string methods';
console.log(str1.padEnd(40, '.'));

var str2 = 'number';
console.log(str2.padEnd(7, '1'));

var str3 = 'rajesh';
console.log(str3.padEnd(10, ','));

//replace
var txt = 'three monkey are they?';
console.log(txt.replace('monkey','dog'));
console.log(txt);

var p = 'she is going away she';
console.log(p.replace('she','he'));
//console.log(p)

//replace all
var nam = 'Hi rajesh. How are you rajesh rajesh rajesh?';
console.log(nam.replaceAll('rajesh','Anil'))
// console.log(nam);

var number = '9515565682';
console.log(number.replaceAll('5','0'))



//arrays//

//splice
var months = ['jan', 'feb', 'april', 'june']
months.splice(3, 2, 'march');
months.splice(5, 4, 'may');

console.log(months);

// //sort
 var names = ['rajesh', 'anil', 'jadheesh', 'chandini', 'eswari', 'anirudh sir', 'ratna mam'];
 names.sort();
 console.log(names);

//some
var array = [1, 2, 3, 4, 5];

var even = (element) => element % 5 === 0;

console.log(array.some(even));

//slice
var animals = ['cat', 'dog', 'cow', 'fox', 'monkey'];
console.log(animals.slice(4));

var some = ['Hi', 'Hello', 'How', 'Are', 'You'];
console.log(some.slice(-2));

var some = ['Hi', 'Hello', 'How', 'Are', 'You'];
console.log(some.slice(5));

//SHIFT

var names = ["anil","chandini","eswari","jagadheesh","rajesh"];
names = names.shift();
    console.log(names);

var number = [1, 2, 3, 4, 5];
var firstElement = number.shift();
console.log(firstElement);

//unshift
var names = ["anil","chandini","eswari"];
console.log(names.unshift("jagadheesh","rajesh"));
console.log(names);

var names = ["anil",];
console.log(names.unshift("jagadheesh","rajesh"));
console.log(names);

//pop
var animals = [ 'ant', 'cat', 'dog', 'fish'];
console.log(animals.pop());
console.log(animals);

var number = ['1','2','3','4','5'];
console.log (number.pop());
console.log (number);

//push
var names = ['anil','chandini','eswari' ];
console.log(names.push('jagadheesh', 'rajesh'));
console.log (names);

var vechicle = [ 'auto','bus','car' ];
console.log(vechicle.push('tractor', 'lorry'));
//console.log(vechicle);


//reverse
var names = ['rajesh', 'bheri'];
names.reverse();
console.log(names);

var number = ['1','2','3','4','5','6','7','8','9','10','11'];
number.reverse();
console.log(number);