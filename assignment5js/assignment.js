
var time = '01:00:00';
var actualTime = time.split(':');
var totalSeconds = (actualTime[0]) * 60 * 60 ;
var overallseconds = ( totalSeconds * 10);
console.log(totalSeconds);
console.log(overallseconds);


//operator sub
var x = 10;
var y = 20;
var z = (x-y);
console.log(z);

//add
var x = 6;
var y = 4;
var z = (x+y);
console.log(z);

//terminary operator

// if(number % 3 == 0){
//     console.log('number is true');
// }
// else{
//     console.log('number is false');
  
// }

 
 function getTotalCount(){
 var birds =10
 var animals=20
 return(birds+animals);
 }
 console.log(getTotalCount());

 
     const number=prompt('Enter number here');
     if(number % 2 == 0 ){
       console.log('number is even ');
   }
     else{
     console.log('number is odd ');
 }

//  const age = prompt('enter number here');
//  if (age >= 18){
//      console.log('eligible for voting')
//  }
//  else{
//      console.log('not eligible for voting');
//  }


//  var a= "manikanta"
//  var b = a.length;
//  if (b % 2 == 0){
//      console.log('even');
//  }
//  else{
//      console.log('odd');
//  }


 var names = 'uxfactory';
 var firstElement = names.substring(2);
console.log(firstElement);


// const number1=prompt('Enter number here');
// if(number1 % 2 == 0 && number1<10){
//   console.log('number is even and less then 10');
// }
// else{
// console.log('number is odd and greater then 10');
// }

// var a=10;
// var b=3
// if(a % b == 0){
//     console.log('true');
// }
// else{
//     console.log('false');
// }

var a = 8;
var b = 4;
if (a + b == 2){
   console.log('odd');
}
else{
    console.log('even');
}

function max(){
    var a = Math.max("1, 2, 5, 6");
    var x = a .Math.max();
};
console.log(x);


function checkPalindrome(str) {
    var len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i])
         {
            return 'It is not a palindrome';
        }  
    }
    return 'It is a palindrome';
}

// take input
var string = prompt('Enter a string: ');
var value = checkPalindrome(string);
console.log(value);